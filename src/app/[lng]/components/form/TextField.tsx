import { Input, InputGroup } from "@chakra-ui/react";
import FieldWrapper from "./FieldWrapper";

type TextFieldProps = {
  type?: string;
  placeholder?: string;
};

const TextField: React.FC<TextFieldProps> = ({ type, placeholder }) => {
  return (
    <FieldWrapper>
      <InputGroup>
        <Input type={type} placeholder={placeholder} />
      </InputGroup>
    </FieldWrapper>
  );
};

export default TextField;
