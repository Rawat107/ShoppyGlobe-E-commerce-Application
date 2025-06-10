import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { useCallback, useState, useRef } from 'react'
import CartNotification from './components/CartNotification'

import { createContext } from 'react'
export const NotificationContext = createContext();

function App() {
  const [lastAdded, setLastAdded] = useState(null);
  const timeoutRef = useRef(null)


  const handleShowNotification = useCallback((product) => {
    setLastAdded(product);

    if(timeoutRef.current){
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      setLastAdded(null)
      timeoutRef.current = null
    }, 5000);
  }, []);

  return (
    <NotificationContext.Provider value={handleShowNotification}>
      <Header/>
      <main className="p-4">
        <Outlet />
      </main>
      {lastAdded && lastAdded.thumbnail &&(
        <CartNotification key={lastAdded.id} item={lastAdded} onClose={() => {
          setLastAdded(null)
          if(timeoutRef.current) clearTimeout(timeoutRef.current)
        }} />
      )}
    </NotificationContext.Provider>
   
  )
}

export default App
