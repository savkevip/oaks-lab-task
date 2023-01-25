import { CheckSquare, Square, Lock } from "phosphor-react";
import { twMerge } from "tailwind-merge";

type Props = {
  updatedAt?: string;
  disabled?: boolean;
  createdAt: string;
  title: string;
  isDone: boolean;
  onCheck: (value: boolean) => void;
};

export const Task = ({
  title,
  isDone,
  createdAt,
  updatedAt,
  disabled,
  onCheck,
}: Props) => {
  const handleCheck = () => {
    if (disabled) return;
    onCheck(isDone);
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
      </div>
      <span className="text-sm text-gray-400">{updatedAt || createdAt}</span>
    </div>
  );
};
