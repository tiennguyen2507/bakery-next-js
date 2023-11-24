import { useController, UseControllerProps } from "react-hook-form";

export type TypePickSizeProps = {
  control?: UseControllerProps<any, string>;
};

const CountNumber: React.FC<TypePickSizeProps> = ({ control }) => {
  const controll = control && useController(control);

  return (
    <div className="flex items-center gap-5">
      <button
        type="button"
        className="px-6 py-2 bg-[#FE4A7A] text-white rounded-xl active:bg-pink-500"
        onClick={() =>
          controll?.field.value > 1 &&
          controll?.field.onChange(controll?.field.value - 1)
        }
      >
        -
      </button>
      <p className="m-0 text-lg font-bold">{controll?.field.value || 1}</p>
      <button
        type="button"
        className="px-6 py-2 bg-[#FE4A7A] text-white rounded-xl active:bg-pink-500"
        onClick={() => controll?.field.onChange(controll?.field.value + 1)}
      >
        +
      </button>
    </div>
  );
};

export default CountNumber;
