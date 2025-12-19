const express = require("express");
const app = express();

app.get("/", async (req, res) => {
    res.status(200).send("Hello, World!");
});

//start the server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
