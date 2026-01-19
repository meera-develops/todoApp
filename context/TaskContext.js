import React, { createContext, useState, useContext } from 'react';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const initialData = [
    {
      key: "1",
      description: "Clean the car",
      completed: false
    },
    {
      key: "2",
      description: "Buy groceries for the week",
      completed: false
    },
    {
      key: "3",
      description: "Walk the dog",
      completed: false
    },
    {
      key: "4",
      description: "Clean Room",
      completed: false
    },
  ];

  const [tasks, setTasks] = useState(initialData);

  const toggleTask = (key) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.key === key ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = (description) => {
    const newTask = {
      key: Date.now().toString(),
      description,
      completed: false,
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const deleteTask = (key) => {
    setTasks(prevTasks => prevTasks.filter(task => task.key !== key));
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, toggleTask, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}
