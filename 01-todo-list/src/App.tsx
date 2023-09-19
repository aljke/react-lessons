import './App.css';
import { TodosList } from './components/TodoList';
import { TodoItem, TodoStateEnum } from './types';

const todos: TodoItem[] = [
  { id: 1, state: TodoStateEnum.Created, description: 'Feed the python', deadline: 'Today' },
  { id: 2, state: TodoStateEnum.Completed, description: 'Donate to the army', deadline: '19 Sep' },
  { id: 3, state: TodoStateEnum.InProgress, description: 'Complete react homework', deadline: '21 Sep' },
  { id: 4, state: TodoStateEnum.InProgress, description: 'Go to the gym', deadline: 'Tomorrow' },
  { id: 5, state: TodoStateEnum.Completed, description: 'Take a nap' }
];

function App() {
  return (
    <div>
      <header>
        <TodosList items={todos}/>
      </header>
    </div>
  );
}

export default App;
