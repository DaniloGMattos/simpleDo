import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent } from 'react';
import styles from './TaskForm.module.css';

interface TaskFormProps {
  onChangeTask: (taskWritten: string) => void;
  onCreateTask: () => void;
  taskTitle: string;
}

export const TaskForm = ({
  onChangeTask,
  onCreateTask,
  taskTitle,
}: TaskFormProps) => {
  const noTaskWritten = taskTitle.length === 0;
  const handleChangeTask = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeTask(event.target.value);
  };
  const handleCreateTask = (event: FormEvent) => {
    event.preventDefault();
    onCreateTask();
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
        <button disabled={noTaskWritten} type='submit'>
          Criar <PlusCircle weight='bold' />
        </button>
      </form>
    </>
  );
};
