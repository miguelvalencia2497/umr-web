import { extendTheme } from "@chakra-ui/react";
import { fonts } from "./fonts";
import { colors } from "./colors";

export const theme = extendTheme({
  colors,
  fonts,
  components: {
    Input: {
      baseStyle: {
        field: {
          color: "primary.700",
          opacity: "0.6",
          border: "1px solid white.600",
          borderRadius: "8px",
          _placeholder: { color: "primary.700" },
        },
      },
    },
    Button: {
      baseStyle: {
        borderRadius: "8px",
      },
      variants: {
        solid: {
          backgroundColor: "primary.700",
          color: "white.300",
          _hover: {
            backgroundColor: "primary.700",
          },
        },
        outline: {
          backgroundColor: "rgba(253, 253, 253, 0.10);",
          border: "1px solid rgba(0, 59, 70, 0.50);",
          color: "primary.700",
        },
      },
    },
    Link: {
      baseStyle: {
        color: "primary.700",
      },
    },
    Checkbox: {
      baseStyle: {
        label: {
          color: "primary.700",
        },
        icon: {
          color: "white.300",
          backgroundColor: "primary.700",
          borderColor: "primary.700",
        },
        control: {
          border: "1px",
          borderColor: "primary.700",
        },
      },
      variants: {
        circular: {
          control: {
            borderRadius: "6px",
          },
        },
      },
    },
  },
});
