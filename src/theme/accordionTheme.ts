import { accordionAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
  container: { border: 0, borderBottom: "1px solid #E7E7E7" },
  button: { paddingX: 0 },
  panel: {
    borderTop: "1px dashed #E7E7E7",
    padding: 0,
  },
});

export const accordionTheme = defineMultiStyleConfig({ baseStyle });
