import { useEffect, useState } from 'react';
import SplashScreen from './SplashScreen/SplashScreen';
import './App.css';
import Card from './components/Card';

function App() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }, []);

  if (show) {
    return <SplashScreen />;
  }

  return <Card primary />;
}

export default App;
