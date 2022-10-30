import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import isUrl from 'validator/lib/isURL';
import { Note } from './Note';
import { NoteType } from './Notes';

export default function CreateFootnote(){
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [notes, setNotes] = useState<NoteType[]>();
    const navigate = useNavigate();

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

    async function postFootnote() {
        try {
            const response = await fetch(`http://localhost:4000/footnotes`, {method: 'POST',   headers: {'Content-Type': 'application/json'}, body: JSON.stringify({footnote_description: '', notes: notes})})
            .then(response => response.json())
            .then(data => {
                console.log(data);
                navigate(`/footnotes/${data.id}`);
            });
        } catch(err){
            console.log(err);
        }
    }

    return (
        <div>
            <div className="createFootnoteHeader">
                {/* TODO: allow user to add a footnote description */}
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
                {notes && notes.length > 0 && (<Button variant="contained" onClick={postFootnote}>Create your footnote!</Button>)}
            </div>
        </div>
    );
}