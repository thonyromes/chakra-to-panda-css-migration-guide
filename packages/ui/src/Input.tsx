import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

export type InputProps = ChakraInputProps;

export const Input = (props: InputProps) => {
  return <ChakraInput {...props} />;
};
