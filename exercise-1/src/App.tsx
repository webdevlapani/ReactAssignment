import * as React from 'react';
import { useState, useEffect } from 'react';
import './styles.css';

const App = () => {
  const [ctime, setTime] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="counteWrapper">
        <h1>{ctime}</h1>
      </div>
    </div>
  );
};

export default App;
