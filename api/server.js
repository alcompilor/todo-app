import express from "express";
import fs from "fs/promises";

const server = express();
const PORT = 3000

server.get("/api", async (req, res) => {
    const todayDate = new Date().toISOString().split('T');
    await fs.appendFile(`./logs/${todayDate[0]}`, `GET Request [${todayDate[1]}]\n`);

    res.json([
        { id: 1, task: "Cook Dinner at 6 PM", done: false },
        { id: 2, task: "Sleep", done: false },
        { id: 3, task: "Buy stuff online", done: false },
        { id: 4, task: "Study for exam", done: true }

    ])
})

server.listen(PORT, (err) => {
    err ? console.log("ERROR") : console.log("Server running...")
});