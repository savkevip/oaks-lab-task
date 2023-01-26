import { Check, Pencil, Trash } from "phosphor-react";
import { ReactNode } from "react";

import { getRelativeHours } from "../../utils/helpers";

type Props = {
  updatedAt?: string;
  completed?: boolean;
  children?: ReactNode;
  title: string;
  createdAt: string;
  count: number;
  onEdit: () => void;
  onDelete: () => void;
};

export const Stage = ({
  title,
  createdAt,
  count,
  updatedAt,
  completed,
  onEdit,
  onDelete,
  children,
}: Props) => {
  const iconProps = {
    size: 16,
    color: "black",
  };

  return (
    <div className="mb-6">
      <div className="flex items-center mb-4">
        <div className="rounded-full bg-gray-700 text-white w-10 h-10 mr-4 flex justify-center items-center text-sm">
          {count}
        </div>
        <div>
          <div className="flex items-center">
            <h1 className="text-xl text-black">{title}</h1>
            <Pencil
              {...iconProps}
              className="cursor-pointer ml-4"
              onClick={onEdit}
            />
            <Trash
              {...iconProps}
              className="cursor-pointer ml-2"
              onClick={onDelete}
            />
          </div>
          <span className="text-sm text-gray-400">
            {updatedAt
              ? `Updated ${getRelativeHours(updatedAt)}`
              : `Created ${getRelativeHours(createdAt)}`}
          </span>
        </div>
        {completed ? (
          <Check {...iconProps} className="ml-12" size={42} />
        ) : null}
      </div>
      {children}
    </div>
  );
};
