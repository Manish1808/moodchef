import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(bodyParser.json());

// Allow multiple frontend origins
const allowedOrigins = ["http://localhost:5173", "http://localhost:5177"];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST"],
    credentials: true
}));

// Debugging Middleware (Optional)
app.use((req, res, next) => {
    console.log("Incoming request from origin:", req.headers.origin);
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
});

// Import routes
import userAuthRoute from "./routes/userAuth.route.js";
import recipeRoutes from "./routes/recipeRoutes.js"; // Import recipe routes

// Use routes
app.use("/api/auth", userAuthRoute);
app.use("/api", recipeRoutes); // Register the recipe route

export { app };
