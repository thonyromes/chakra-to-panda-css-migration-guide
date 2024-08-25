import { css } from "@rotate/panda-preset/styled-system/css";

export type ButtonProps = JSX.IntrinsicElements["button"];

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className={css({
        rounded: "sm",
        bg: "cyan.700",
        fontWeight: "semibold",
        px: "3",
      })}
      {...props}
    >
      {children}
    </button>
  );
};
