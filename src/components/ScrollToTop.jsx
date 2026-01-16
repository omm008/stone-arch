import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Scrolls the window to the top of the page
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use 'instant' for no animation, like a normal page load
    });
  }, [pathname]); // This effect runs every time the pathname changes

  return null; // This component doesn't render anything, it just handles the side effect
};

export default ScrollToTop;
