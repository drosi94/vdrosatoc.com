import React from "react"

import { ScrollLink } from "react-scroll"

import Menu from "./Menu"

import styles from "./header.module.css"
import logo from "../../../static/assets/logo.png"

const Link = ScrollLink(props => (
  <a role="button" tabIndex={0} {...props}>
    {props.children}
  </a>
))

export default props => {
  const { scrolled } = props
  return (
    <header
      className={[
        styles.header,
        ...[scrolled ? styles.active : undefined],
      ].join(" ")}
    >
      <div className={styles["logoWrapper"]}>
        <Link
          to="home"
          spy={true}
          hashSpy={true}
          smooth={true}
          offset={-82}
          duration={500}
          className={styles["logo"]}
        >
          <img src={logo} alt="logo" width="66" height="66" />
        </Link>
      </div>
      <div className={styles["menuWrapper"]}>
        <Menu />
      </div>
    </header>
  )
}
