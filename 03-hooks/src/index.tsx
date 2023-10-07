import ReactDOM from 'react-dom/client';
import './index.css';
import { WaitersApp } from './features';
import React from 'react';

function App() {
  return (
    <div className="App">
      <WaitersApp />
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);