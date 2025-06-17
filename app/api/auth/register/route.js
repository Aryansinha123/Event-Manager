import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  await connectToDatabase();

  try {
    const { name, email, password, role } = await req.json();

    // Basic validation
    if (!name || !email || !password || !role) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    return new Response(JSON.stringify({ message: 'User registered successfully', user }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to register user' }), { status: 500 });
  }
}
