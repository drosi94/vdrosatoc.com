import React from "react"

import styles from "./bar.module.css"

export default props => {
  const { skill, skillLevel } = props
  return (
    <div className={styles["bar"]}>
      <p>{skill}</p>
      <span>{skillLevel}</span>
    </div>
  )
}
