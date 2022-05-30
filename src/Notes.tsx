import React from 'react';
import './footnotes.css';
import { Note } from './Note';

const exampleNotes = [
    {
        url: 'https://www.goodreads.com/book/show/54870131-the-day-the-world-stops-shopping',
        comment: 'An eye-opening read.'
    },
    {
        url: 'https://open.spotify.com/album/7D2NdGvBHIavgLhmcwhluK',
        comment: 'Reinvented rap AND electronic music at the same time.'
    }
];

export function Notes(){
    return (
        <div className='notes'>
            {exampleNotes.map((noteInfo) => { 
                return <Note noteInfo={noteInfo} />;
            })}
        </div>
    );
}