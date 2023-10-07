import { resources } from "constants/resources";
import Image from "next/image";

interface LoadingProps {
  size?: string;
  inline?: boolean;
  classname?: string;
}
const BaseLoading = ({ size = "24", inline, classname }: LoadingProps) => {
  if (inline) {
    return (
      <Image
        className={classname}
        style={{ width: size && `${size}px`, height: size && `${size}px` }}
        src={resources.SPIN}
        alt="hello"
      />
    );
  }
  return (
    <div className={classname}>
      <Image
        style={{ width: size && `${size}px`, height: size && `${size}px` }}
        src={resources.SPIN}
        alt="hello"
      />
    </div>
  );
};

export default BaseLoading;
