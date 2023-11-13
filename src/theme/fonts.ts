import { Montserrat_Alternates, Red_Hat_Display } from "next/font/google";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });
const montserratAlternates = Montserrat_Alternates({
  weight: "600",
  subsets: ["latin"],
});

export const fonts = {
  body: redHatDisplay.style.fontFamily,
  heading: redHatDisplay.style.fontFamily,
  montserratAlternates: montserratAlternates.style.fontFamily,
};
