import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { getDegFromCenterOrigin } from './utils';
import useEventListener from './hooks/use-event-listener';
import Routes from './components/Routes';

const getGradient = (x, y) => {
  return `linear-gradient( ${getDegFromCenterOrigin(x, y)}deg, #fdfbfb 1%, #ebedee 100%)`;
};

export default function App() {
  const [[x, y], setCoords] = useState([0, 0]);

  useEventListener('mousemove', ({ clientX, clientY }) => {
    setCoords([clientX, clientY]);
  });

  return (
    <div className="App" style={{ backgroundImage: getGradient(x, y) }}>
      <Router>
        <div>
          <Routes />
        </div>
      </Router>
    </div>
  );
}
