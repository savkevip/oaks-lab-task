import { CheckSquare, Square, Lock, Pencil, Trash } from "phosphor-react";
import { twMerge } from "tailwind-merge";

import { getRelativeHours } from "../../utils/helpers";

type Props = {
  updatedAt?: string;
  disabled?: boolean;
  createdAt: string;
  title: string;
  isDone: boolean;
  onCheck: (value: boolean) => void;
  onEdit: () => void;
  onDelete: () => void;
};

export const Task = ({
  title,
  isDone,
  createdAt,
  updatedAt,
  disabled,
  onCheck,
  onEdit,
  onDelete,
}: Props) => {
  const handleCheck = () => {
    if (disabled) return;
    onCheck(!isDone);
  };

  const iconProps = {
    className: twMerge("mr-2 cursor-pointer", disabled ? "cursor-default" : ""),
    size: 18,
    color: "black",
    onClick: handleCheck,
  };

  const renderIcon = () => {
    if (disabled) return <Lock {...iconProps} />;
    if (isDone) return <CheckSquare {...iconProps} />;
    return <Square {...iconProps} />;
  };

  return (
    <div className="mb-2">
      <div className="flex items-center">
        {renderIcon()}
        <span>{title}</span>
        <Pencil
          {...iconProps}
          size={16}
          className="cursor-pointer ml-4"
          onClick={onEdit}
        />
        <Trash
          {...iconProps}
          size={16}
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
  );
};
