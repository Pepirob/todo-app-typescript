import { type Todo as TodoType } from '../types'

interface Props {
  id: string
  title: string
  completed: boolean
  onRemoveTodo: (id: string) => void
  onCompletedTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onCompletedTodo }) => {
  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onCompletedTodo({ id, completed: event.target.checked })
  }
  return <div className="view">
  <input className="toggle" type="checkbox" checked={completed} onChange={handleCheckbox} placeholder="¿que puedo hacer?" />
  <label>{title}</label>
  <button onClick={() => { onRemoveTodo(id) }} className="destroy"></button>
  </div>
}
