import React, { useEffect, useState } from "react"
import { Events, Link } from "react-scroll"

import Header from "../components/Header"
import Section from "../components/Section"
import Timeline from "../components/Timeline"
import Bar from "../components/Bar"
import MyWork from "../components/MyWork"
import ContactForm from "../components/ContactForm"
import Button from "../components/Button"
import Menu from "../components/Header/Menu"

export default () => {
  const [scrolled, setScrolled] = useState(false)
  const _handleScroll = e => {
    if (window.scrollY > 0) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", _handleScroll)

    return () => {
      window.removeEventListener("scroll", _handleScroll)
    }
  }, [])

  return (
    <div
      className={["container", ...[scrolled ? "scolled" : undefined]].join(" ")}
    >
      <a className="skip-link" href="#maincontent">
        Skip to main content
      </a>
      <Header scrolled={scrolled} />
      <main id="maincontent">
        <Section id="home" className="home">
          <div className="mainTextContainer">
            <h1 className="name">Vasileios Drosatos</h1>
            <h3>Web & Mobile Developer</h3>
            <p>
              Hey! I am Vasileios (a.k.a Bill) Drosatos. I am here to help you
              design, create, and publish your website, your mobile app, or your
              software-related idea.
            </p>
          </div>
          <div className="buttonContainer">
            <Button>Learn More</Button>
            <Button className="contactMeButton">Contact Me</Button>
          </div>
          <div className="scrollDownContainer">
            <Link
              to="about"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-82}
              duration={500}
            >
              <img src="../assets/scroll-down-icon.png" />
            </Link>
          </div>
        </Section>
        <Section id="about" className="about">
          <h2>About me</h2>
          <p>
            Detail-oriented and innovative professional with hands-on experience
            in systems analysis, website design, software development, and
            application integration. Ability to define objectives, gather
            information, translate technical specifications, and devise custom
            web solutions as well as desired functionality. All in all, I create
            end-to-end solutions regarding software, web, mobile needs.
          </p>
          <Timeline />
        </Section>
        <Section id="mywork" className="mywork">
          <div>
            <h2>My Top Skills</h2>
            <Bar
              skill="Web Development - HTML/CSS/Javascript, React.JS, Angular, UI/UX"
              skillLevel={1}
            />
            <Bar
              skill="Mobile app Development - React Native, Android Native, iOS Native"
              skillLevel={0.85}
            />
            <Bar
              skill="CMS & E-commerce Development - Wordpress, Woocommerce, Shopify  "
              skillLevel={0.75}
            />
            <Bar
              skill="Backend & Cloud Development - Spring Boot, Node.JS, AWS Cloud "
              skillLevel={0.6}
            />
          </div>
          <div>
            <h2>My Work</h2>
            <MyWork />
          </div>
        </Section>
        <Section id="contact" className="contact">
          <h2>Contact me</h2>
          <ContactForm />
          <footer>
            <div>
              <p>Vasileios Drosatos</p>
              <a href="mailto:info@vdrosatos.com">info@vdrosatos.com</a>
              <a href="#">Download my latest CV</a>
            </div>
            <div>
              <Menu />
            </div>
            <div>
              <a
                href="https://linkedin.com/in/billdrosatos"
                rel="noreferrer"
                target="_blank"
              >
                <img alt="linkedin" />
              </a>
              <a
                href="https://github.com/drosi94"
                rel="noreferrer"
                target="_blank"
              >
                <img alt="github" />
              </a>
              <a
                href="https://gitlab.com/drosi94"
                rel="noreferrer"
                target="_blank"
              >
                <img alt="gitlab" />
              </a>
              <a
                href="https://facebook.com/basilis.drosatos"
                rel="noreferrer"
                target="_blank"
              >
                <img alt="facebook" />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01572ed6d435a200d6"
                rel="noreferrer"
                target="_blank"
              >
                <img alt="upwork" />
              </a>
              <a
                href="https://instagram.com/vasilis.drosatos"
                rel="noreferrer"
                target="_blank"
              >
                <img alt="instagram" />
              </a>
            </div>
          </footer>
        </Section>
      </main>
    </div>
  )
}
