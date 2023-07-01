
"use client";

import { Button } from "../../../utils/custom.js";
import "./slider.css";
import { useState } from "react";
export default function SliderUix() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };
  console.log(isFlipped);

  const arrObj = [
    {
      id: 1,
      icon: "",
      heading: "this is me",
      desc: "this is me text from manmohan",
    },
    {
      id: 2,
      icon: "",
      heading: "this is the second div from me",
      desc: "hello today is ibrahim birthday",
    },
    {
      id: 3,
      icon: "",
      heading: "today i graduated",
      desc: "today i graduated from high school",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    isFlipped && handleFlip();
    setCurrentIndex((currentIndex + 1) % arrObj.length);
  };

  const previous = () => {
    isFlipped && handleFlip();
    setCurrentIndex((currentIndex - 1 + arrObj.length) % arrObj.length);
  };

  return (
    <div>
      <div className="main-container-slider-box">
        <div className="main-container-sub-div">
          <div className="container-sub-div-child">
            <div>{arrObj[currentIndex % arrObj.length].heading}</div>
            <div>{arrObj[currentIndex % arrObj.length]?.icon}</div>
          </div>

<div className="container-sub-div-child" >
<div className="main-container"  style={{ border: "1px solid red" }}>
 <div  onClick={handleFlip} className="the-card" id={isFlipped&&"card"} >
  <div className="front-section">{arrObj[(currentIndex + 1) % arrObj.length].heading}</div>

   <div className="back-section">{arrObj[(currentIndex + 1) % arrObj.length].desc}</div>
 </div>
 </div>
</div>

          <div className="container-sub-div-child">
            <div>{arrObj[(currentIndex + 2) % arrObj.length].heading}</div>
            <div>{arrObj[(currentIndex + 2) % arrObj.length]?.icon}</div>
          </div>
        </div>
      </div>
      <div className="btn-div">
        <Button onClick={next}>prev</Button>
        <Button onClick={previous}>next</Button>
      </div>
    </div>
  );
}

// 