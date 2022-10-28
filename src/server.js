const express = require('express');

const app = express();

app.get("/footnotes/:id", (req, res) => {
    const { id } = req.params;
    res.send(`the frontend should read ${id}`);
    console.log(`the backend should read ${id}`);
});

app.listen(4000, () => console.log("Simple server running on http://localhost:4000"))

