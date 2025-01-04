import React, { createContext, useState, useContext, useEffect } from 'react';

const BalanceContext = createContext();

export const BalanceProvider = ({ children }) => {
    const [balance, setBalance] = useState(localStorage.getItem('balance') || 0);

    useEffect(() => {
        localStorage.setItem('balance', balance);
    }, [balance]);

    return (
        <BalanceContext.Provider value={{ balance, setBalance }}>
            {children}
        </BalanceContext.Provider>
    );
};

export const useBalance = () => useContext(BalanceContext);