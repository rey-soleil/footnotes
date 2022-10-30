import { Divider } from '@mui/material';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateFootnote from './components/CreateFootnote';
import { Header } from './components/Header';
import { Notes } from './components/Notes';

function App() {
  return (
    <>
      <Header />
      <Divider />
      <Routes>
        <Route path="/create" element={<CreateFootnote/>}/>
        <Route path="/footnotes/:id" element={<Notes/>}/>
        <Route path="*" element={<Navigate to="/create" replace />}/>
      </Routes>
    </>
  );
}

export default App;
