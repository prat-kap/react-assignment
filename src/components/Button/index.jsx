import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const Button = (props) => {
  const { text, type, handleClick } = props
  return (
    <>
      <button type={type} onClick={handleClick} className="button">
        {text}
      </button>
    </>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  handleClick: PropTypes.func
}

export default Button
