import { PropsWithChildren } from "react";
import styles from "./Container.module.css";
import clsx from "clsx";

type TypeContainerProps = PropsWithChildren & {
  className?: string;
};

const Container: FC<TypeContainerProps> = ({ children, className }) => {
  return (
    <section className={clsx(styles.wrapper, className)}>{children}</section>
  );
};

export default Container;
