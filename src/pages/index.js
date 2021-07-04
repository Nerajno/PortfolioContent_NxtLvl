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
import Work from "../components/Work"
import About from "../components/About"
import Skills from "../components/Skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Nerando Johnson's Portfolio" />
    <Work></Work>
    <Header></Header>
    <About></About>
    <Skills></Skills>
    <Promotion></Promotion>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
