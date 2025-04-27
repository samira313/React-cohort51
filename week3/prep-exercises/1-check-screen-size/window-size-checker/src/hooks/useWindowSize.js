import { useState, useEffect, useDebugValue } from "react";

// Custom hook to track window width and height
function useWindowSize(label = "Window Size") {
  // Initialize state with current width and height
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Function to update state on window resize
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Show current size info in React DevTools
  useDebugValue(`${label}: ${size.width}px x ${size.height}px`);

  // Return the size so it can be used by components
  return size;
}

export default useWindowSize;
