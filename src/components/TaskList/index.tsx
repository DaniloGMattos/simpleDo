import { NoTasks } from '../NoTasks';
import { TaskCard } from '../TaskCard';
import styles from './TaskList.module.css';
interface Task {
  title: string;
  status: 'done' | 'todo';
}
interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (taskTitle: string) => void;
  onChangeTaskStatus: (taskTitle: string) => void;
}

export const TaskList = ({
  tasks,
  onDeleteTask,
  onChangeTaskStatus,
}: TaskListProps) => {
  const isTaskListEmpty = tasks.length === 0;
  const doneTasks = tasks.filter((task) => task.status === 'done').length;
  return (
    <>
      <section className={styles.taskSection}>
        <header className={styles.header}>
          <div className={styles.indicators}>
            <p className={styles.created}>Tarefas Criadas</p>
            <span>{tasks.length}</span>
          </div>
          <div className={styles.indicators}>
            <p className={styles.done}>Concluídas</p>
            <span>
              {doneTasks === 0 ? 0 : `${doneTasks} de ${tasks.length}`}
            </span>
          </div>
        </header>
        {isTaskListEmpty ? (
          <NoTasks />
        ) : (
          <main className={styles.taskList}>
            {tasks.map((task) => (
              <TaskCard
                key={task.title}
                task={task}
                onDeleteTask={onDeleteTask}
                onChangeTaskStatus={onChangeTaskStatus}
              />
            ))}
          </main>
        )}
      </section>
    </>
  );
};
