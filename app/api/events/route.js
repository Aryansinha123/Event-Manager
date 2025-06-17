// import connectToDatabase from "@/lib/mongodb";
// import Event from "@/models/Event";

// export async function GET() {
//     await connectToDatabase();
//     try {
//         const events = await Event.find(); // Fetch all events
//         return new Response(JSON.stringify(events), { status: 200 });
//     } catch (error) {
//         return new Response(JSON.stringify({ error: "Failed to fetch events" }), { status: 500 });
//     }
// }

// export async function POST(req) {
//     await connectToDatabase();
//     try {
//         const data = await req.json();
//         const newEvent = await Event.create(data); // Create a new event
//         return new Response(JSON.stringify(newEvent), { status: 201 });
//     } catch (error) {
//         return new Response(JSON.stringify({ error: "Failed to create event" }), { status: 500 });
//     }
// }

// export async function DELETE(req) {
//     await connectToDatabase();
//     try {
//         const { id } = await req.json();
//         await Event.findByIdAndDelete(id); // Delete an event by ID
//         return new Response(JSON.stringify({ message: "Event deleted" }), { status: 200 });
//     } catch (error) {
//         return new Response(JSON.stringify({ error: "Failed to delete event" }), { status: 500 });
//     }
// }
import connectToDatabase from '@/lib/mongodb';
import Event from '@/models/Event';
import { authMiddleware } from '@/lib/authMiddleware';

export async function GET(req) {
    // Apply authentication middleware
    const isAuthorized = await authMiddleware(req, {
        json: (error) => {
            return new Response(JSON.stringify(error), { status: 401 });
        },
    });

    if (!isAuthorized) {
        return new Response('Unauthorized', { status: 401 });
    }

    // Connect to MongoDB
    await connectToDatabase();

    try {
        // Fetch events from the database
        const events = await Event.find({});
        return new Response(JSON.stringify(events), { status: 200 });
    } catch (error) {
        // Handle database errors
        return new Response(JSON.stringify({ error: 'Failed to fetch events' }), { status: 500 });
    }
}

// export async function POST(req) {
//   await connectToDatabase();
//   try {
//     const { title, description, date, location, organizer } = await req.json();

//     if (!title || !description || !date || !location || !organizer) {
//       return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400 });
//     }

//     const newEvent = await Event.create({ title, description, date, location, organizer });
//     return new Response(JSON.stringify(newEvent), { status: 201 });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: 'Failed to create event' }), { status: 500 });
//   }
// }

export async function POST(req) {
    // Middleware to authenticate the user
    const isAuthorized = await authMiddleware(req, {
        json: (error) => {
            return new Response(JSON.stringify(error), { status: 401 });
        },
    });

    if (!isAuthorized) {
        return new Response('Unauthorized', { status: 401 });
    }

    await connectToDatabase();

    try {
        // Parse incoming request data
        const { title, description, date, location, organizer } = await req.json();

        // Validate required fields
        if (!title || !description || !date || !location || !organizer) {
            return new Response(
                JSON.stringify({ error: 'All fields are required' }),
                { status: 400 }
            );
        }

        // Create a new event
        const newEvent = new Event({
            title,
            description,
            date,
            location,
            organizer,
        });

        // Save to the database
        await newEvent.save();

        return new Response(
            JSON.stringify({ message: 'Event created successfully', event: newEvent }),
            { status: 201 }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ error: 'Failed to create event' }),
            { status: 500 }
        );
    }
}


export async function DELETE(req) {
  await connectToDatabase();
  try {
    const { id } = await req.json();

    if (!id) {
      return new Response(JSON.stringify({ error: 'Event ID is required' }), { status: 400 });
    }

    const deletedEvent = await Event.findByIdAndDelete(id);
    if (!deletedEvent) {
      return new Response(JSON.stringify({ error: 'Event not found' }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: 'Event deleted successfully' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to delete event' }), { status: 500 });
  }
}
