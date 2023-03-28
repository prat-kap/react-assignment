import "../App.css" 

const TodoForm = (props) => {
    const {todo, setTodo, handleSubmit} = props
    return (
        <form id="todo-list" onSubmit={handleSubmit}>
            <input type="text" value={todo} placeholder='Enter todo item' onChange={(e) => setTodo(e.target.value)}/>
            <button type='submit'>Add Task</button>
        </form>
    )
}

export default TodoForm