import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

import './index.css'

const AddTasks = (props) => {
  const { value, setValue, handleSubmit, title, btnText, placeholderText } =
    props

  return (
    <>
      <h1 className="title">{title}</h1>
      <form id="add-items" className="add-items" onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder={placeholderText}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type="submit" text={btnText} />
      </form>
    </>
  )
}

AddTasks.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  btnText: PropTypes.string,
  placeholderText: PropTypes.string,
  setValue: PropTypes.func,
  handleSubmit: PropTypes.func
}

export default AddTasks
