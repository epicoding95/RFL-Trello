import React, { useContext } from 'react';
import { InputContext } from '../Context/DataContext';
const DeleteDone = () => {

    const { userInputContext, setUserInputContext } = useContext(InputContext)

    const deleteDoneItems = (status) => {
        const dataFromStorage = JSON.parse(localStorage.getItem('allData'))
        const newDataForStorage = dataFromStorage.filter((item) => item.status !== 'done')
        console.log(newDataForStorage)
        setUserInputContext(newDataForStorage)
        localStorage.setItem('allData', JSON.stringify(newDataForStorage))
    }

    return (
        <div>
            <button onClick={deleteDoneItems} className='DeleteButton'> im a button</button>
        </div>
    );
};

export default DeleteDone;