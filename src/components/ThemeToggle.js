// "use client";
// import { useEffect, useState } from "react";

// export default function ThemeToggle() {
//     const [dark, setDark] = useState(false);
//     // const [dark, setDark] = useState(() => {
//     //     if (typeof window !== "undefined") {
//     //         return localStorage.getItem("theme") === "dark";
//     //     }
//     //     return false;
//     // });
//     // useEffect(() => {
//     //     if (dark) {
//     //         document.documentElement.classList.add("dark");
//     //         localStorage.setItem("theme", "dark");
//     //     } else {
//     //          document.documentElement.classList.remove("dark");
//     //          localStorage.setItem("theme", "light");
//     //     }
//     // }, [dark]);





//     useEffect(() => {
//         const saved = localStorage.getItem("theme");
//         if (saved === "dark") {
//             document.documentElement.classList.add("dark");
//             setDark(true);
//         } else{
//             document.documentElement.classList.remove("dark");
//         }
//     }, []);

//      const toggleTheme = () => {
//         if (dark) {
//         document.documentElement.classList.remove("dark");
//         localStorage.setItem("theme", "light");
//         } else {
//             document.documentElement.classList.add("dark");
//             localStorage.setItem("theme", "dark");
//         }
//        setDark(!dark);
//     };

//     return (
//         <button onClick={toggleTheme}
//         className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700">{dark ? "☀️" : "🌙"}</button>
//     )
// }