import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30",
      reminder: true,
    },
    {
      id: 2,
      text: "Tarefa2",
      day: "Feb 5th at 2:30",
      reminder: true,
    },
    {
      id: 3,
      text: "Tarefa3",
      day: "Feb 5th at 2:30",
      reminder: true,
    },
    {
      id: 4,
      text: "Tarefa6",
      day: "Feb 5th at 2:30",
      reminder: false,
    },
  ]);

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div id="appFrame" className="container mt-3 p-3 bg-primary text-light">
      <Header />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
};

export default App;
