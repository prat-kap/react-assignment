const CompletedTodoItems = (props) => {
    const {completedListItems, handleMarkPending} = props
    return (
        <div>
            Count of Completed Tasks - {completedListItems.length}                 
            <ul className="todos">
                {completedListItems && completedListItems.map((item, index) => (                
                    <li key={item.id}>
                        <span>{item.taskName}</span>
                        <button onClick={()=>handleMarkPending(index)}>Mark as pending</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default CompletedTodoItems