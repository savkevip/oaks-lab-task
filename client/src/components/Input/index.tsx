import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  error?: string | boolean;
  name: string;
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, name, label, error, ...props }: Props) => {
  const classList = twMerge("flex flex-col relative pb-6", className);

  return (
    <div className={classList}>
      <label className="text-black text-sm mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        {...props}
        className="roundend-sm bg-gray-200 text-black p-1 text-sm focus:outline-none"
        name={name}
      />
      {error ? (
        <span className="self-end text-xs text-red-400 absolute bottom-0.5">
          {error}
        </span>
      ) : null}
    </div>
  );
};
