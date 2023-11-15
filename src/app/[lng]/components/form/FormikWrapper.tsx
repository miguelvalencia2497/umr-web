import { Form, Formik, FormikConfig, FormikProps } from "formik";
import debounce from "lodash/debounce";

type FormikWrapperProps<F, P> = Omit<FormikConfig<F>, "onSubmit"> &
  P & {
    enableReinitialize?: boolean;
    children?: (formikProps: FormikProps<F>) => React.ReactNode;
    render?: (formikProps: FormikProps<F>) => React.ReactNode;
    debounceOnSubmit?: boolean | number;
    onSubmit?: FormikConfig<F>["onSubmit"];
  };

export default function FormikWrapper<F, P = unknown>({
  enableReinitialize = true,
  children,
  render,
  debounceOnSubmit = true,
  onSubmit,
  ...props
}: FormikWrapperProps<F, P>): React.ReactElement {
  return (
    // @ts-ignore allow no onSubmit when formik is only used for validation
    <Formik<F>
      {...props}
      {...(onSubmit && {
        onSubmit: debounceOnSubmit
          ? debounce(
              onSubmit,
              typeof debounceOnSubmit === "number" ? debounceOnSubmit : 2000,
            )
          : onSubmit,
      })}
      enableReinitialize={enableReinitialize}
    >
      {(formikProps) => {
        return (
          <Form>
            {render ? render(formikProps) : children && children(formikProps)}
          </Form>
        );
      }}
    </Formik>
  );
}
