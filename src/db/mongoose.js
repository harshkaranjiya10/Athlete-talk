import mongoose from "mongoose";

export const connectDb = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("MongoDB connected");
    }).catch(err => console.error(err));
}