import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import Homepage from './Components/Homepage';
import Input from './Components/Input';
import { DataContext } from './Context/DataContext';
function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <DataContext>
        <Homepage />
        <Input />
        <Header />
      </DataContext>
    </DndProvider>
  );
}

export default App;
