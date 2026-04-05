"use client"
import About from "@/components/About";
import Certificate from "@/components/Certificate";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
// import "./globals.css"; 
import React from "react"

 export default function Home () {
  
  return(
    <main>
    <Hero/>
    <About/>
    <Skills/>
   <Project/>  
     <Certificate/>
   <Contact/>
   </main>
  )
 }

