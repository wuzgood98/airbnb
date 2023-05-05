"use client";

import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

type CounterProps = {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
};

const Counter: React.FC<CounterProps> = ({
  title,
  subtitle,
  value,
  onChange,
}) => {
  const incrementCounter = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const reduceCounter = useCallback(() => {
    if (value === 1) {
      return;
    }

    onChange(value - 1);
  }, [onChange, value]);

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <p className="font-medium">{title}</p>
        <p className="font-light text-gray-600">{subtitle}</p>
      </div>
      <div className="flex flex-row items-center gap-4">
        <button
          type="button"
          aria-label="Reduce counter"
          onClick={reduceCounter}
          className="w-10 h-10 rounded-full border-[1px] border-neutral-400 flex items-center justify-center text-neutral-600 hover:opacity-80 transition"
        >
          <AiOutlineMinus />
        </button>
        <p className="font-light text-xl text-neutral-600">{value}</p>
        <button
          type="button"
          aria-label="Increment counter"
          onClick={incrementCounter}
          className="w-10 h-10 rounded-full border-[1px] border-neutral-400 flex items-center justify-center text-neutral-600 hover:opacity-80 transition"
        >
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
};

export default Counter;
