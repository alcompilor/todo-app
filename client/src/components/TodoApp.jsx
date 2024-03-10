import { useEffect, useState } from "react";
import Todos from "./Todos";
import TodoControls from "./TodoControls";
import { getTodos } from "../api/todoService";
import styles from "../styles/TodoApp.module.css";
import AddTodo from "./AddTodo";
import { IconLayersSubtract } from "@tabler/icons-react";
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";

const TodoApp = () => {
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem("todos") || "[]")
    );

    const [isLoading, setIsLoading] = useState(false);

    // Sync localStorage depending on the state of todos
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // Used in TodoControls.jsx
    const handleFetchRandom = () => {
        const fetchAndParseTodos = async () => {
            setIsLoading(true);
            const fetchedTodos = await getTodos();

            const parsedTodos = fetchedTodos.map(({ id, task, done }) => ({
                id,
                task,
                done,
            }));

            parsedTodos.sort((a, b) => b.id - a.id);
            setTodos(parsedTodos);
            setIsLoading(false);
        };

        fetchAndParseTodos();
    };

    // Used in TodoControls.jsx
    const handleClearAll = () => {
        setTodos([]);
    };

    // Used in AddTodo.jsx
    const handleAddTodo = (e, task) => {
        e.preventDefault();
        setTodos((prevArray) => {
            const idsArray = prevArray.map((todo) => todo.id);
            const newID = Math.max(...idsArray, 0) + 1;
            return [{ id: newID, task, done: false }, ...prevArray];
        });
    };

    // Used in Todos.jsx
    const handleStatusTodo = (id) => {
        setTodos((prevArray) => {
            return prevArray.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            );
        });
    };

    // Used in Todos.jsx
    const handleDeleteTodo = (id) => {
        setTodos((prevArray) => {
            return prevArray.filter((todo) => todo.id !== id);
        });
    };

    // Used in SortTodos.jsx
    const handleSortTodos = (order) => {
        setTodos((prevArray) => {
            return [...prevArray].sort((a, b) =>
                order === "latest" ? b.id - a.id : a.id - b.id
            );
        });
    };

    return (
        <div className={styles.todo_app}>
            <h1>
                <IconLayersSubtract size={38} /> Todolist
            </h1>
            <AddTodo handleAddTodo={handleAddTodo} />
            <TodoControls
                todos={todos}
                handleSortTodos={handleSortTodos}
                handleFetchRandom={handleFetchRandom}
                handleClearAll={handleClearAll}
            />
            {isLoading ? (
                <UseAnimations
                    animation={loading}
                    size={70}
                    strokeColor="#FFF"
                />
            ) : todos.length > 0 ? (
                <Todos
                    todos={todos}
                    handleStatusTodo={handleStatusTodo}
                    handleDeleteTodo={handleDeleteTodo}
                />
            ) : (
                <h2>You're all caught up! Why not add a new task?</h2>
            )}
        </div>
    );
};

export default TodoApp;
