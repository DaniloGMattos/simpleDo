import { Header } from './components/Header';
import styles from './App.module.css';
import { TaskForm } from './components/TaskForm';
import { useCallback, useState } from 'react';
import { TaskList } from './components/TaskList';
interface Task {
  title: string;
  status: 'done' | 'todo';
}
function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskToBeAdded, setTaskToBeAdded] = useState<string>('');
  const onChangeTask = (newTask: string) => {
    setTaskToBeAdded(newTask);
  };
  const onCreateTask = useCallback(() => {
    setTasks((state) => {
      return [...state, { title: taskToBeAdded, status: 'todo' }];
    });
    setTaskToBeAdded('');
  }, [taskToBeAdded]);
  const onDeleteTask = (taskTile: string) => {
    setTasks((state) => state.filter((task) => task.title !== taskTile));
  };
  const onChangeTaskStatus = (taskTile: string) => {
    setTasks((state) =>
      state.map((task) =>
        task.title === taskTile
          ? { ...task, status: task.status === 'done' ? 'todo' : 'done' }
          : task,
      ),
    );
  };
  return (
    <>
      <Header />
      <main className={styles.main}>
        <TaskForm
          tasks={tasks}
          onChangeTask={onChangeTask}
          onCreateTask={onCreateTask}
          taskTitle={taskToBeAdded}
        />
        <TaskList
          onChangeTaskStatus={onChangeTaskStatus}
          onDeleteTask={onDeleteTask}
          tasks={tasks}
        />
      </main>
    </>
  );
}

export default App;
