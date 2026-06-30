"use client";

import { useState } from "react";

export default function WaterCard() {
  const [water, setWater] = useState(0);

  const increaseWater = () => {
    if (water < 4) {
      setWater(water + 0.5);
    }
  };

  const decreaseWater = () => {
    if (water > 0) {
      setWater(water - 0.5);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border">

      <div className="flex items-center justify-between">

        <div>
          <h3 className="text-gray-500 text-sm">
            💧 Water Intake
          </h3>

          <p className="text-3xl font-bold mt-2">
            {water} / 4 L
          </p>
        </div>

        <div className="flex gap-3">

          <button
            onClick={decreaseWater}
            className="w-10 h-10 rounded-full bg-gray-200 text-xl"
          >
            −
          </button>

          <button
            onClick={increaseWater}
            className="w-10 h-10 rounded-full bg-green-600 text-white text-xl"
          >
            +
          </button>

        </div>

      </div>

    </div>
  );
}