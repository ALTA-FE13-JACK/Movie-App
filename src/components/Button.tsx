import { FC, ButtonHTMLAttributes } from "react";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const ButtonGold: FC<Button> = (props) => {
  const { label } = props;

  return (
    <button
      className="mt-3 py-3 px-4 inline-flex justify-center items-center rounded-md text-md font-bold bg-@Gold text-@Black hover:scale-95 focus:outline-none transition-all drop-shadow-lg hover:drop-shadow-xl dark:focus:ring-offset-gray-800"
      {...props}
    >
      {label}
    </button>
  );
};
export const ButtonBlack: FC<Button> = (props) => {
  const { label } = props;

  return (
    <button
      className="mt-3 py-3 px-4 inline-flex justify-center items-center rounded-md text-md font-bold bg-@Black text-@Gold hover:scale-95 focus:outline-none transition-all drop-shadow-lg hover:drop-shadow-xl dark:focus:ring-offset-gray-800"
      {...props}
    >
      {label}
    </button>
  );
};
