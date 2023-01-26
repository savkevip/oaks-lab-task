import { Check } from "phosphor-react";
import { ReactNode } from "react";

type Props = {
  updatedAt?: string;
  completed?: boolean;
  children?: ReactNode;
  title: string;
  createdAt: string;
  count: number;
};

export const Stage = ({
  title,
  createdAt,
  count,
  updatedAt,
  completed,
  children,
}: Props) => {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-4">
        <div className="rounded-full bg-gray-700 text-white w-10 h-10 mr-4 flex justify-center items-center text-sm">
          {count}
        </div>
        <div>
          <h1 className="text-xl text-black">{title}</h1>
          <span className="text-sm text-gray-400">
            {updatedAt || createdAt}
          </span>
        </div>
        {completed ? <Check className="ml-12" size={42} color="black" /> : null}
      </div>
      {children}
    </div>
  );
};
