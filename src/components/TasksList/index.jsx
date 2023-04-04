import { React } from "react";
import PropTypes from "prop-types";

import Button from "../Button";

import { LABELS } from "../../constants/CommonConsts";

import "./index.css";

const TasksList = (props) => {
  const { taskStatus, listItems, state, dispatch } = props;
  const { MARK_AS, COUNT_OF, TASKS, PENDING, COMPLETED, TOGGLE } = LABELS;

  const handleMarkComplete = (index) => {
    const task = state.todos.find((item) => item.id === index);
    dispatch({
      type: TOGGLE,
      payload: task.taskName,
      status: COMPLETED,
      id: task.id,
    });
  };

  const handleMarkPending = (index) => {
    const task = state.todos.find((item) => item.id === index);
    dispatch({
      type: TOGGLE,
      payload: task.taskName,
      status: PENDING,
      id: task.id,
    });
  };

  return (
    <>
      {`${COUNT_OF} ${taskStatus} ${TASKS} - ${listItems.length}`}
      <ul className="listItems">
        {listItems &&
          listItems.map((item) => (
            <li key={item.id}>
              <span className="itemName">{item.taskName}</span>
              {taskStatus === COMPLETED ? (
                <Button
                  text={`${MARK_AS} ${PENDING}`}
                  handleClick={() => handleMarkPending(item.id)}
                />
              ) : (
                <Button
                  text={`${MARK_AS} ${COMPLETED}`}
                  handleClick={() => handleMarkComplete(item.id)}
                />
              )}
            </li>
          ))}
      </ul>
    </>
  );
};

TasksList.propTypes = {
  taskStatus: PropTypes.string,
  listItems: PropTypes.array,
  state: PropTypes.object,
  dispatch: PropTypes.func,
};

export default TasksList;
