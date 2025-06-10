import { createContext, useContext, useState, useCallback } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [item, setItem] = useState(null);

  const showNotification = useCallback((product) => {
    setItem(product);
    setTimeout(() => {
      setItem(null);
    }, 5000);
  }, []);

  return (
    <NotificationContext.Provider value={{ item, showNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
