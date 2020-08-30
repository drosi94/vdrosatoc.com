import React from "react"
import { ScrollElement } from "react-scroll"

import styles from "./section.module.css"

const Element = ScrollElement(props => {
  var {parentBindings, ...otherProps} = props;
  return (
    <section
      {...otherProps}
      ref={el => {
        parentBindings.domNode = el
      }}
    >
      {props.children}
    </section>
  )
})

export default props => {
  const { id, className, title } = props
  return (
    <Element name={id} className={[className]}>
      {props.children}
    </Element>
  )
}
