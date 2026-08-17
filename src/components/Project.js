"use client"
import Image from "next/image";
import { motion } from "framer-motion";
const projects =[
    {
        name: "Project 1",
        description: "A responsive web app built with Next.js and Tailwindcss.",
        image: "/images/oxygen.jpeg",
        link: "https://oxygen-foundation.vercel.app"
    },
     {
        name: "Project 2",
        description: "A responsive web app built with Next.js and Tailwindcss.",
        image: "/images/screeenshot.png",
        link: "https://penpixel-studio.vercel.app"
    },
     {
        name: "Project 3",
        description: "A responsive web app built with Next.js and Tailwindcss.",
        image: "/images/todo.jpeg",
        link: "https://todo-list-five-chi-70.vercel.app"

    },
     {
        name: "Project 4",
        description: "A responsive beginner web app built with HTML, Bootstrap, JavaScript.",
        image: "/images/iconic.jpeg",
        link: "https://roniblaq.github.io/IconicTravels"
    },
      {
         name: "Project 4",
        description: "A Fullstack responsive web app built with Next.js, Tailwindcss, PHP, MYSQL Database",
       image:"/images/sample.JPG",
       link: "https://mindease-smoky.vercel.app"
      },
];

export default function Projects() {
    return (
        <section id="Projects" className="py-20 bg-gray-100 dark:bg-gray-800 text-center px-6">
            <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">{projects.map((project, i) => (
                <motion.div key={i}whileHover={{ scale: 1.05 }}  className=" p-6 rounded-2xl backdrop-blur bg-white/60 dark:bg-gray-700/60 shadow-lg">
                    <div className="relative w-full h-48">
                        <Image src={project.image}
                        alt={project.name}
                       
                        fill
                        className="object-cover"/>
                    </div>

                    <div className="p-5">
                    <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                    <p className="mb-4">{project.description}</p>
                    <a href={project.link} className="text-blue-600 hover:shadow-lg transition">View Project</a>
                    </div>

                </motion.div>
                    ))}
                    </div>
        </section>
    )
}