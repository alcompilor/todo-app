import styles from "../styles/Todos.module.css";
import {
    IconTrash,
    IconCircleCheck,
    IconArrowBackUp,
} from "@tabler/icons-react";

const Todos = ({ todos, handleStatusTodo, handleDeleteTodo }) => {
    return (
        <div className={styles.todos}>
            {todos.map(({ id, task, done }) => {
                return (
                    <div
                        key={id}
                        className={styles.todo}
                        style={{
                            background: done ? "#2ca74e" : "#b9832d",
                        }}
                    >
                        <p className={styles.task}>{task}</p>
                        <button onClick={() => handleStatusTodo(id)}>
                            {done ? (
                                <IconArrowBackUp size={12} />
                            ) : (
                                <IconCircleCheck size={12} />
                            )}
                            {done ? " Undo" : " Done"}
                        </button>
                        <button
                            className={styles.delete_btn}
                            onClick={() => handleDeleteTodo(id)}
                        >
                            <IconTrash size={12} /> Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Todos;
