'use client'
"use client"
 
import * as React from "react"




// import Nav from './nav'
// import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import BlogPosts from './components/BlogPosts'
import Pricing from './components/Pricing'
import Newsletter from './components/Newsletter'

import Footer from './components/Footer'


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Header /> */}
      <main className="flex-1">

        <Hero />
        <Skills />
       
        <BlogPosts />
        <Pricing />
        <Newsletter />
    
      </main>
      <Footer />
    </div>
  )
}
