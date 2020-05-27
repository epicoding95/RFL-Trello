import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import Homepage from './Components/Homepage';
function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Homepage />
      <Header />
    </DndProvider>
  );
}

export default App;
