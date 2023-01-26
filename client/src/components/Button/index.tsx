import { twMerge } from "tailwind-merge";
import {
  CircleNotch,
  Buildings,
  ListPlus,
  Lock,
  Plus,
  Prohibit,
  FloppyDiskBack,
} from "phosphor-react";
import { ButtonHTMLAttributes } from "react";

type Icon = "building" | "listPlus" | "plus" | "prohibit" | "floppyDiskBack";

type Props = {
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  label: string;
  icon?: Icon;
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

  const iconProps = {
    className: "mr-2",
    size: 14,
    color: "black",
  };

  const renderIcon = () => {
    if (disabled || loading) return <Lock {...iconProps} />;
    if (icon === "building") return <Buildings {...iconProps} />;
    if (icon === "listPlus") return <ListPlus {...iconProps} />;
    if (icon === "plus") return <Plus {...iconProps} />;
    if (icon === "prohibit") return <Prohibit {...iconProps} />;
    if (icon === "floppyDiskBack") return <FloppyDiskBack {...iconProps} />;
    return null;
  };

  return (
    <button
      {...props}
      className={classList}
      type="button"
      disabled={loading || disabled}
    >
      {renderIcon()}
      {label}
      {loading ? (
        <CircleNotch {...iconProps} className="animate-spin ml-2" />
      ) : null}
    </button>
  );
};
