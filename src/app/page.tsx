'use client'
"use client"
 
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"



// import Nav from './nav'
// import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import BlogPosts from './components/BlogPosts'
import Pricing from './components/Pricing'
import Newsletter from './components/Newsletter'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'

export default function Home({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Header /> */}
      <main className="flex-1">
        <NextThemesProvider {...props}>{children}</NextThemesProvider>
        <Hero />
        <Skills />
        <Testimonials />
        <BlogPosts />
        <Pricing />
        <Newsletter />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
