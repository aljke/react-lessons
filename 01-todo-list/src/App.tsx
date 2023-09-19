import logo from './logo.svg';
import './App.css';
import { TodosList } from './components/TodoList';



function App() {
  return (
    <div>
      <header>
        <TodosList/>
      </header>
    </div>
  );
}

export default App;
