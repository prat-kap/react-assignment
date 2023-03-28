const PendingTodoItems = (props) => {
    const {pendingListItems, handleMarkComplete} = props
    return (
        <div>
            Count of Pending Tasks - {pendingListItems.length}
            <ul className="todos">
                {pendingListItems && pendingListItems.map((item, index) => (                
                    <li key={item.id}>
                        <span>{item.taskName}</span>
                        <button onClick={()=>handleMarkComplete(index)}>Mark as complete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default PendingTodoItems