import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { useCallback, useState, useRef, createContext } from 'react';
import CartNotification from './components/CartNotification';
import Footer from './components/Footer';

export const NotificationContext = createContext();

function App() {
  const [lastAdded, setLastAdded] = useState(null);
  const timeoutRef = useRef(null);

  const handleShowNotification = useCallback((product) => {
    setLastAdded(product);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setLastAdded(null);
      timeoutRef.current = null;
    }, 5000);
  }, []);

  return (
    <NotificationContext.Provider value={handleShowNotification}>
      <div className="flex flex-col min-h-screen">
        <Header />

        {/* Main content should grow to fill available space */}
        <main className="flex-grow p-4">
          <Outlet />
        </main>

        <Footer />
      </div>

      {lastAdded && lastAdded.thumbnail && (
        <CartNotification
          key={lastAdded.id}
          item={lastAdded}
          onClose={() => {
            setLastAdded(null);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
        />
      )}
    </NotificationContext.Provider>
  );
}

export default App;
