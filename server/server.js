const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const pool = require("./db");

dotenv.config();
app.use(cors());
app.use(express.json());

app.get("/footnotes/:id", async (req, res) => {
    try {
        const description = await pool.query("SELECT description as footnote_description FROM footnote WHERE footnote.id=$1", [req.params.id]);
        const notes = await pool.query("SELECT note.description as description, note.index as index, note.url as url FROM footnote JOIN note ON footnote.id=note.footnote_id WHERE footnote.id=$1", [req.params.id]);
        res.json({
            ...description.rows[0],
            notes: notes.rows
        });
    } catch(err) {
        console.log(err.message);
    }
});

app.listen(process.env.PORT, () => console.log(`Simple server running on http://localhost:${process.env.PORT}`))

