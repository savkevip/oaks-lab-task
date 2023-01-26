import { CaretCircleDown } from "phosphor-react";
import { SelectHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Option = {
  label: string;
  value: string;
};

type Props = {
  className?: string;
  error?: boolean;
  label: string;
  name: string;
  options: Option[];
  placeholder: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

export const Select = ({
  className,
  label,
  name,
  options,
  placeholder,
  error,
}: Props) => {
  const classList = twMerge("flex flex-col relative pb-6", className);

  return (
    <div className={classList}>
      <label className="text-black text-sm mb-1" htmlFor={name}>
        {label}
      </label>
      <select
        className="roundend-sm bg-gray-200 text-black p-1 text-sm focus:outline-none appearance-none"
        name={name}
      >
        <option value="">{placeholder}</option>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <CaretCircleDown
        className="absolute right-1 bottom-8"
        color="black"
        size={12}
      />
      {error ? (
        <span className="self-end text-xs text-red-400 absolute bottom-0.5">
          Field is required
        </span>
      ) : null}
    </div>
  );
};
