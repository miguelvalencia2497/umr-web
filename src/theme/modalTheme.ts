import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  overlay: {
    bg: "rgba(253, 253, 253, 0.50);",
    backdropFilter: "blur(2px)",
  },
  dialog: {
    borderRadius: "8px",
    bg: `white.400`,
    boxShadow: "0px 1px 8px 0px rgba(0, 0, 0, 0.24);",
  },
});

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
});
