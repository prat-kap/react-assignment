import { React, useReducer, useState } from "react";
import { INITIAL_STATE, TodoListReducer } from "./hooks/TodoListReducer";

import AddTasks from "./components/AddTasks";
import TasksList from "./components/TasksList";
import Tabs from "./components/Tabs";

import { statuses, LABELS } from "./constants/CommonConsts";

import "./App.css";

const App = () => {
  const { PENDING, COMPLETED, TODO_LIST, ENTER_TODO_ITEM, ADD_TASK, ADD } =
    LABELS;
  const [activeTab, setActiveTab] = useState(statuses[0]);
  const [todo, setTodo] = useState("");
  const [state, dispatch] = useReducer(TodoListReducer, INITIAL_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      dispatch({
        type: ADD,
        payload: todo,
        status: PENDING,
        id: `${todo}-${Date.now()}`,
      });
      setTodo("");
    }
  };

  const pendingTasks =
    state.todos && state.todos.filter((todo) => todo.status === PENDING);
  const completedTasks =
    state.todos && state.todos.filter((todo) => todo.status === COMPLETED);

  return (
    <div className="App">
      <div className="container">
        <AddTasks
          value={todo}
          setValue={setTodo}
          handleSubmit={handleSubmit}
          title={TODO_LIST}
          placeholderText={ENTER_TODO_ITEM}
          btnText={ADD_TASK}
        />
        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          header={statuses}
          content={
            <TasksList
              taskStatus={activeTab}
              listItems={
                activeTab === COMPLETED ? completedTasks : pendingTasks
              }
              state={state}
              dispatch={dispatch}
            />
          }
        />
      </div>
    </div>
  );
};

export default App;
