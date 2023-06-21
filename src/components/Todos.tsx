import { type ListOfTodos } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onRemoveTodo: (id: string) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo }) => {
  return (<ul className='todo-list'>
        {todos.map(todo => {
          return <li key={todo.id} className={ `${todo.completed ? 'completed' : ''}`}>
                <Todo onRemoveTodo={onRemoveTodo} key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
            </li>
        })}
    </ul>)
}
