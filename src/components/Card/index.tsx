import Image from "next/image";
import { useEffect, useState } from "react";
type CardProps = {
  value: string;
  setTodos: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        value: string;
      }[]
    >
  >;
  id: string;
};
const Card: React.FC<CardProps> = ({ value, setTodos, id }) => {
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    if (isChecked) {
      setTimeout(() => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
      }, 500);
    }
  }, [isChecked, setTodos, id]);
  return (
    <div className="flex w-full items-center gap-3 mt-3 border-[#3C3D41] border p-3 text-white">
      <div>
        <div
          className={`flex w-6 h-6 items-center justify-center rounded-full cursor-pointer ${
            isChecked && "bg-green-500"
          } border-green-500 border`}
          onClick={() => setIsChecked(!isChecked)}
        >
          <Image
            src="/check-solid.svg"
            alt="check_svg"
            color="white"
            height={12}
            width={12}
          />
        </div>
      </div>
      <p className={`${isChecked && "line-through decoration-gray-200"}`}>
        {value}
      </p>
    </div>
  );
};

export default Card;
