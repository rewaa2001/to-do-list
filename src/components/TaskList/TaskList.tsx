import { useState } from "react";
import Task from "../Task/Task";
import "./TaskList.css";

interface TaskItem {
  id: number;
  text: string;
  isDone: boolean;
}

const TaskList = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([
    { id: 1, text: "Styleguide creation", isDone: false },
    { id: 2, text: "Send wireframes", isDone: true },
    { id: 3, text: "Readability About page", isDone: false },
    { id: 4, text: "Check color contrast", isDone: false },
  ]);

  const handleToggle = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const handleDelete = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleAddTask = () => {
    const newTask = prompt("اكتب المهمة الجديدة:");
    if (newTask && newTask.trim()) {
      setTasks((prev) => [
        ...prev,
        { id: Date.now(), text: newTask.trim(), isDone: false },
      ]);
    }
  };

  return (
    <div className="tasklist-container">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task.text}
          isDone={task.isDone}
          onToggle={() => handleToggle(task.id)}
          onDelete={() => handleDelete(task.id)}
        />
      ))}
      <div className="add-task-btn-container">
        <button onClick={handleAddTask} className="add-task-btn">
          + New task
        </button>
      </div>
    </div>
  );
};

export default TaskList;
