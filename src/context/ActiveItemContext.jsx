// context/ActiveItemContext.jsx
import { createContext, useState, useContext } from 'react';

const ActiveItemContext = createContext();

export const ActiveItemProvider = ({ children }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  
  return (
    <ActiveItemContext.Provider value={{ activeItem, setActiveItem }}>
      {children}
    </ActiveItemContext.Provider>
  );
};

export const useActiveItem = () => {
  return useContext(ActiveItemContext);
};