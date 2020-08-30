import React from "react"

import styles from "./timeline.module.css"

export default props => {
  return (
    <div className={styles["timeline"]}>
      <div className={[styles["container"], styles["left"]].join(" ")}>
        <div className={styles["content"]}>
          <h4>Msc in Web Engineering</h4>
          <p>Harokopio University, Athens</p>
          <p>
            I'ts time to emphasize more into web, so I started attending this
            master class.
          </p>
        </div>
        <div className={styles["content"]}>
          <h4>Bachelor in Computer Science</h4>
          <p>Athens University (AUEB)</p>
          <p>Now, I am officially a computer scientist</p>
        </div>
      </div>
      <div className={[styles["container"], styles["right"]].join(" ")}>
        <div className={styles["content"]}>
          <h4>Fullstack web/mobile developer</h4>
          <p>Mellon Technologies, Athens</p>
          <p>
            Design and maintain web and mobile apps for clients, using
            cutting-edge technologies.
          </p>
        </div>
        <div className={styles["content"]}>
          <h4>Fullstack web developer</h4>
          <p>CERN, Geneva</p>
          <p>1-year internship as web developer at CERN organization.</p>
        </div>
        <div className={styles["content"]}>
          <h4>Fullstack web developer </h4>
          <p>Payment Components, Athens</p>
          <p>My first work experience as web developer.</p>
        </div>
      </div>
    </div>
  )
}
