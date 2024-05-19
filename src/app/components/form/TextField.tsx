"use client";
import { Input, InputGroup, Textarea } from "@chakra-ui/react";
import FieldWrapper, { FieldWrapperProps } from "./FieldWrapper";

type TextFieldProps<T> = FieldWrapperProps & {
  type?: string;
  textarea?: boolean;
  placeholder?: string;
};

const TextField: React.FC<TextFieldProps<unknown>> = ({
  type,
  textarea = false,
  ...props
}) => {
  return (
    <FieldWrapper {...props}>
      <Input as={textarea ? Textarea : undefined} type={type} />
    </FieldWrapper>
  );
};

export default TextField;
