import { FastField, Field, FieldConfig, FormikProps } from "formik";
import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { memo } from "react";
import { Box, Flex, Text, TextProps } from "@chakra-ui/react";

interface IMeta {
  touched: boolean;
  error: string | string[] | Record<string, string>;
}

export interface IFieldWrapperProps {
  name: string;
  value?: string | number | readonly string[] | undefined;
  disabled?: boolean;
  label?: string;
  labelProps?: TextProps;
  tooltipText?: string | JSX.Element;
  tooltipTextProps?: TextProps;
  placeholder?: string;
  // https://jisho.org/search/%E3%81%AF%E3%82%84%E3%81%84
  hayai?: boolean;
  wrapperProps?: Omit<FormControlProps, "as">;
  onChange?: (value?: string | number | readonly string[] | undefined) => void;
  onBlur?: (e: Event) => void;
}

type FunctionChild<ValueType, OriginalProps, FormValues> = (
  field: Omit<FieldConfig<ValueType>, "as">,
  meta: IMeta,
  form: FormikProps<FormValues>,
  props: IFieldWrapperProps & OriginalProps,
) => React.ReactNode;

function FieldWrapper<
  ValueType,
  OriginalProps = Record<string, unknown>,
  FormValues = unknown,
>({
  children,
  ...props
}: IFieldWrapperProps &
  OriginalProps & {
    children: FunctionChild<
      ValueType,
      Omit<OriginalProps, "children">,
      FormValues
    >;
  }): JSX.Element {
  const { label, hayai = false, wrapperProps } = props;

  const Wrapper = hayai ? FastField : Field;

  //@ts-ignore
  const getErrorArrFromErrorObj = (errorObj) => {
    return Object.values(errorObj).reduce(
      (errorArr: Array<unknown>, errorVal) => {
        if (
          errorVal &&
          !Array.isArray(errorVal) &&
          typeof errorVal === "object"
        ) {
          return [...errorArr, getErrorArrFromErrorObj(errorVal)];
        }

        return [...errorArr, errorVal];
      },
      [],
    );
  };

  const wrapperChild = ({
    field,
    form,
    meta,
  }: {
    field: FieldConfig<ValueType>;
    form: FormikProps<FormValues>;
    meta: IMeta;
  }) => {
    const hasError = meta.error;
    return (
      <FormControl isInvalid={!!hasError} {...wrapperProps}>
        {label && renderLabel()}
        {children(field, meta, form, props)}
        {hasError && (
          <FormErrorMessage mt="1" fontSize="xs">
            {typeof meta.error === "string" && meta.error}
            {Array.isArray(meta.error) && meta.error.join(", ")}
            {typeof meta.error === "object" &&
              meta.error !== null &&
              !Array.isArray(meta.error) &&
              getErrorArrFromErrorObj(meta.error).join(", ")}
          </FormErrorMessage>
        )}
      </FormControl>
    );
  };

  return <Wrapper name={props.name}>{wrapperChild}</Wrapper>;

  function renderLabel() {
    return (
      <FormLabel>
        <Flex>{label}</Flex>
      </FormLabel>
    );
  }
}

export default memo(FieldWrapper) as typeof FieldWrapper;
