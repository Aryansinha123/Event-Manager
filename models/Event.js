// import mongoose from 'mongoose';

// const EventSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//     date: { type: Date, required: true },
//     time: { type: String, required: true },
//     venue: { type: String, required: true },
//     price: { type: Number, required: true },
//     createdBy: { type: String, required: true },
// }, { timestamps: true });

// export default mongoose.models.Event || mongoose.model('Event', EventSchema);
// models/Event.js
import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String, required: true },
  date:        { type: Date,   required: true },
  location:    { type: String, required: true },
  organizer:   { type: String, required: true }, // manager’s user ID
}, { timestamps: true });

export default mongoose.models.Event || mongoose.model('Event', EventSchema);
