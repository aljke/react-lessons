import ReactDOM from 'react-dom/client';
import './index.css';
import { WaitersApp } from './features/waiters';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { NotFound } from './features/NotFound';
import { About } from './features/About';
import "./App.css";

function App() {
  const isActiveClass = ({ isActive }: any) => isActive ? "active" : "";
  
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
          <nav className='navigation'>
            <NavLink to="/" className={isActiveClass}>Home</NavLink>{' | '}
            <NavLink to="/waiters" className={isActiveClass}>Waiters</NavLink>{' | '}
            <NavLink to="/about" className={isActiveClass} end>About</NavLink>
          </nav>
        <Routes>
          <Route path="/waiters/*" element={<WaitersApp />} />
          <Route path="/" element={<WaitersApp />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);