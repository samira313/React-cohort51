import useWindowSize from "../hooks/useWindowSize";

function ScreenInfo() {
  // Using the custom hook with label
  const { width, height } = useWindowSize("Screen");

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Screen Size</h2>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}

export default ScreenInfo;