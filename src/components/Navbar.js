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
            <button onClick={() => scrollTo("#work")}>Projects</button>
            <button onClick={() => scrollTo("#work")}>Skills</button>
            <button onClick={() => scrollTo("#experience")}>Professional Experience</button>
            <button onClick={() => scrollTo("#work")}>Open Source Contribution</button>
            <button onClick={() => scrollTo("#contact")}>Testimonials</button>
            <button onClick={() => scrollTo("#blogs")}>Blogs and Talks</button>
            
            <button onClick={() => scrollTo("#contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
