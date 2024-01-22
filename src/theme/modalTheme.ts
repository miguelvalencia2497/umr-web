import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  dialog: {
    borderRadius: "8px",
    bg: `white.400`,
    boxShadow: "0px 1px 8px 0px rgba(0, 0, 0, 0.24);",
  },
});

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
});
