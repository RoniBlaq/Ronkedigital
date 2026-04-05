"use client"
export default function Footer() {
    return (
        <footer className="bg-gray-200 dark:bg-gray-900 text-center py-6">
            <p className="text-gray-700 dark:text-gray-300">
              &copy;  {new Date().getFullYear()} Ronny. All rights reserved.
            </p>

            <div className="mt-3 flex justify-center gap-4">
                <a href="https://github.com/roniblaq" className="hover:text-blue-500">GitHub</a>
                <a href="#" className="hover:text-blue-500">LinkedIn</a>
                 <a href="https://www.twitter.com/RoniBlaq" className="hover:text-blue-500">X</a>
                  <a href="https://www.instagram.com/ronkedigital" className="hover:text-blue-500">Instagram</a>
                   <a href="https://www.tiktok.com/@ronkedigital" className="hover:text-blue-500">TikTok</a>
                   
            </div>  
            
        </footer>
    )
}