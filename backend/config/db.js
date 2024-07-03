import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://abhi:abhi@food-del-app.52osx26.mongodb.net/?retryWrites=true&w=majority&appName=Food-del-app/Food-del-app"
    )
    .then(() => console.log("DB Connected"));
};

// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.
