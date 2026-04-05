'use client'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

export default function Contact() { 
     const formRef = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_dnf55ce",
            "template_rkb9z9o",
             formRef.current,
             "acidpvQS8ynKSoArB"
        )
        .then(() => {
          alert('message sent successfully!')
        })
        .catch((error) => {
            console.log(error)
        })
    }
 return ( 
 <section id="Contact" className="min-h-screen flex items-center justify-center px-6 backdrop-blur bg-white/60 dark:bg-gray-700/60 ">
 <form ref={formRef} onSubmit={sendEmail} className="w-full max-w-lg space-y-6">
 <h1 className="text-4xl font-serif">
Contact Me
</h1>
 <input name="name" type="text" className="w-full bg-transparent border border-white/20 p-3 rounded-lg cursor-pointer" placeholder="Your Name" required /> 

 <input name="email" type="email"  className="w-full bg-transparent border border-white/20 p-3 rounded-lg cursor-pointer" placeholder="Email Address" required />

 <input name="phone" type="tel"  className="w-full cursor-pointer bg-transparent border border-white/20 p-3 rounded-lg" placeholder="Phone No" required />

 <textarea name="message" className="w-full bg-transparent border border-white/20 p-3 rounded-lg cursor-pointer" placeholder="" required />
 <button type="submit" className="w-50 bg-white ml-14 py-3 rounded-full text-gray-500 cursor-pointer"> 
 Send</button>
 </form>
 </section>
 )
}



// export default function Contact() {
//     return (
//         <section id="contact" className="py-20 bg-gray-100 text-center px-4">
//             <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
//            

//         </section>
//     )
// }
