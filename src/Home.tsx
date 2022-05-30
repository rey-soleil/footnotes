import { Divider } from '@mui/material';
import React from 'react';
import './footnotes.css';
import { Header } from './Header';
import { Notes } from './Notes';

export function Home(){
    return (
        <div className='home'>
            <Header />
            <Divider />
            <Notes />
        </div>
    );
}