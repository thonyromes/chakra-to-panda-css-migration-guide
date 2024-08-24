import { css } from "@styled-system/css";

export type ButtonProps = JSX.IntrinsicElements["button"];

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className={css({
        rounded: "lg",
        bg: "blackAlpha.700",
        fontWeight: "bold",
        px: "3",
      })}
      {...props}
    >
      {children}
    </button>
  );
};
