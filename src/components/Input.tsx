import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register?: any;
  error?: string;
  valueAsNumber?: boolean;
}

export const Input: FC<Props> = (props) => {
  const { valueAsNumber, register, name, error } = props;

  return (
    <div className="w-full">
      <div
        className={`${
          error ? "tooltip tooltip-open w-full tooltip-bottom" : ""
        }`}
        data-tip={error}
      >
        <input
          className="border rounded-lg bg-white border-slate-400 text-black p-2 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 w-full disabled:bg-@Gray2"
          {...(register ? register(name, { valueAsNumber }) : {})}
          {...props}
        />
      </div>
    </div>
  );
};

export const TextArea: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = (
  props
) => {
  return (
    <div className="w-full">
      <textarea
        className="border rounded-lg  bg-slate-100  border-slate-400 text-black p-2 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 w-full h-60"
        {...props}
      />
    </div>
  );
};
