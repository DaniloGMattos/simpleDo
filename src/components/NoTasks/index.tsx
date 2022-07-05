import styles from './NoTasks.module.css';

import { ClipboardText } from 'phosphor-react';

export const NoTasks = () => {
  return (
    <>
      <main className={styles.main}>
        <ClipboardText size={56} />
        <div className={styles.textContent}>
          <h3 className={styles.title}>
            Você ainda não tem tarefas cadastradas
          </h3>
          <p className={styles.subtitle}>
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      </main>
    </>
  );
};
