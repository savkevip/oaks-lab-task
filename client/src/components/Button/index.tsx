import { twMerge } from "tailwind-merge";
import { CircleNotch, Buildings, ListPlus, Lock } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";

type Props = {
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  label: string;
  icon: "building" | "listPlus";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  className,
  loading,
  disabled,
  label,
  icon,
  ...props
}: Props) => {
  const classList = twMerge(
    "flex items-center rounded-sm p-2 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-400 text-black",
    className
  );

  const renderIcon = () => {
    if (disabled || loading)
      return <Lock className="mr-2" size={14} color="black" />;
    if (icon === "building")
      return <Buildings className="mr-2" size={14} color="black" />;
    if (icon === "listPlus")
      return <ListPlus className="mr-2" size={14} color="black" />;
    return null;
  };

  return (
    <button {...props} className={classList} disabled={loading || disabled}>
      {renderIcon()}
      {label}
      {loading ? (
        <CircleNotch className="animate-spin ml-2" size={14} color="black" />
      ) : null}
    </button>
  );
};
