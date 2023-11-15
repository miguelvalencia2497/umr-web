import { useEffect, useState } from "react";
import debouce from "lodash/debounce";

export default function useOrientation(): {
  isPortrait: boolean;
  isLandscape: boolean;
} {
  const [state, setState] = useState({
    isPortrait: true,
    isLandscape: false,
  });

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = debouce(() => {
    const browserNavigator: Navigator | undefined = navigator;
    const userAgent = browserNavigator?.userAgent.toLocaleLowerCase();
    const isMobileDevice =
      userAgent.includes("mobile") && !userAgent.includes("ipad");

    const isLandscape =
      window.innerWidth > window.innerHeight && isMobileDevice;

    setState({
      isPortrait: !isLandscape,
      isLandscape,
    });
  }, 100);

  return state;
}
