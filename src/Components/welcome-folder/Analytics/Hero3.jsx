import React from "react";

function Hero3() {
  return (
    <>
      <div className="bg-base-100 py-16 md:py-24 -mt-20">

        <div className="flex flex-row flex-wrap justify-between items-center px-6 md:px-10 h-auto md:h-screen mx-auto max-w-6xl">


          <div className="flex-1 flex justify-center">
            <img
              src="note.png"
              alt="task note"
              className="w-64 md:w-80 lg:w-96 object-contain"
            />
          </div>


          <div className="flex-1 mt-6 md:mt-0 md:pl-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4">
              Analyze your tasks
            </h1>

    
            <div className="shadow-xl rounded-xl p-4 bg-gray-100 mb-4">
              <div className="flex items-center mb-2">
                <img
                  src="account.png"
                  alt="account"
                  className="w-8 h-8 mr-2"
                />
                <h3 className="text-xl md:text-2xl font-semibold">
                  Personal Task Tracking
                </h3>
              </div>
              <p className="text-sm md:text-base font-sans text-gray-700">
                Stay organized and focused with personal task tracking. Keep all
                your goals, to-dos, and daily priorities in one place, so you
                can plan better, track progress, and achieve more without
                feeling overwhelmed. It’s your simple way to turn plans into
                progress—one task at a time.
              </p>
            </div>


            <div className="flex items-center gap-3 shadow-md rounded-lg p-3 bg-gray-50 mb-3">
              <img src="bar-chart.png" alt="bar chart" className="w-8 h-8" />
              <p className="text-base font-medium text-gray-700">
                People Analysis
              </p>
            </div>

            <div className="flex items-center gap-3 shadow-md rounded-lg p-3 bg-gray-50">
              <img src="mail.png" alt="mail" className="w-8 h-8" />
              <p className="text-base font-medium text-gray-700">
                Weekly Report
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero3;
