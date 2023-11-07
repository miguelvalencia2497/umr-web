import { extendTheme } from "@chakra-ui/react";
import { fonts } from "./fonts";
import { colors } from "./colors";

export const theme = extendTheme({
  colors,
  fonts,
  components: {
    /** Customize Chakra UI Components */
  },
});
