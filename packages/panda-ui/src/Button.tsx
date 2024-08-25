import { css } from "@rotate/panda-preset/styled-system/css";

export type ButtonProps = JSX.IntrinsicElements["button"];

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className={css({
        rounded: "3",
        bg: "gray.400",
        fontWeight: "bold",
        px: "4",
        _hover: {
          bg: "gray.500",
        },
      })}
      {...props}
    >
      {children}
    </button>
  );
};
