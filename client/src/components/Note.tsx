import React from 'react';
import '../footnotes.css';

export function Note(params: {url: string, description: string, index: number}){
    const {url, description, index} = params;

    return (
        <div className='note'>
            <div className='index'>
                [{index}]
            </div>
            <div className='info'>
                <div className='link'>
                    <a href={url}>{url}</a>
                </div>
                <div className='comment'>
                    {description}
                </div>
            </div>
        </div>
    );
}