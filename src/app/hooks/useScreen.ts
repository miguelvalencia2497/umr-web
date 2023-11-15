"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import useOrientation from "./useOrientation";

// sm: "480px",
// md: "768px",
// lg: "992px",
// xl: "1280px",
// "2xl": "1536px",

interface IScreenState {
  isSmallMobile: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isLargeTablet: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
  isLandscape: boolean;
  ready: boolean;
  isTouchDevice: boolean;
}

export default function useScreen(): IScreenState {
  const [ready, setReady] = useState(false);

  // fix for ssr, while not rendered yet return as desktop
  useEffect(() => setReady(true), []);

  const [isSmallMobile] = useMediaQuery("(max-width: 320px)");
  const [isTablet] = useMediaQuery("(min-width: 480px)");
  const [isLargeTablet] = useMediaQuery("(min-width: 768px)");
  const [isDesktop] = useMediaQuery("(min-width: 992px)");
  const [isLargeDesktop] = useMediaQuery("(min-width: 1280px)");
  const { isLandscape } = useOrientation();
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useLayoutEffect(() => {
    const updateTouchDevice = () => {
      setIsTouchDevice(
        typeof window !== "undefined" &&
          typeof navigator !== "undefined" &&
          ("ontouchstart" in window ||
            navigator.maxTouchPoints > 0 ||
            // @ts-ignore
            navigator.msMaxTouchPoints > 0),
      );
    };

    window.addEventListener("resize", updateTouchDevice);
    updateTouchDevice();

    return () => window.removeEventListener("resize", updateTouchDevice);
  }, []);

  return {
    ready,
    isSmallMobile: ready && isSmallMobile,
    isMobile: ready && !isTablet && !isDesktop,
    isLargeTablet: ready && isLargeTablet && !isDesktop,
    isTablet: ready && isTablet && !isDesktop,
    isDesktop: !ready || isDesktop,
    isLargeDesktop: isLargeDesktop,
    isLandscape: ready && isLandscape && isTablet,
    isTouchDevice,
  };
}
