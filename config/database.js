import mongoose from "mongoose";

const database = async () => {
  try {
    console.log("Melakukan koneksi ke mongodb");

    const response = await mongoose.connect(
      "mongodb://127.0.0.1:27017/tugas?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.8"
    );

    console.log(
      `Koneksi ke MongoDB berhasil host : ${response.connection.host}`
    );
  } catch (error) {
    console.error("Gagal terkoneksi dengan MongoDB");

    process.exit(1);
  }
};

export default database;