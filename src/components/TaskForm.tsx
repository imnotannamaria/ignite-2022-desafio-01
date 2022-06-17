import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Task } from './Task'
import styles from './TaskForm.module.css'

export function TaskForm(){
    const [newTaskText, setNewTaskText] = useState('')

    const [tasks, setTasks] = useState([
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
    ])

    function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }

    function handleCreateNewTask(event: FormEvent){
        event.preventDefault();
        console.log(newTaskText);
        setTasks([...tasks, newTaskText]);
        setNewTaskText('');
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("Esse campo é obrigatório!")
    }

    function deleteTask(taskToDelete: string){
        const TasksWithoutDeletedOne = tasks.filter(task => {
            return task !== taskToDelete;
        })

        setTasks(TasksWithoutDeletedOne);
    }

    return(
        <>
            <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
                <textarea
                    placeholder="Adicione uma nova tarefa"
                    value={newTaskText}
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                    required
                >
                </textarea>
                
                <footer>
                    <button
                        type="submit"
                    >
                        <span>Criar <PlusCircle size={25} /></span>
                    </button>
                    
                </footer>
            </form>

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
                                onDeleteTask={deleteTask}
                            />
                        )
                    })}
                </main>
            </div>
        </>
    )
}
