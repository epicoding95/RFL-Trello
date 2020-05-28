import React, { createContext, useState } from 'react';
import { data } from '../Data/Index';

export const InputContext = createContext();

export const DataContext = ({ children }) => {
    const [userInputContext, setUserInputContext] = useState(data)

    return (
        <InputContext.Provider value={{ userInputContext, setUserInputContext }}>
            {children}
        </InputContext.Provider>
    );
};

