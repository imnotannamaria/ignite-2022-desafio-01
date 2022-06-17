import { Check, ClipboardText, Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface TaskProps {
    content: string;
    onDeleteTask: (task: string) => void;
}

export function Task({ content, onDeleteTask } : TaskProps){

    function handleDeleteComment(){
        onDeleteTask(content);
    }

    return(
        <>
            {/* <div className={styles.noTasksContainer}>
                <ClipboardText size={100} weight="thin" /> 
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>     
            </div> */}
            
            <div className={styles.task}>
            <label> 
                {/* <button className={styles.doneButton}>
                    <Check size={20}/>
                </button> */}
            </label>
                <span>{ content }</span>
                <button onClick={handleDeleteComment} className={styles.deleteButton} title="Deletar tarefa">
                    <Trash size={24} />
                </button>
            </div>
        </>
    )
}