import { FormLabel, extendTheme } from "@chakra-ui/react";
import { fonts } from "./fonts";
import { colors } from "./colors";
import { modalTheme } from "./modalTheme";

export const theme = extendTheme({
  colors,
  fonts,
  components: {
    Input: {
      baseStyle: {
        field: {
          color: "primary.700",
          opacity: "0.6",
          border: "1px solid #E7E7E7",
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
            _disabled: {
              backgroundColor: "primary.700",
            },
          },
          _focus: {
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
    FormLabel: {
      baseStyle: {
        color: "primary.500",
        fontSize: "12px",
        fontWeight: "400",
        mb: "4px",
      },
    },
    Modal: modalTheme,
  },
});
