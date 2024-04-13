import { resources } from "constants/resources";
import Image from "next/image";

interface LoadingProps {
  size?: string;
  inline?: boolean;
  className?: string;
}
const BaseLoading = ({ size = "24", inline, className }: LoadingProps) => {
  if (inline) {
    return (
      <Image
        className={className}
        style={{ width: size && `${size}px`, height: size && `${size}px` }}
        src={resources.SPIN}
        alt="hello"
      />
    );
  }
  return (
    <div className={className}>
      <Image
        style={{ width: size && `${size}px`, height: size && `${size}px` }}
        src={resources.SPIN}
        alt="hello"
      />
    </div>
  );
};

export default BaseLoading;
