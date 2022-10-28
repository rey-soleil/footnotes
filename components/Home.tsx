import { Divider } from '@mui/material';
import React, { useEffect } from 'react';
import './footnotes.css';
import { Header } from './Header';
import { Notes } from './Notes';

export function Home(){

    useEffect(() => {
        document.title = 'footnotes';
      }, []);
      
    return (
        <div className='home'>
            <Header />
            <Divider />
            <Notes />
        </div>
    );
}