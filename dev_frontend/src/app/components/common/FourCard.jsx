import { useEffect, useRef, useState } from "react";

export default function FourCard({ gridFourCard = [] }) {
  const [gradientStyles, setGradientStyles] = useState([]);

  const divRefs = useRef([]);

  const handleMouseMove = (e, index) => {
    const { left, top, width, height } =
      divRefs.current[index].getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const centerX = width / 2;
    const centerY = height / 2;
    const distanceX = Math.abs(x - centerX);
    const distanceY = Math.abs(y - centerY);
    const maxDistance = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
    const maxBlurRadius = 100;
    const maxGradientSize = 300;

    const distanceRatio = (distanceX + distanceY) / (width + height);
    const blurRadius = Math.floor(distanceRatio * maxBlurRadius);
    const gradientSize = Math.floor(distanceRatio * maxGradientSize);

    const gradient = `radial-gradient(circle at ${x}px ${y}px, green ${gradientSize}px, #000000 ${blurRadius}px)`;

    setGradientStyles((prevStyles) => {
      const updatedStyles = [...prevStyles];
      updatedStyles[index] = {
        background: gradient,
        filter: "blur(100px)",
      };
      return updatedStyles;
    });
  };

  const handleMouseLeave = (index) => {
    const updatedStyles = [...gradientStyles];
    updatedStyles[index] = {
      background: "none",
      filter: "none",
      background: "none",
    };
    setGradientStyles([]);
  };

  return (
    <div className="_grid-four-card">
      {gridFourCard.map((elm, i) => {
        return (
          <div
            className={"_grid-four-card-child"}
           
          >
            <div 
             ref={(ref) => (divRefs.current[i] = ref)}
             onMouseMove={(e) => handleMouseMove(e, i)}
             onMouseLeave={() => handleMouseLeave(i)}
             style={gradientStyles[i]} className="grid_hover"> 
          <h2 className="_grid-four-card-child-subchild1">{elm.heading}</h2>
            <p className="_grid-four-card-child-subchild2">{elm.content}</p>
             
             </div>
            </div>
           
        
        );
      })}
    </div>
  );
}
