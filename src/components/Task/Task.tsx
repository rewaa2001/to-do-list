
import "./Task.css";

interface TaskProps {
  task: string;
  isDone: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

const Task = ({ task, isDone, onToggle, onDelete }: TaskProps) => {
  return (
    <div className="task-container">
      <div className="task-left">
        <input
          type="radio"
          checked={isDone}
          onChange={onToggle}
          className="task-radio"
        />
        <span className={`task-text ${isDone ? "done" : ""}`}>{task}</span>
      </div>
      {isDone && (
        <button onClick={onDelete} className="task-delete">
          🗑️
        </button>
      )}
    </div>
  );
};

export default Task;
