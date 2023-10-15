import ReactDOM from 'react-dom/client';
import './index.css';
import { WaitersApp } from './features';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <WaitersApp />
      </Provider>
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);