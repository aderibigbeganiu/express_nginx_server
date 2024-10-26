import express from "express";

// Create a new express application instance
const app = express();

// The port the express app will listen on
const port = process.env.SERVER_PORT || 5000;
const host = process.env.SERVER_HOST || "0.0.0.0";

app.get("/", (req, res) => {
	try {
		const headers = req.headers;
		res.send(headers);
	} catch (error) {
		console.log(error);
	}
});

// Serve the application at the given port
app.listen(port, () => {
	// Success callback
	console.log(`Listening at http://${host}:${port}/`);
});

// Route definitions
