import { useState } from 'react'
import { Todos } from './components/Todos'
import { type Todo as TodoType } from './types'
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

  const handleRemoveTodo = (id: string): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return <div className='todoapp'>
    <Todos todos={todos} onRemoveTodo={handleRemoveTodo} onCompletedTodo={handleCompleted} />
  </div>
}

export default App
