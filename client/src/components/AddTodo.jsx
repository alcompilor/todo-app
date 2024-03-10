import { useState } from "react";
import styles from "../styles/AddTodo.module.css";

const AddTodo = ({ handleAddTodo }) => {
    const [task, setTask] = useState("");

    const handleInputChange = (e) => {
        setTask(e.target.value.trim());
    };

    return (
        <>
            <form
                className={styles.add_todo_form}
                onSubmit={(e) => task && handleAddTodo(e, task)}
            >
                <input
                    className={styles.add_todo_input}
                    type="text"
                    onChange={handleInputChange}
                    placeholder="Enter a new task (e.g., 'Cook dinner at 6 PM')"
                />
                <button>Add Todo</button>
            </form>
        </>
    );
};

export default AddTodo;
