import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoTitle, type FilterValue, type Todo as TodoType } from './types'
import { Footer } from './components/Footer'
import { TODO_FILTERS } from './consts'
import { Header } from './components/Header'
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
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

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

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const onClearCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const addTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  return <div className='todoapp'>
    <Header onAddTodo={addTodo} />
    <Todos
      todos={filteredTodos}
      onRemoveTodo={handleRemoveTodo}
      onCompletedTodo={handleCompleted} />
    <Footer
      filterSelected={filterSelected}
      handleFilterChange={handleFilterChange}
      activeCount={activeCount}
      completedCount={completedCount}
      onClearCompleted={onClearCompleted}
    />
  </div>
}

export default App
