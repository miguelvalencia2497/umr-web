import React from "react";
import { useField, FieldAttributes } from "formik";
import {
  FormErrorMessage,
  FormControl,
  FormLabel,
  InputProps,
  CheckboxProps,
} from "@chakra-ui/react";

export interface FieldWrapperProps extends FieldAttributes<any> {
  id?: string;
  name: string;
  label?: string;
  children?: React.ReactElement<InputProps | CheckboxProps>;
}

const FieldWrapper: React.FC<FieldWrapperProps> = ({
  children = <></>,
  label,
  ...props
}) => {
  //@ts-ignore
  const [field, meta] = useField(props);

  return (
    <FormControl isInvalid={meta.touched && !!meta.error}>
      {label && <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>}
      {React.cloneElement(children, { ...field, ...props })}
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default FieldWrapper;
