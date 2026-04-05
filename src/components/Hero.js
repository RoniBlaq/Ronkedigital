"use client"
import { motion } from "framer-motion"
import Image from "next/image"
export default function Hero () {
    return (
        <section className="relative overflow-hidden pt-24 pb-16 md:pb-0 min-h-screen flex  items-center bg-gradient-to-br from-blue-400 to-purple-500 text-center px-4 text-white">
  
        <motion.div 
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiple filter blur-3xl opacity-30"/>

         <motion.div 
         animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
         className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"/>

         <div className="relative z-10 max-w-7xl mx-auto w-full px-6 flex flex-col-reverse md:flex-row items-center justify-center gap-10 text-center md:text-left ">

         <div className="flex-1w text-center md:text-left ">
            <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4">
        Hi, I`m Ronny
        </motion.h1>
        <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg md:text-xl mb-6">Frontend Developer | PHP Enthusiast
        </motion.p>

         <p className="mb-4">Let`s build something together! Reach out via email or socia media.
            </p>

        <motion.a
        whileHover={{ scale: 1.1 }}
        href="#Projects" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">View My Work</motion.a>
        </div>
         
        {/* */}
            <div className="relative flex justify-center">
                 <div className="absolute w-72 h-72 bg-gradient-to-r from-pink-600 to-yellow-0 rounded-full blur-3xl opacity-80"></div>
                <Image src="/images/ronny.JPG"alt="my picture" width={300} height={300} className="rounded-full border-4 border-white shadow-lg"/>
        </div>
        </div>

        <div className="absolute bottom-2 md:bottom-4 left-4 text-xs md:text-sm text-white/70 italic z-10">
            <h3>BELIEVE IN YOUR CODE BELIEVE IN YOURSELF</h3>
            <p>you dont have to be great to start, but you have to start to be great. Zig Ziglar</p>
        </div>
        </section>
    )
}