import { Trash } from 'phosphor-react';
import styles from './TaskCard.module.css';
interface TaskCardProps {
  task: { title: string; status: 'done' | 'todo' };
  onDeleteTask: (taskTitle: string) => void;
  onChangeTaskStatus: (taskTitle: string) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onDeleteTask,
  onChangeTaskStatus,
}) => {
  const handleDeleteTask = () => {
    onDeleteTask(task.title);
  };
  const handleChangeTaskStatus = () => {
    onChangeTaskStatus(task.title);
  };
  return (
    <>
      <div className={styles.taskCard}>
        <div className={styles.checkbox}>
          <input
            id='checkbox'
            type='checkbox'
            checked={task.status === 'done'}
            onChange={handleChangeTaskStatus}
          />
          <label htmlFor='checkbox'></label>
        </div>

        <p
          style={{
            textDecoration: task.status === 'done' ? 'line-through' : 'none',
            color: task.status === 'done' ? '#808080' : '#f2f2f2',
          }}
          className={styles.taskTitle}
        >
          {task.title}
        </p>
        <button className={styles.deleteButton} onClick={handleDeleteTask}>
          <Trash size={24} className={styles.icon} />
        </button>
      </div>
    </>
  );
};
