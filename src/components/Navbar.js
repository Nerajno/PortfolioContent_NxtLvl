import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            Nerando
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#projects")}>Projects</button>
            <button onClick={() => scrollTo("#skills")}>Skills</button>
            <button onClick={() => scrollTo("#experience")}>Professional Experience</button>
            <button onClick={() => scrollTo("#opensourcecontributions")}>Open Source Contributions</button>
            <button onClick={() => scrollTo("#testimonials")}>Testimonials</button>
            <button onClick={() => scrollTo("#blogs")}>Blogs and Talks</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
