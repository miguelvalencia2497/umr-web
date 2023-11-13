import { memo } from "react";

//?? This component will be used for integration with Formik or react-forms
const FieldWrapper: React.FC<{
  children: any;
}> = ({ children }) => {
  return <>{children}</>;
};

export default memo(FieldWrapper) as typeof FieldWrapper;
