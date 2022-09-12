import React, { useEffect, useState } from "react";
import Laptop from "./Component/Laptop/Laptop"
import Phone from "./Component/Phone/Phone";
import Tab from "./Component/Tab/Tab"

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => setSize([window.innerHeight, window.innerWidth]);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}

const App = () => {
  const [height, width] = useWindowSize();

  return (
    <div>
      <p>
        {width >= 1366 && width <= 1366 &&(
          <>
            <Laptop></Laptop>{" "}
          </>
        )}
        {width <= 950 && width >= 650 && (
          <>
            <Phone></Phone>{" "}
          </>
        )}
        {width <= 650 && (
          <>
            <Phone></Phone>{" "}
          </>
        )}
      </p>
    </div>
  );
};

export default App;
