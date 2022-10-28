const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const pool = require("./db");

dotenv.config();
app.use(cors());
app.use(express.json());

const exampleFootnote = [
    {
        url: 'https://www.goodreads.com/book/show/54870131-the-day-the-world-stops-shopping',
        title: 'The Day the World Stops Shopping',
        comment: 'An eye-opening read.'
    },
    {
        url: 'https://open.spotify.com/album/7D2NdGvBHIavgLhmcwhluK?si=lEHtx4ajSI6ZehEX7NQB_g',
        title: 'Yeezus',
        comment: 'Reinvented rap AND electronic music at the same time.'
    },
    {
        url: 'https://www.theatlantic.com/ideas/archive/2022/10/francis-fukuyama-still-end-history/671761/',
        title: 'More Proof That This Really Is the End of History',
        comment: 'Francis Fukuyama!'
    },
    {
        url: 'www.google.com',
        title: 'Test of backend',
        comment: 'by rey <3'
    }
];

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

