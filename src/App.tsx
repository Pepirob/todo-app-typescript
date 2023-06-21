import { useState } from 'react'
import { Todos } from './components/todos'

const mockTodos = [
  {
    id: '1',
    title: ' Aprender TypeScript',
    completed: true
  },
  {
    id: '2',
    title: ' Llorar',
    completed: false
  },
  {
    id: '3',
    title: ' Cagarme en la puta mara',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  return (
    <div className='todoapp'>
      <Todos todos={todos} onRemoveTodo={handleRemove} ></Todos>
    </div>
  )
}

export default App
