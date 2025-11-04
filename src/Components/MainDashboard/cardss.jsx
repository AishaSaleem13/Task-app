import React from "react";

import { useRouter } from "next/navigation";

import { useDispatch } from "react-redux";
import { clearupdate } from "@/Store/update";
const cards = [
 
  {
    id: 1,
    title: "Gym Time ",
    text: "Stay strong and consistent.",
    gradient: "from-[#CCD5AE] to-[#CCD5AE]",
    face: "🥊",
  },
  {
    id: 2,
    title: "Work Mode ",
    text: "Focus and get things done.",
    gradient: "from-[#669BBC] to-[#669BBC]",
    face: "💻",
  },
  {
    id: 3,
    title: "Personal Space ",
    text: "Recharge and relax.",
    gradient: "from-[#FFAFCC] to-[#FFAFCC]",
    face :"📄 ",
  },
  {
    id: 4,
    title: "Office Goals ",
    text: "Plan, execute, achieve.",
    gradient: "from-[#D4A373] to-[#D4A373]",
    face: "👨",
  },
];

function AnimatedCards() {
   const router =useRouter()
   const dispatch= useDispatch()
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-fit mx-auto mt-10">
      {cards.map((c) => (
        <div
          key={c.id}
        onClick={() => {
                 dispatch(clearupdate());
                router.push("/");
               }}
          className={`relative w-30 md:w-40 h-40 rounded-2xl bg-gradient-to-br ${c.gradient} shadow-xl text-white flex flex-col items-center justify-center transition-all duration-500 hover:scale-105`}
        >
         
          <div className="text-5xl mb-2 animate-bounce">{c.face}</div>

          <div className="text-center">
            <h1 className="text-lg md:text-xl font-bold tracking-wide">
              {c.title}
            </h1>
            <p className="text-xs md:text-sm text-white/90 mt-1 px-2">
              {c.text}
            </p>
          </div>    
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/30 rounded-full animate-pulse"></div>
        </div>
      ))}
    </div>
  );
}

export default AnimatedCards;