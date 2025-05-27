import React, { useState } from 'react'
import UseMemo from './UseMemo'
import ReactMemo from './ReactMemo'

const App = () => {
  const [todoList, setTodoList] = useState([])
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState("")
  const [userInputs, setUserInputs] = useState([])
  function handleClick(){
    setTodoList([...todoList, "New Todo"])
  }
  function handleAdd(e){
    if (inputValue.trim().length > 5) {
      setUserInputs([...userInputs, inputValue.trim()])
      setInputValue('')
    } else {
      alert('Task must be more than 5 characters')
    }
  }
  return (
    <div className='app'>
      <div className='todo-container'>
        <h1>My Todos</h1>
        {todoList.map((item, index) => {
          return (
            <p key={index}>{item}</p>
          )
        })}
        <button onClick={handleClick}>Add Todo</button>
      </div>
      <div className='counter-container'>
        <p>Count: {count}</p>
        <button onClick={() => setCount(prev => prev + 1)}>+</button>
      </div>
      <UseMemo />
      <div>
        <h1>React.memo</h1>
        <input 
          type="text" 
          min="5" 
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}  
          placeholder="Enter task (min 6 chars)"
        />
        <button onClick={(e) => handleAdd(e)}>Add Skill</button>
        <ReactMemo userInputs={userInputs}/>
      </div>
    </div>
  )
}

export default App