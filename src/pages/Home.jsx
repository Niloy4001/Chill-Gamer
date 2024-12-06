import React, { useEffect, useState } from "react";
import Slider from "../compnents/Slider";
import HighestRated from "../compnents/HighestRated";
import MostPopular from "../compnents/MostPopular";
import NewsLetter from "../compnents/NewsLetter";
import { MdOutlineLightMode } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

const Home = () => {
  const [mode, setMode] = useState(true);

  useEffect(() => {
    if (mode) {
      document.getElementById("html").setAttribute("data-theme", "light");
    }
    if (!mode) {
      document.getElementById("html").setAttribute("data-theme", "dark");
    }
  }, [mode]);

  return (
    <div>
      <Slider></Slider>
      <div
        onClick={() => setMode(!mode)}
        className="fixed top-[15%] z-10 right-0 shadow-2xl text-white bg-gradient-to-b from-[#f948b2] to-[#8758f1] py-1 btn btn-sm pr-2 flex justify-end rounded-l-full"
      >
        {mode ? <MdOutlineLightMode /> : <FaRegMoon />}
      </div>
      <HighestRated></HighestRated>
      <MostPopular></MostPopular>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
