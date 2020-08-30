import React from "react"

import styles from "./myWork.module.css"

export default props => {
  return (
    <div className={styles["myWork"]}>
      <div className={styles["content"]}>
        <h4>Project 1</h4>
        <p>HTML/CSS/...</p>
        <div>
          <ul>
            <li>Fugiat excepteur voluptate pariatur.</li>
            <li>
              Aliquip aliqua ut nostrud officia adipisicing aute exercitation
              proident ipsum commodo mollit.
            </li>
            <li>Aliquip aliqua ut nostrud officia adipisicing aute</li>
          </ul>
        </div>
      </div>
      <div className={styles["content"]}>
        <h4>Project 2</h4>
        <p>HTML/CSS/...</p>
        <div>
          <ul>
            <li>Fugiat excepteur voluptate pariatur.</li>
            <li>
              Aliquip aliqua ut nostrud officia adipisicing aute exercitation
              proident ipsum commodo mollit.
            </li>
            <li>Aliquip aliqua ut nostrud officia adipisicing aute</li>
          </ul>
        </div>
      </div>
      <div className={styles["content"]}>
        <h4>Project 3</h4>
        <p>HTML/CSS/...</p>
        <div>
          <ul>
            <li>Fugiat excepteur voluptate pariatur.</li>
            <li>
              Aliquip aliqua ut nostrud officia adipisicing aute exercitation
              proident ipsum commodo mollit.
            </li>
            <li>Aliquip aliqua ut nostrud officia adipisicing aute</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
