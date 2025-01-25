import React, { useState, useEffect } from "react"

function DealsOfTheDays() {
  const [days, setDays] = useState("02")
  const [hours, setHours] = useState("22")
  const [minutes, setMinutes] = useState("57")
  const [seconds, setSeconds] = useState("28")

  // Simple countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prev) => String(prev - 1).padStart(2, "0"))
      } else {
        setSeconds("59")
        if (minutes > 0) {
          setMinutes((prev) => String(prev - 1).padStart(2, "0"))
        } else {
          setMinutes("59")
          if (hours > 0) {
            setHours((prev) => String(prev - 1).padStart(2, "0"))
          } else {
            setHours("23")
            setDays((prev) => String(prev - 1).padStart(2, "0"))
          }
        }
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [seconds, minutes, hours])

  return (
    <div className="p-6 bg-[#f0f7f8] rounded-lg">
      {/* Left Content */}
      <div className="max-w-[50%]">
        <h2 className="text-2xl font-bold text-teal-600">Deals of the Day</h2>
        <p className="text-gray-600 mb-4">Limited quantities</p>

        <h3 className="text-xl mb-4">Summer Collection New Modern Design</h3>

        {/* Price */}
        <div className="flex gap-2 mb-6">
          <span className="text-2xl font-bold text-red-500">₹139.00</span>
          <span className="text-gray-500 line-through">₹160.99</span>
        </div>

        {/* Timer */}
        <p className="text-gray-600 mb-2">Hurry Up! Offer Ends In:</p>
        <div className="flex gap-2 mb-6">
          <div className="bg-teal-600 text-white p-2 rounded text-center w-14">
            <div className="text-xl font-bold">{days}</div>
            <div className="text-xs">Days</div>
          </div>
          <div className="text-xl font-bold text-gray-400">:</div>
          <div className="bg-teal-600 text-white p-2 rounded text-center w-14">
            <div className="text-xl font-bold">{hours}</div>
            <div className="text-xs">Hours</div>
          </div>
          <div className="text-xl font-bold text-gray-400">:</div>
          <div className="bg-teal-600 text-white p-2 rounded text-center w-14">
            <div className="text-xl font-bold">{minutes}</div>
            <div className="text-xs">Mins</div>
          </div>
          <div className="text-xl font-bold text-gray-400">:</div>
          <div className="bg-teal-600 text-white p-2 rounded text-center w-14">
            <div className="text-xl font-bold">{seconds}</div>
            <div className="text-xs">Sec</div>
          </div>
        </div>

        <button className="border-2 border-teal-600 text-teal-600 px-6 py-2 rounded hover:bg-teal-600 hover:text-white">
          Shop Now
        </button>
      </div>
      </div>

      
  )
}

export default DealsOfTheDays;