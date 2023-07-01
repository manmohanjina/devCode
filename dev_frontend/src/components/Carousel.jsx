'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import "../styles/Carousel.css"
import StarImg from "../assets/illustration/star.png"
const Carousel = ({ photo,content,name,desc }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [currentDescIndex, setCurrentDescIndex] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % photo.length);
      setCurrentContentIndex((prevIndex) => (prevIndex + 1) % content.length);
      setCurrentNameIndex((prevIndex) => (prevIndex + 1) % name.length);
      setCurrentDescIndex((prevIndex) => (prevIndex + 1) % desc.length);

    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [photo,name,content,desc]);

  return (
  <div className='Carousal-box' >
    <h2  className='Carousal-box-content'>{content[currentContentIndex]}</h2>
    <Image className='Carousal-box-img' src={photo[currentImageIndex]} alt="Carousel Image" />;
    <p className='Carousal-box-name'>{name[currentNameIndex]}</p>
    <p className='Carousal-box-desc'>{desc[currentDescIndex]}</p>
        <div style={{marginTop:'5px'}}>
          <Image src={ StarImg} />
          <Image src={ StarImg} />
          <Image src={ StarImg} />
          <Image src={ StarImg} />
          <Image  src={ StarImg} />

        </div>
    </div>
  )
};

export default Carousel;