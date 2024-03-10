import SortTodo from "./SortTodos";
import styles from "../styles/TodoControls.module.css";
import { IconArrowsRandom, IconClearAll } from "@tabler/icons-react";

const TodoControls = ({
    todos,
    handleSortTodos,
    handleFetchRandom,
    handleClearAll,
}) => {
    return (
        <>
            <div className={styles.controls}>
                {todos.length > 1 && (
                    <SortTodo todos={todos} handleSortTodos={handleSortTodos} />
                )}
                <button onClick={handleFetchRandom}>
                    <IconArrowsRandom size={13} /> Random tasks
                </button>
                {todos.length > 0 && (
                    <button
                        className={styles.clearall_btn}
                        onClick={handleClearAll}
                    >
                        <IconClearAll size={12} />
                        Clear All
                    </button>
                )}
            </div>
        </>
    );
};

export default TodoControls;
