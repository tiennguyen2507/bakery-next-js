import React, { ChangeEventHandler, FunctionComponent } from "react";

interface BaseInputProps {
  label?: string;
  type?: string;
  className?: string;
  value?: string;
  error?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default React.forwardRef<HTMLInputElement, BaseInputProps>(
  function BaseInput({ label, type, className, error, ...props }, ref) {
    return (
      <div className={className}>
        {label && (
          <label htmlFor="1" className="text-lg font-medium">
            {label}
          </label>
        )}
        <div className="bg-[#F4F5FC] px-2 py-2 rounded-lg text-yellow-600">
          <input
            ref={ref}
            className="bg-transparent outline-none w-full text-lg"
            type={type}
            {...props}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    );
  }
);
