import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import isUrl from 'validator/lib/isURL';
import { Note } from './Note';
import { NoteType } from './Notes';

export default function CreateFootnote(){
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [notes, setNotes] = useState<NoteType[]>();

    const handleChangeurl = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value);
    }

    const handleChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    }

    const handleSubmitNote = () => {
        setNotes(notes => notes ? [...notes, {url, description}] : [{url, description}]);
        setUrl('');
        setDescription('');
    }

    return (
        <div>
            <div className="createFootnoteHeader">
                <TextField label="Add a url here" value={url} onChange={handleChangeurl} error={url.length > 0 && !isUrl(url)}/>
                <Button disabled={!isUrl(url)} variant="contained" onClick={handleSubmitNote}>Add a note</Button>
            </div>
            <TextField className="createFootnoteDescription" multiline minRows={3} label="(Optional) Add a description here" value={description} onChange={handleChangeDescription}></TextField>
            <div className="createdFootnotes">
                {notes && notes.length > 0 && notes.map((note, index) => {
                    return <div key={index}>
                        <Note url={note.url} description={note.description} index={index}/>
                    </div>;
                })}
                {notes && notes.length > 0 && (<Button variant="contained">Create your footnote!</Button>)}
            </div>
        </div>
    );
}