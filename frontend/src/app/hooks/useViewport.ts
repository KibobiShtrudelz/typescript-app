import { useState, useEffect } from "react";

type Device = "mobile" | "tablet" | "desktop";

type Size = {
  width?: number | undefined;
  device?: Device;
};

const getDevice = (width: number) => {
  if (width < 768) return "mobile";
  else if (width < 992) return "tablet";
  else return "desktop";
};

function useViewport() {
  const [viewport, setViewport] = useState<Size>({
    width: window.innerWidth,
    device: getDevice(window.innerWidth),
  });

  useEffect(() => {
    function handleResize() {
      setViewport({
        width: window.innerWidth,
        device: getDevice(window.innerWidth),
      });
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { ...viewport };
}

export default useViewport;
