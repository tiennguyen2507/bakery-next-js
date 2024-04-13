import { CSSProperties, PropsWithChildren, createElement } from "react";

type Props = PropsWithChildren<{
  size?: string;
  color?: string;
  weight?: CSSProperties["fontWeight"];
  className?: string;
  align?: CSSProperties["textAlign"];
  tag?: string;
}>;

const BaseTypography: React.FC<Props> = (props) => {
  const style = {
    fontWeight: props.weight,
    fontSize: props.size,
    textAlign: props.align,
    color: props.color && `var(--color-${props.color})`,
  };

  return createElement(
    props.tag || "p",
    { style, className: props.className },
    props.children
  );
};

export default BaseTypography;
