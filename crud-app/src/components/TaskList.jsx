import api from "../services/api";

function TaskList({ tasks, fetchTasks }) {

    // handling DELETE 
    const handleDelete = async (id) => {
        await api.delete(`/tasks/${id}`);
        fetchTasks();
    };

    // handling UPDATE
    const toggleComplete = async (task) => {
        await api.put(`/tasks/${task.id}`, {
            ...task,
            completed: !task.completed
        });
        fetchTasks();
    }


    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <span
                        style={{
                            textDecoration: task.completed ? "line-through" : "none",
                            cursor: "pointer"
                        }}
                        onClick={() => toggleComplete(task)}
                    >
                        {task.title}
                    </span>
                    <button onClick={() => handleDelete(task.id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;