import { IconArrowsSort } from "@tabler/icons-react";

const SortTodo = ({ todos, handleSortTodos }) => {
    const isShowingLatest = todos[0].id > todos[todos.length - 1].id;
    return (
        <button
            onClick={() =>
                isShowingLatest
                    ? handleSortTodos("oldest")
                    : handleSortTodos("latest")
            }
        >
            <IconArrowsSort size={12} />
            {isShowingLatest
                ? " Sort Oldest -> Latest"
                : " Sort Latest -> Oldest"}
        </button>
    );
};

export default SortTodo;
