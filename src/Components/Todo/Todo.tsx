import React, { useEffect } from 'react'

import { useState } from 'react';



import  './Todo.css'

interface Item {
  id: number;
  label: string;
  complete: boolean;
}

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<Item[]>([
    {id: 0, label: 'Тестовое задание', complete: false},
  {id: 1, label: 'Прекрасный код', complete: false}
])

  const [input, setInput] = useState<string>('');

  const [filtered, setFiltered] = useState<Item[]>(todos)


  useEffect(() => {
    setFiltered(todos)
  }, [todos])

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement> | any ) => {
    e.preventDefault()
    const newTodo: Item = {
      id: Date.now(), label: input, complete: false,
    }
    setInput('')
    setTodos([...todos, newTodo]);
  }

  const toggleComplete = (id: number) => (
    setTodos(
      todos.map((todo) => {
        if(todo.id === id){
          return {...todo, complete: !todo.complete}
        }
        return todo
      })
    )
  )

  const handleFiltered = (status: any)  => {
    if(status === 'all'){
      setFiltered(todos)
    } else {
      const completedTodos: Item[] = todos.filter((todo) => todo.complete === status);
      setFiltered(completedTodos)
    }
    
  }

  return (
    <div className='todo__wrapper'>
      <div className='todo__container'>
        <h1>Todo</h1>
        <header className='todo__header'>
          <form onSubmit={(e) => handleAddTodo(e)}>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" autoFocus className="todo__header-input" name="text" placeholder='Type something' />
            <button onClick={handleAddTodo}>Add</button>
          </form>
        </header>
        <div>
          <ul className='todo__list'>
            {filtered.map((todo : Item) => (
              <li 
              key={todo.id}
              onClick={() => toggleComplete(todo.id)}
              className={!todo.complete ? 'list__item' : 'list__false'}  
              >{todo.label}</li>
            ))}
          </ul>
          
        </div>
        <div className='todo__buttons'>
          <button onClick={() => handleFiltered(true)}>Completed</button>
          <button onClick={() => handleFiltered(false)}>Uncompleted</button>
          <button onClick={() => handleFiltered('all')}>All</button>
        </div>
      </div>
      {/* <Filter todos={todos}/> */}
    </div>
  )
}

export default Todo 