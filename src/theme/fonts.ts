import { Red_Hat_Display } from "next/font/google";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });

export const fonts = {
  body: redHatDisplay.style.fontFamily,
  heading: redHatDisplay.style.fontFamily,
};
