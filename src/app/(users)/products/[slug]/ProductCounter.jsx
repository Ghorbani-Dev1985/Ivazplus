"use client";
import { useState } from "react";
import { HiMinus, HiOutlinePlus } from "react-icons/hi";

const ProductCounter = () => {
  const [count, setCount] = useState(1);
  const MinusCountHandler = () => {
    if(count > 1){
        setCount((prev) => prev - 1)
    }
  }
  return (
    <div className="w-44 h-12 flex-center border border-gray-200 rounded-lg px-1.5">
      <button onClick={() => setCount((prev) => prev + 1)} className="w-10 h-12 flex-center">
        <HiOutlinePlus className="size-5" />
      </button>
      <input
        type="number"
        value={count}
        className="w-full h-12 text-center border-t border-b border-gray-200 outline-none px-10 text-lg"
      />
      <button onClick={MinusCountHandler} disabled={count === 1 && true} className="w-10 h-12 flex-center disabled:opacity-50 disabled:cursor-not-allowed">
        <HiMinus className="size-5" />
      </button>
    </div>
  );
};

export default ProductCounter;
