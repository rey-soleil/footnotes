const express = require('express');

const app = express();

app.get("/footnotes/:id", (req, res) => {
    const { id } = req.params;
    res.send(`at localhost it should say id=${id}`);
    console.log(`in node.js it should print id=${id}`);
});

app.listen(4000, () => console.log("Simple server running on http://localhost:4000"))

