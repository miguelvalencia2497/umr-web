import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const roundPrimary = defineStyle({
  border: "0", // change the appearance of the border
  borderRadius: "100px",
  color: "white.300",
  background: "primary.600",
  px: "12px",
});

const roundWarning = defineStyle({
  border: "0", // change the appearance of the border
  borderRadius: "100px",
  color: "white.300",
  background: "warning.200",
  px: "12px",
});

const roundWarningOutline = defineStyle({
  border: "1px solid", // change the appearance of the border
  borderColor: "warning.200",
  borderRadius: "100px",
  color: "warning.200",
  px: "12px",
});

const roundOutline = defineStyle({
  border: "0.6px solid #36575E", // change the appearance of the border
  borderRadius: "100px",
  color: "#36575E",
  px: "12px",
});

const sm = defineStyle({
  fontWeight: "normal",
  fontSize: "10px",
});

const xs = defineStyle({
  fontWeight: "normal",
  fontSize: "8px",
});

export const badgeTheme = defineStyleConfig({
  defaultProps: {
    size: "sm",
    variant: "roundOutline",
  },
  sizes: { sm, xs },
  variants: { roundOutline, roundPrimary, roundWarning, roundWarningOutline },
});
