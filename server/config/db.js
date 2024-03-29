const mongoose = require('mongoose');

const connectDB = async () => {
  const client = await mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .catch((err) => {
      return console.log(err);
    });

  console.log('Connection success');
};

module.exports = connectDB;
