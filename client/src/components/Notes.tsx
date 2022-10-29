import React, { useEffect, useState } from 'react';
import '../footnotes.css';
import { Note } from './Note';

export function Notes(){
    const [footnotes, setFootnotes] = useState({footnote_description: '', notes: [{url: '', description: '', index: 0}]});

    async function loadFootnote(){
        try {
            const response = await fetch(`http://localhost:4000${window.location.pathname}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setFootnotes(data);
            });
        } catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        loadFootnote();
    }, []);

    return (
        <div className='notes'>
            <div className="description">{footnotes.footnote_description}</div>
            {footnotes.notes.map((note) => {
                return <div key={note.index}>
                    <Note url={note.url} description={note.description} index={note.index}/>
                </div>;
            })}
        </div>
    );
}