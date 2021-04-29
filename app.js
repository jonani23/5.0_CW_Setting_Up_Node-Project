const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (request, response) => {
    response.send("Jonani is playing with Backend Coding");
});

app.listen(PORT, () => {
    console.log(`Server listenng on port ${PORT}`);
});