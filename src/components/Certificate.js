import Image from "next/image"

const certs =[
    { image: "/images/dsa.JPG", title: "Digital Skills Certificate" },
    { image: "/images/futureclan.JPG", title: "Future Clan Certificate" },
    { image: "/images/lita.JPG", title: "Ladies In Tech Certificate" },
]


export default function Certificate() {
    return(
    <section className="py-20 px-6 bg-gray-100  dark:bg-gray-800">
     <h2 className="text-4xl font-bold text-center mb-10">Certificates</h2>
     <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certs.map((c, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
                <Image src={c.image}
                alt={c.title}
                width={400}
                height={300}
                className="w-full object-cover"/>
            </div>
        ))}
     </div>
    </section>
    )

}