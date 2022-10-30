import React from "react";
import clsx from "clsx";

type Props = {
  placeholder?: string;
  className?: string;
  label?: string;
  isTextarea?: boolean;
  maxLength?: number;
  id: string;
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
    }: Props,
    ref: any
  ) => (
    <div className="w-full max-w-sm">
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
          maxLength={maxLength}
          placeholder={placeholder}
          ref={ref}
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
