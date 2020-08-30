import React from "react"

import styles from "./button.module.css"

const Button = props => {
  const { type, onClick, children, className } = props
  return (
    <button type={type} onClick={onClick} className={[styles.btn, className].join(' ')}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: "button",
  onClick: () => {},
}

export default Button
