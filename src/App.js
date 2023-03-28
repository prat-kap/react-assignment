import { useReducer, useState } from 'react';
import {INITIAL_STATE, TodoItemReducer} from "./reducer/TodoItemReducer";

import './App.css';

import TodoForm from "./components/TodoForm";
import CompletedTodoItems from './components/CompletedTodoItems';
import PendingTodoItems from './components/PendingTodoItems';

const App = () => {
  const [activeTab, setActiveTab] = useState("Pending")
  const [todo, setTodo] = useState("")
  const [state, dispatch] = useReducer(TodoItemReducer, INITIAL_STATE)

  const listStatus = ["Pending", "Completed"]

  const handleSubmit = (e) => {
    e.preventDefault()
    if(todo !== "") {
      dispatch({type:"add", payload: todo, status: "pending", id: `${todo}-${Date.now()}`})
      setTodo("")
    }
  }
  
  const handleMarkComplete = (index) => {
    dispatch({type:"toggle", payload: state.todos[index].taskName, status: "completed", id: state.todos[index].id})
  }

  const handleMarkPending = (index) => {
    dispatch({type:"toggle", payload: state.todos[index].taskName, status: "pending", id: state.todos[index].id})
  }

  const pendingTasks = state.todos && state.todos.filter(todo => todo.status === "pending")
  const completedTasks = state.todos && state.todos.filter(todo => todo.status === "completed")

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      <ul className="todoStatus">
        {listStatus.map((status, index) => {
          return (
            <li className={activeTab === status ? "active" : ""} key={index} onClick={() => setActiveTab(status)}>
              {status} 
              {/* {`Count - `} {activeTab === "Pending" ? pendingTasks.length : completedTasks.length} */}
            </li>
          )
        })}
      </ul>
      <div className="todoTasks">
        {activeTab === "Completed" 
        ? <CompletedTodoItems completedListItems={completedTasks} handleMarkPending={handleMarkPending} /> 
        : <PendingTodoItems pendingListItems={pendingTasks} handleMarkComplete={handleMarkComplete} />}
      </div>
    </div>
  )
}

export default App;
