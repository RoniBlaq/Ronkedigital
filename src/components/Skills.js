"use client"
const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwindcss", "PHP", "MySQL"];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-gray-300 text-gray-600 text-center px-4">
            <h2 className="text-4xl font-bold mb-6">Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {skills.map(skill => (
                    <span key={skill} className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    )
}