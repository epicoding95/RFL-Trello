import React, { useState, useContext } from 'react';
import Item from '../Components/Item';
import { InputContext } from '../Context/DataContext';

const Input = () => {
    const [userInput, setUserInput] = useState('');
    const { userInputContext, setUserInputContext } = useContext(InputContext)

    const pushData = () => {
        const objectToPush = {
            id: userInputContext.length,
            icon: '⭕️',
            status: 'open',
            title: 'anything',
            content: userInput
        }
        setUserInputContext(prevContext => {
            return [...prevContext, objectToPush]
        })
        console.log(userInputContext)
    }
    /*{
     id: 4,
     icon: "⭕️",
     status: "open",
     title: "Daily reading",
     content: "Finish reading Intro to UI/UX"
 }*/
    return (
        <div className='inputContainer'>
            <input className='inputField' placeholder='add todo..' value={userInput} onChange={(e) => setUserInput(e.target.value)} />
            <button onClick={pushData} className='inputFieldButton'> X</button>
        </div>
    );
};

export default Input;