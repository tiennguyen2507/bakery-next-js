import { useController, UseControllerProps } from "react-hook-form";
type size = "S" | "M" | "L";

export type TypePickSizeProps = {
  options?: Array<size>;
  control?: UseControllerProps<any, string>;
};

const PickSize: React.FC<TypePickSizeProps> = ({
  options = ["S", "M", "L"],
  control,
}) => {
  const controll = control && useController(control);
  const activeClass = (size: string) =>
    size === controll?.field.value &&
    "border border-green-600 bg-green-400 border-2";

  return (
    <>
      {options?.map((size) => (
        <div
          className={`w-16 h-16 bg-[#bbe0ca] rounded-full flex 
          justify-center items-center cursor-pointer ${activeClass(size)}`}
          key={size}
          onClick={() => controll?.field.onChange(size)}
        >
          <p
            className={`m-0 text-green-600 font-bold ${
              size === controll?.field.value && "text-green-700"
            }`}
          >
            {size}
          </p>
        </div>
      ))}
    </>
  );
};

export default PickSize;
