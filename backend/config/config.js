const mongoose = require("mongoose");
require("colors");
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://21pw07:tDdXhz1fnlhnGT5X@cluster0.vxlgwgq.mongodb.net/JiraProject",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );
    console.log(`Mongodb Connected ${conn.connection.host}`.yellow);
  } catch (error) {
    console.error(`Error : ${error.message}`.red);
    process.exit(1);
  }
};

module.exports = connectDb;
