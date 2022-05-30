import React from 'react';
import './footnotes.css';

export type NoteInfo = {
    url: string,
    comment: string,
}

export function Note(params: {noteInfo: NoteInfo}){
    const {noteInfo} = params;
    const {url, comment} = noteInfo;

    return (
        <div>
            <div>{comment}</div>
            <div>{url}</div>
        </div>
    );
}