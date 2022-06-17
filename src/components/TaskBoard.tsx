import { useState } from 'react';
import { Task } from './Task';
import styles from './TaskBoard.module.css';
import { TaskForm } from './TaskForm';

export function TaskBoard(){
    const [tasks, setTasks] = useState([
        'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
    ])
    
    return(
        <>
            <TaskForm/>
            <div className={styles.taskBoardContainer}>
                <header className={styles.taskBoard}>
                    <div>
                        <strong className={styles.createdTasks}>Tarefas criadas <span>0</span> </strong>
                    </div>
                    <div>
                        <strong className={styles.completedTasks}>Concluídas <span>0</span> </strong>
                    </div>
                </header>
                <main>
                    {/* <Task/> */}
                    {tasks.map(task => {
                        return(
                            <Task
                                key={task} 
                                content={task} 
                            />
                        )
                    })}
                </main>
            </div>
        </>
    )
}