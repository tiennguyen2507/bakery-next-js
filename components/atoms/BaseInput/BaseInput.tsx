import { FunctionComponent } from "react";

interface BaseInputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  className?: string;
}

const BaseInput: FunctionComponent<BaseInputProps> = ({
  label,
  type,
  placeholder,
  className,
}) => {
  return (
    <div className={className}>
      {label && (
        <label htmlFor="1" className="text-lg font-medium">
          {label}
        </label>
      )}
      <div className="bg-[#F4F5FC] px-2 py-2 rounded-lg text-yellow-600">
        <input
          className="bg-transparent outline-none w-full text-lg"
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

BaseInput.defaultProps = {
  label: "",
  placeholder: "",
  type: "text",
  className: "",
};

export default BaseInput;
