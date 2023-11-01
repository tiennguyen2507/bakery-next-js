import { ChangeEventHandler, FunctionComponent } from "react";

interface BaseInputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  error?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const BaseInput: FunctionComponent<BaseInputProps> = (props) => {
  const { label, type, placeholder, className, value, error, onChange } = props;
  return (
    <div className={className}>
      {label && (
        <label htmlFor="1" className="text-lg font-medium">
          {label}
        </label>
      )}
      <div className="bg-[#F4F5FC] px-2 py-2 rounded-lg text-yellow-600">
        <input
          value={value}
          className="bg-transparent outline-none w-full text-lg"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
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
