import { useState, useEffect } from "react";

const useIsMobileSmall = (breakpoint = 400) => {
  const [isMobileSmall, setIsMobileSmall] = useState(
    window.innerWidth <= breakpoint
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileSmall(window.innerWidth <= breakpoint);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isMobileSmall;
};

export default useIsMobileSmall;
