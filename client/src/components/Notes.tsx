import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../footnotes.css';
import { Note } from './Note';

export type NoteType = {
    url: string;
    description: string;
}

export type FootnoteType = {
    footnote_description: string;
    notes: NoteType[];
}

export function Notes(){
    const [footnotes, setFootnotes] = useState<FootnoteType>();
    const {id} = useParams();

    async function loadFootnote(){
        try {
            const response = await fetch(`http://localhost:4000/footnotes/${id}`)
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

    if(!footnotes){
        return <></>;
    }

    return (
        <div className='notes'>
            <div className="description">{footnotes.footnote_description}</div>
            {footnotes.notes.map((note, index) => {
                return <div key={index}>
                    <Note url={note.url} description={note.description} index={index}/>
                </div>;
            })}
        </div>
    );
}