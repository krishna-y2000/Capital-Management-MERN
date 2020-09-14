const mongoose = require('mongoose');
require('dotenv').config({ path: '/home/krishnaraj/Study/Web/capital-management-mern/config/config.env' });
const capitalDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
  } catch (err) {
    console.log(`Error: ${err.message}`.red);
    process.exit(1);
  }
}

module.exports = capitalDB;