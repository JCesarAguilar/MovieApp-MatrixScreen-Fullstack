require("dotenv").config();
const mongoose = require("mongoose");

const configDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "MatrixScreen",
    });
  } catch (error) {
    console.error("Error al conectar con MongoDB:", error.message);
  }
};

module.exports = configDb;
