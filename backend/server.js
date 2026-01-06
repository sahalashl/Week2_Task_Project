// Import dependencies
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// Load environment variables from .env
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Example: connect to database if you have a config
// const connectDB = require("./config/db");
// connectDB();

// Import routes
const routeFiles = [
  "userRoutes",
  "taskRoutes"
  // add more route files if needed
];

// Automatically load routes from routes folder
routeFiles.forEach((file) => {
  const route = require(`./routes/${file}`);
  app.use("/api", route);
});

// Basic root route
app.get("/", (req, res) => {
  res.send("Backend is running on Render!");
});

// Handle 404
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server error" });
});

// Listen on Render's port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

