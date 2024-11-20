import React from "react"

import Header from "./components/header"
import About from "./components/about"
import Projects from "./components/projects"
import Testimonials from "./components/testimonails"
import Contact from "./components/Contact"

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer"

const app = () => {

  return(

    <div className="w-full overflow-hidden">

      <ToastContainer/>
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    
    </div>
  )

}

export default app