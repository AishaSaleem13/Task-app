"use client";
import React, { useEffect, useState } from "react";
import { getapi, getdelete, getupdate } from "@/Config/api";
import AnimatedCards from "@/Components/MainDashboard/cardss";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { updateTask, clearupdate } from "@/Store/update";
import ScrollTriggeredImages from "../services/Animation";
import Link from "next/link";

function Homemain() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.userslice.Username);


 const getData = async () => {
  setLoading(true);
  try {
    const res = await getapi(); 
    const today = new Date();
    const formattedToday = today.toLocaleDateString("en-CA"); 

    const todayTasks = res.Data.filter(task => {
      const taskDate = task.date || new Date(task.createdAt).toLocaleDateString("en-CA");
      return taskDate === formattedToday;
    });

    console.log("Today's date:", formattedToday);
    console.log("Filtered today tasks:", todayTasks);

    setData(todayTasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    alert("Error fetching tasks. Please try again later.");
  } finally {
    setLoading(false);
  }
};



  const toggel = async (task) => {
    let update = { ...task, completed: !task.completed };
    await getupdate(task._id, update);
    setData(data.map((t) => (t._id === task._id ? update : t)));
  };

  const handleDelete = async (id) => {
    try {
      await getdelete(id);
      getData();
    } catch (error) {
      alert("Error deleting task. Please try again later.");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-10 px-6">
      <div className="flex  flex-row justify-between items-center  px-6">
        <h1 className="text-4xl font-bold -mt-6 text-gray-800 tracking-tight drop-shadow-sm">
          <span className="text-red-900">Taskim</span> Dashboard
        </h1>
        <input
        value={`👋 Hello ${selector ? selector : "Guest"}!`}
        readOnly
        className="text-3xl text-blue-950 font-serif  bg-white/60 backdrop-blur-md border border-gray-200 rounded-xl px-6 py-3 mb-10 shadow-sm"
      />
        {/* <button
          className="px-6 py-2.5 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg hover:opacity-90 transition duration-200"
          onClick={() => router.push("/alltask")}
        >
          All Tasks
        </button> */}
      </div>

     

    
      

      <div className="flex justify-center mb-16">
        <AnimatedCards />
      </div>

   <div className="w-full bg-white/70 backdrop-blur-md rounded-3xl -mt-10 shadow-2xl border border-gray-200 py-10 px-10">
  <div className="flex justify-center items-center gap-4">
  <Link href={"/Form"}>
    <input
      type="text"
      placeholder="✨ What’s on your agenda today?"
      className="w-80 py-4 px-6 text-gray-800 placeholder-gray-400 text-lg rounded-xl border border-gray-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80 backdrop-blur-md transition"
    />
  </Link>

  <div
    className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:scale-110 transition"
    onClick={() => router.push("/analytics")}
  >
    📊
  </div>
</div>



{/* bothrows */}
        <div className="flex mt-3  lg:flex-row justify-between items-start gap-12">
        {/* leftsideis */}
          <div className="flex-[2] w-full">
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-md p-6 border border-gray-100">
             <h1>Todays Task</h1>
              {loading ? (
                <p className="text-gray-500 text-lg font-medium animate-pulse text-center mt-16">
                  Loading your tasks...
                </p>
              ) : data && data.length > 0 ? (
                <div className="divide-y divide-gray-200">
                  {data.map((t) => (
                    <div
                      key={t._id}
                      className={`flex justify-between items-center py-4 px-2 transition-all duration-300 hover:bg-white/80 rounded-xl`}
                    >
                      {/* Left: Checkbox + Details */}
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          checked={t.completed}
                          onChange={() => toggel(t)}
                          className="w-5 h-5 mt-1 cursor-pointer accent-blue-500"
                        />
                        <div>
                          <h2 className="text-lg font-semibold text-gray-800">
                            {t.title}
                          </h2>
                          <p className="text-gray-500 text-sm">{t.tasks}</p>
                        </div>
                      </div>

                      <div className="flex gap-4 items-center">
                        <img
                          src={"pen.jpg"}
                          alt="edit"
                          onClick={() => {
                            dispatch(updateTask(t));
                            router.push("/Form");
                          }}
                          className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform hover:drop-shadow"
                        />
                        <img
                          src={"delete.jpg"}
                          alt="delete"
                          onClick={() => handleDelete(t._id)}
                          className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform hover:drop-shadow"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-lg font-medium text-center mt-20">
                  No tasks found — add a new one to get started ✏️
                </p>
              )}
            </div>
          </div>

          {/* ===== Right Side ===== */}
          <div className="w-[360px] flex-shrink-0 flex justify-center">
            <div className="rounded-2xl shadow-lg  border border-gray-100 p-6 w-full flex justify-center items-center hover:scale-[1.02] transition-transform duration-300">
              <ScrollTriggeredImages />
            </div>
          </div>
        </div>
      </div>

      <button
        className="fixed bottom-10 right-10 w-16 h-16 flex items-center justify-center text-3xl text-white bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full shadow-2xl hover:scale-105 hover:shadow-blue-400/40 transition-all duration-300 animate-pulse"
        onClick={() => {
          dispatch(clearupdate());
          router.push("/Form");
        }}
      >
        +
      </button>
    </div>
  );
}

export default Homemain;
