import React, { useState, useMemo } from 'react';
import ReactMemo from './ReactMemo';
import UseMemo from './UseMemo';

function App() {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState('');

  
 const addTodo = () => {
    if (inputValue.length > 5) {
        setTodos([...todos, inputValue]);
        setInputValue('');
    }
};
  

 
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

 
  const addCustomTodo = () => {
    if (inputValue.length > 5) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  

  
  const memoizedTodos = useMemo(() => {
    return todos.map((todo, index) => (
      <li key={index}>{todo}</li>
    ));
  }, [todos]);

  return (
    <div>
      <h1>Task Management App</h1>
      
      <div>
        <h2>Todo List</h2>
        <button onClick={addTodo}>Add todo</button>
        <ul>{memoizedTodos}</ul>
        
        <div>
          <input 
            type="text" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
            placeholder="Enter custom task (min 6 chars)"
          />
          <button onClick={addCustomTodo}>Submit</button>
          {inputValue.length <= 5 && inputValue.length > 0 && (
            <p style={{color: 'red'}}>Task must be more than 5 characters</p>
          )}
        </div>
      </div>
      
      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={incrementCounter}>Increment</button>
      </div>
      
      <UseMemo data={todos} />
      <ReactMemo count={counter} />
    </div>
  );
}

export default App;