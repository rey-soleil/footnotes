import React from 'react';
import '../footnotes.css';
import { Note } from './Note';

export const exampleFootnote = [
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
    }
];

export function Notes(){
    return (
        <div className='notes'>
            {exampleFootnote.map((noteInfo, index) => { 
                return <div>
                    <Note noteInfo={noteInfo} index={index}/>
                </div>;
            })}
        </div>
    );
}