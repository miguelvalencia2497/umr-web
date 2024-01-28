"use client";
import {
  BoxProps,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import FieldWrapper, { IFieldWrapperProps } from "./FieldWrapper";

type TextFieldProps<T> = IFieldWrapperProps & {
  type?: string;
  textarea?: boolean;
  inputLeft?: React.ReactElement;
  inputRight?: React.ReactElement;
  inputRightElementProps?: BoxProps;
  inputLeftElementProps?: BoxProps;
  placeholder?: string;
};

const TextField: React.FC<TextFieldProps<unknown>> = ({
  type,
  textarea = false,
  inputLeft = null,
  inputRight = null,
  inputRightElementProps = null,
  inputLeftElementProps = null,
  placeholder,
  ...props
}) => {
  return (
    <FieldWrapper<string> {...props}>
      {(field, meta, form, fieldProps) => {
        return (
          <InputGroup>
            {inputLeft && (
              <InputLeftElement {...inputLeftElementProps}>
                {inputLeft}
              </InputLeftElement>
            )}
            <Input
              as={textarea ? Textarea : undefined}
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
