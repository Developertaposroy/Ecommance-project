// index.js

const mongoose = require("mongoose");
const app = require("./app");
const PORT = 5030;

// Use the default MongoDB connection URL for a local server
const URL = 'mongodb+srv://tast:tast@cluster0.d7okwi3.mongodb.net/tast?retryWrites=true&w=majority&appName=AtlasApp'; // Replace 'your-database-name' with your actual database name

async function connectDB() {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected...');

        app.listen(PORT, function () {
            console.log("App Run @5030");
        });
    } catch (err) {
        console.error(err);
        // Handle the error and send an appropriate response
        // For example, you can send a 500 Internal Server Error response
        app.use((req, res) => {
            res.status(500).json({ status: "error", message: "Internal Server Error" });
        });
    }
}

connectDB();
