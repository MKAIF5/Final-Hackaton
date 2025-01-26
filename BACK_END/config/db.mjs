import mongoose from 'mongoose';

const mongodbUri = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        // env hard coded because not working
        const connectionInstance = await mongoose.connect("mongodb+srv://mrsaifullah025:saifullah@cluster0.jlild.mongodb.net/kaif-db");

        console.log(`\n🌿 MongoDB connected ! 🍃\n`);

        mongoose.connection.on(
            "error",
            console.error.bind(console, "Connection error:"),
        );

        process.on("SIGINT", () => {
            // Cleanup code
            mongoose.connection.close();

            console.log("Mongoose connection closed due to application termination");
            process.exit(0);
        });
    } catch (error) {
        console.error("MONGODB connection FAILED ", error);
        process.exit(1); // Exited with error
    }
};

try {
await connectDB()
}catch{

}

export default connectDB