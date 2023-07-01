"use client";

import React, { useState } from "react";
import {
  ourProcessDataBlack,
  ourProcessDataWhite,
} from "../../pages/cms/cmsdata";

import { Button } from "@/utils/custom";
import Image from "next/image";

import { useGlobalContext } from "./store";
export default function Meet() {
  const { showSidebar, setShowSidebar, theme, setTheme } = useGlobalContext();
  const data = theme ? ourProcessDataWhite : ourProcessDataBlack;

  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(1);
  const [third, setThird] = useState(2);
  const [prevd, setPrev] = useState(false);
  const [nextd, setNxt] = useState(false);
  const [active, isActive] = useState(true);

  const next = () => {
    if (third < 4) {
      setThird(third + 1);
      setSecond(third);
      setFirst(third - 1);
      setPrev(false);
      setNxt(false);
    } else if (third == 4) {
      setNxt(true);
      isActive(false);
      setPrev(false);
    }
  };

  const previous = () => {
    if (first > 0) {
      setFirst(first - 1);
      setSecond(first);
      setThird(first + 1);
      setPrev(false);
      setNxt(false);
    } else if (first == 0) {
      setPrev(true);
      isActive(false);
      setNxt(false);
    }
  };
  const centerData = () => {
    setSecond(second);
    setPrev(false);
    setNxt(false);
    isActive(true);
  };

  const lightTheme = {
    backgroundColor: "#F6F6F6",
    color: "#2A2A2A",
  };
  const darkTheme = {
    backgroundColor: "#090a0b",
    color: "#FFFFFF",
  };

  return (
    <div >
      <div >
        <div
          className="cms-container-box5-boxbtn"
          style={{ justifyContent: "space-evenly" }}
        >
          <Button
            sx={{
              borderBottom: prevd ? "2px solid rgba(232, 131, 171, 1)" : "",
              textTransform: "none",
              color: "#fff",
            }}
            style={{color:theme?'#090A0B':'white'}}
            onClick={previous}
          >
            {data[first].btnName}
          </Button>
          <Button
            sx={{
              borderBottom: active ? "2px solid rgba(232, 131, 171, 1)" : "",
              textTransform: "none",
              color: "#fff",
            }}
            style={{color:theme?'#090A0B':'white'}}
            onClick={centerData}
          >
            {data[second].btnName}
          </Button>
          <Button
            sx={{
              borderBottom: nextd ? "2px solid rgba(232, 131, 171, 1)" : "",
              textTransform: "none",
              color: "#fff",
            }}
            style={{color:theme?'#090A0B':'white'}}
            onClick={next}
          >
            {data[third]?.btnName}
          </Button>
        </div>
        <div className="cms-container-box5-card" style={{background:theme?'#090A0B':'#EEE'}} >
          <Image
            className="cms-container-box5-card-img"
            src={
              (prevd && data[0].img) ||
              (nextd && data[4].img) ||
              data[second].img
            }
            alt="logo-fault"
          />
          <p className="cms-container-box5-card-text"  style={{color:theme?'#FFF':'#2A2A2A'}}  >
            {" "}
            {(prevd && data[0].content) ||
              (nextd && data[4].content) ||
              data[second].content}
          </p>
        </div>
      </div>
    </div>
  );
}
