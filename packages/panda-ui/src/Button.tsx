import { css } from "@rotate/panda-preset/styled-system/css";

export type ButtonProps = JSX.IntrinsicElements["button"];

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className={css({
        rounded: "md",
        color: "gray.800",
        bg: "gray.100",
        fontWeight: "semibold",
        fontSize: "md",
        height: "10",
        px: "4",
        _hover: {
          bg: "gray.200",
        },
      })}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};
