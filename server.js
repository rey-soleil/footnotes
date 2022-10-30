const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const pool = require("./db");

dotenv.config();
app.use(cors());
app.use(express.json());

app.post("/footnotes", async (req, res) => {
    try {
        const {footnote_description, notes} = req.body;
        const footnote = await pool.query("INSERT INTO footnote (description) VALUES ($1) RETURNING *", [footnote_description]);
        const {id, description} = await footnote.rows[0];
        notes.forEach(async note => {
            await pool.query("INSERT INTO note (index, url, description, footnote_id) VALUES ($1, $2, $3, $4)", [note.index, note.url, note.description, id]);
        });
        res.send({id, description});
    } catch(err) {
        console.log(err.message);
    }
});

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

