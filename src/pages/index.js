import React from "react"

//Font~Awesome
import ReactDOM from 'react-dom'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { faTwitter, faFontAwesome } from '@fortawesome/free-brand-svg-icons'
// library.add(fas, faTwitter, faFontAwesome)

import Layout from "../components/layout"
import SEO from "../components/seo"


// Components
import Header from "../components/Header"
import About from "../components/About"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Experience from "../components/Experience"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Nerando Johnson's Portfolio" />
    <Header></Header>
    <About></About>
    <Projects></Projects> {/* Projects */}
    {/* <Promotion></Promotion>Open Source  */}
    <Skills></Skills>
    <Experience></Experience>{/*Work Experience */}
    {/* <Promotion></Promotion>Certs and Completed Courses */}
    <Promotion></Promotion>{/* Blogs and Talks  */}
    <Footer></Footer>
  </Layout>
)

export default IndexPage
