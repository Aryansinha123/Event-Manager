// import mongoose from 'mongoose';

// const MONGO_URI = process.env.MONGO_URI; // Add this in your .env file

// if (!MONGO_URI) {
//     throw new Error('Please define the MONGO_URI environment variable');
// }

// let cached = global.mongoose;

// if (!cached) {
//     cached = global.mongoose = { conn: null, promise: null };
// }

// async function connectToDatabase() {
//     if (cached.conn) {
//         return cached.conn;
//     }

//     if (!cached.promise) {
//         cached.promise = mongoose.connect(MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         }).then((mongoose) => mongoose);
//     }

//     cached.conn = await cached.promise;
//     return cached.conn;
// }

// export default connectToDatabase;
import mongoose from 'mongoose';

const connectToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'yourDatabaseName', // Replace with your database name
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

export default connectToDatabase;
