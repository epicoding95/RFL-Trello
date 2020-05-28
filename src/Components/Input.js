import React, { useState, useContext } from 'react';
import Item from '../Components/Item';
import { InputContext } from '../Context/DataContext';
import { v4 as uuidv4 } from 'uuid';
const Input = () => {
    const [userInput, setUserInput] = useState('');
    const { userInputContext, setUserInputContext } = useContext(InputContext)

    const pushData = () => {
        const objectToPush = {
            id: uuidv4(),
            icon: '⭕️',
            status: 'open',
            title: 'anything',
            content: userInput
        }
        console.log(objectToPush.id, 'id from input')
        setUserInputContext(prevContext => {
            const allData = [...prevContext, objectToPush]
            localStorage.setItem('allData', JSON.stringify(allData))
            return allData
        })
        setUserInput('')
    }



    return (
        <div className='inputContainer'>
            <input
                className='inputField'
                placeholder='add todo..'
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        pushData()
                    }

                }} />
            <button onClick={pushData} className='inputFieldButton'> X</button>
        </div>
    );
};

export default Input;