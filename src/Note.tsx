import React from 'react';
import './footnotes.css';

export type NoteInfo = {
    url: string,
    title: string,
    comment: string,
}

export function Note(params: {noteInfo: NoteInfo, index: number}){
    const {noteInfo, index} = params;
    const {url, title, comment} = noteInfo;

    return (
        <div className='note'>
            <div className='index'>
                [{index+1}]
            </div>
            <div className='info'>
                <div className='link'>
                    <a href={url}>{title}</a>
                </div>
                <div className='comment'>
                    {comment}
                </div>
            </div>
        </div>
    );
}