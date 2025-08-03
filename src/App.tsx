import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <div className="todo-wrapper">
        <Header />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
