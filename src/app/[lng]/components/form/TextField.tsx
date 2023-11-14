"use client";
import { Input, InputGroup } from "@chakra-ui/react";
import FieldWrapper, { IFieldWrapperProps } from "./FieldWrapper";

type TextFieldProps<T> = IFieldWrapperProps & {
  type?: string;
  placeholder?: string;
};

const TextField: React.FC<TextFieldProps<T>> = ({
  type,
  placeholder,
  ...props
}) => {
  return (
    <FieldWrapper<string> {...props}>
      {(field, meta, form, fieldProps) => {
        return (
          <InputGroup>
            <Input
              type={type}
              placeholder={placeholder}
              disabled={form.isSubmitting || props.disabled}
              onChange={(e) => {
                let value = e?.target?.value;
                form.setFieldValue(fieldProps.name, value);
              }}
            />
          </InputGroup>
        );
      }}
    </FieldWrapper>
  );
};

export default TextField;
