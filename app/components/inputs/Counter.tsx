"use client";

import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
}

const Counter: React.FC<CounterProps> = ({
  title,
  subtitle,
  value,
  onChange,
}) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === 1) return;

    onChange(value - 1);
  }, [onChange, value]);

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="font-medium">{title}</div>
        <div className="font-light text-sm text-neutral-500">{subtitle}</div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div
          onClick={onReduce}
          className="
                    w-10
                    h-10
                    rounded-full
                    border-[1px]
                    border-purple-200
                    bg-purple-100
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    text-purple-600
                    hover:opacity-80
                    transition
                    "
        >
          <AiOutlineMinus size={20} />
        </div>
        <div className="font-semibold text-lg">{value}</div>
        <div
          onClick={onAdd}
          className="
                    w-10
                    h-10
                    rounded-full
                    border-[1px]
                    border-purple-200
                    bg-purple-100
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    text-purple-600
                    hover:opacity-80
                    transition
                    "
        >
          <AiOutlinePlus size={20} />
        </div>
      </div>
    </div>
  );
};

export default Counter;
