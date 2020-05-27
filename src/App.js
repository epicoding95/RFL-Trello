import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend';
function App() {
  return (
    <DndProvider backend={Backend}>
      <Header />
    </DndProvider>
  );
}

export default App;
