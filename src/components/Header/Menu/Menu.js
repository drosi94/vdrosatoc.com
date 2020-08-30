import React from "react"
import { ScrollLink } from "react-scroll"

import styles from "./menu.module.css"

const Link = ScrollLink(props => (
  <a role="button" tabIndex={0} {...props}>
    {props.children}
  </a>
))

export default () => {
  return (
    <nav className={styles["nav"]}>
      <ul>
        <li>
          <Link
            activeClass={styles["active"]}
            to="home"
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={-82}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass={styles["active"]}
            to="about"
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={-82}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass={styles["active"]}
            to="mywork"
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={-82}
            duration={500}
          >
            My Work
          </Link>
        </li>
        <li>
          <Link
            activeClass={styles["active"]}
            to="contact"
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={-82}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
