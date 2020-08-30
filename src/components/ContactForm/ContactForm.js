import React from "react"

import styles from "./contactForm.module.css"

export default props => {
  return (
    <form className={styles["contactForm"]}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName"></input>
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName"></input>
      </div>
      <div>
        <label htmlFor="email">E-Mail</label>
        <input type="email" id="email" name="email"></input>
      </div>
      <div>
        <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" rows={5}></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
