import { type Todo as TodoType } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: TodoType[]
  onRemoveTodo: (id: string) => void
  onCompletedTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onCompletedTodo }) => {
  return <ul className='todo-list'>
    {...todos.map(todo =>
    <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
      <Todo onCompletedTodo={onCompletedTodo} id={todo.id} title={todo.title} completed={todo.completed} onRemoveTodo={onRemoveTodo} />
    </li>)}
  </ul>
}
