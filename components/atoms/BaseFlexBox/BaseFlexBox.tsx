import { PropsWithChildren, CSSProperties, createElement } from "react";

type Props = PropsWithChildren<{
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  direction?: CSSProperties["flexDirection"];
  className?: string;
  gap?: number;
  tag?: string;
}>;

const BaseFlexBox: React.FC<Props> = (props) => {
  const style = {
    display: "flex",
    alignItems: props.align,
    justifyContent: props.justify,
    flexDirection: props.direction,
    gap: props.gap,
  };
  return createElement(
    props.tag || "div",
    { style, className: props.className },
    props.children
  );
};

export default BaseFlexBox;
