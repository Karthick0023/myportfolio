import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Project from './components/Project'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:pg-cyan-300 selection:text-cyan-900">
      <div className='fixed top-0 -z-10 h-full w-full'>
        
        <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">

        </div>
      </div>
      <div className='conatainer mx-auto px-8'>

      </div>
      <NavBar/>
      <Hero/>
      <About/>
      <Technologies/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
