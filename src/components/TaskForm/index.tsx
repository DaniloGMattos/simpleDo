import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent } from 'react';
import styles from './TaskForm.module.css';
interface Task {
  title: string;
  status: 'done' | 'todo';
}
interface TaskFormProps {
  onChangeTask: (taskWritten: string) => void;
  onCreateTask: () => void;
  taskTitle: string;
  tasks: Task[];
}

export const TaskForm = ({
  onChangeTask,
  onCreateTask,
  taskTitle,
  tasks,
}: TaskFormProps) => {
  const noTaskWritten = taskTitle.length === 0;
  const taskExists = tasks.some((task) => task.title === taskTitle);

  const handleChangeTask = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeTask(event.target.value);
  };
  const handleCreateTask = (event: FormEvent) => {
    event.preventDefault();
    if (!taskExists) {
      onCreateTask();
    }
  };
  return (
    <>
      <form onSubmit={handleCreateTask} className={styles.taskForm}>
        <input
          type='text'
          placeholder='Adicione uma nova tarefa'
          required
          onChange={handleChangeTask}
          value={taskTitle}
          className={styles.inputTask}
        />
        <button disabled={noTaskWritten || taskExists} type='submit'>
          Criar <PlusCircle weight='bold' />
        </button>
      </form>
    </>
  );
};
