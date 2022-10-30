import React from "react";
import clsx from "clsx";

type Props = {
  placeholder?: string;
  className?: string;
  label?: string;
  isTextarea?: boolean;
  maxLength?: number;
  id: string;
  value: string;
};

// eslint-disable-next-line react/display-name
const TextInput = React.forwardRef(
  (
    {
      placeholder = "Enter text here...",
      className = "",
      label = "",
      maxLength,
      id,
      isTextarea = false,
      value = "",
    }: Props,
    ref: any
  ) => (
    <div className="max-w-sm mx-auto">
      {label ? (
        <div className="text-[12px] md:text-xs font-bold text-light-2 mb-1.5">
          {label}
        </div>
      ) : (
        ""
      )}

      {!isTextarea ? (
        <input
          id={id}
          aria-label={id}
          maxLength={maxLength}
          value={value}
          className={clsx(
            "py-2.5 px-5 text-base rounded bg-dark-1 text-white placeholder-light-4 border border-light-4 focus:border-highlight outline-none w-full duration-75",
            className
          )}
          placeholder={placeholder}
          ref={ref}
          type="text"
        />
      ) : (
        <textarea
          className={clsx(
            "py-2.5 px-5 text-base rounded bg-dark-1 text-white placeholder-light-4 border border-light-4 focus:border-highlight outline-none w-full duration-75 resize-y",
            className
          )}
          disabled
          maxLength={maxLength}
          placeholder={placeholder}
          ref={ref}
          value={value}
          name={id}
          id={id}
          cols={30}
          rows={10}
        ></textarea>
      )}
    </div>
  )
);

export default TextInput;
