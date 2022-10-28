import React, { useEffect, useState } from 'react';
import '../footnotes.css';
import { Note } from './Note';

const EXAMPLE_ID = 50;

export function Notes(){

    const [footnotes, setFootnotes] = useState([]);

    async function loadFootnote(){
        const response = await fetch(`http://localhost:4000/footnotes/${EXAMPLE_ID}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setFootnotes(data);
        });
    }

    useEffect(() => {
        loadFootnote();
    }, []);

    return (
        <div className='notes'>
            {footnotes && footnotes.map((noteInfo, index) => { 
                return <div>
                    <Note noteInfo={noteInfo} index={index}/>
                </div>;
            })}
        </div>
    );
}