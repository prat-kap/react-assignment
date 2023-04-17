import { React } from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

import { LABELS } from '../../constants/CommonConsts'

import './index.css'

const TasksList = (props) => {
  const { taskStatus, listItems, state, dispatch } = props
  const { MARK_AS, COUNT_OF, TASKS, PENDING, COMPLETED, TOGGLE } = LABELS

  const handleMarkComplete = (index) => {
    const task = state.find((item) => item.taskDetails.id === index)
    dispatch({
      type: TOGGLE,
      payload: {
        status: COMPLETED,
        id: task.taskDetails.id
      }
    })
  }

  const handleMarkPending = (index) => {
    const task = state.find((item) => item.taskDetails.id === index)
    dispatch({
      type: TOGGLE,
      payload: {
        status: PENDING,
        id: task.taskDetails.id
      }
    })
  }

  return (
    <>
      {`${COUNT_OF} ${taskStatus} ${TASKS} - ${listItems.length}`}
      <ul className="listItems">
        {listItems &&
          listItems.map((item) => (
            <li key={item.taskDetails.id}>
              <span className="itemName">{item.taskDetails.taskName}</span>
              {taskStatus === COMPLETED ? (
                <Button
                  text={`${MARK_AS} ${PENDING}`}
                  handleClick={() => handleMarkPending(item.taskDetails.id)}
                />
              ) : (
                <Button
                  text={`${MARK_AS} ${COMPLETED}`}
                  handleClick={() => handleMarkComplete(item.taskDetails.id)}
                />
              )}
            </li>
          ))}
      </ul>
    </>
  )
}

TasksList.propTypes = {
  taskStatus: PropTypes.string,
  listItems: PropTypes.array,
  state: PropTypes.array,
  dispatch: PropTypes.func
}

export default TasksList
