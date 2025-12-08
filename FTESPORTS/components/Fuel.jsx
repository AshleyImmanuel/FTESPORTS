"use client";
import { useState, useEffect } from "react";

export default function Fuel() {
  const [amount, setAmount] = useState(100);

  const upiId = "mhdfahad@fam"; // <- put your REAL UPI here
  const isMobile =
    typeof window !== "undefined" &&
    (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent));

  // Mobile → open UPI app
  const handleSendFuel = () => {
    if (isMobile) {
      const url = `upi://pay?pa=${upiId}&pn=FinalTouch&am=${amount}&cu=INR`;
      window.location.href = url;
    } else {
      alert("Razorpay for desktop is coming soon.");
    }
  };

  // For amount preset buttons
  const handlePresetClick = (value) => {
    setAmount(value);
  };

  return (
    <section id="fuel" className="min-h-screen text-center py-20 px-6 bg-black">
      {/* Header */}
      <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wider">
        Boost Our <span style={{ color: "#00c701" }}>Firepower</span>
      </h2>

      <p className="text-gray-300 mt-4 max-w-xl mx-auto">
        Small UPI support helps us cover scrims, bootcamps, and production.
        No paywalls, no nonsense—just clean backing for the grind.
      </p>

      {/* Glass Box */}
      <div
        className="
        max-w-3xl mx-auto rounded-2xl 
        border border-[#00c701]/40 
        bg-black/40 backdrop-blur-xl 
        shadow-[0_0_45px_#00c701] 
        p-8 mt-14"
      >
        {/* Support Channel Header */}
        <div className="flex justify-between text-sm text-gray-300 mb-6">
          <span>SUPPORT CHANNEL</span>
          <span className="text-[#00c701]">● STATUS: ONLINE</span>
        </div>

        {/* UPI ID */}
        <div className="text-left text-gray-300 mb-6">
          <p className="text-sm">UPI ID</p>
          <div
            className="
              w-full mt-2 
              bg-black/60 border border-[#00c701]/40 
              rounded-xl px-4 py-3 
              text-[#00c701] font-mono"
          >
            {upiId}
          </div>
          {isMobile && (
            <p className="text-xs text-gray-400 mt-1">
              On mobile, the button will open your UPI app directly.
            </p>
          )}
        </div>

        {/* Amount Buttons */}
        <p className="text-gray-300 text-sm">Pick an amount or set your own</p>

        <div className="flex justify-center gap-3 mt-4">
          {[50, 100, 200, 500].map((value) => (
            <button
              key={value}
              onClick={() => handlePresetClick(value)}
              className={`
                px-5 py-2 rounded-lg 
                border  
                transition 
                ${
                  amount === value
                    ? "bg-[#00c701] text-black border-[#00c701]"
                    : "border-gray-600 text-gray-300 hover:border-[#00c701]"
                }
              `}
            >
              ₹{value}
            </button>
          ))}
        </div>

        {/* Custom Amount Input */}
        <div className="mt-6">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="
              w-full px-4 py-3 rounded-xl 
              bg-black/60 border border-gray-600 
              text-gray-200
              focus:border-[#00c701] outline-none
            "
          />
        </div>

        {/* SEND FUEL BUTTON */}
        <button
          onClick={handleSendFuel}
          className="
            mt-8 w-full py-4 
            rounded-xl 
            font-bold tracking-widest 
            bg-[#00c701] text-black 
            hover:bg-[#00e000] 
            transition shadow-[0_0_20px_#00c701]
          "
        >
          {isMobile ? "SEND FUEL ⚡" : "COMING SOON (DESKTOP)"}
        </button>
      </div>
    </section>
  );
}
