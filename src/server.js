const express = require('express');

const app = express();

app.get("/users/:id", (req, res) => {
    const { id } = req.params;
    res.send('rey test');
    console.log(`rey requesting id ${id}`);
});

app.listen(4000, () => console.log("Simple server running on http://localhost:4000"))

