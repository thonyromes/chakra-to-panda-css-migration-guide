"use client";

import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react";
import { useId } from "react";

export type InputProps = ChakraInputProps & {
  helpText?: string;
  errorMessage?: string;
  label?: string;
};

export const Input = ({
  errorMessage,
  helpText,
  label,
  ...props
}: InputProps) => {
  const formId = useId();

  return (
    <FormControl>
      {label ? <FormLabel htmlFor={formId}>{label}</FormLabel> : null}

      <ChakraInput id={formId} {...props} />

      {helpText ? <FormHelperText>{helpText}</FormHelperText> : null}

      {errorMessage ? (
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      ) : null}
    </FormControl>
  );
};
