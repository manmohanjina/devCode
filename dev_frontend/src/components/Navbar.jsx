"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import "styles/navbar.css";
import { Button, Box } from "../utils/custom";
import DevriserLogo from "../assets/navbar/light/home.png";
import Service from "../assets/navbar/light/service.png";
import Light from "../assets/navbar/light/light.png";
import Contact from "../assets/navbar/light/contactUs.png";
import Blog from "../assets/navbar/light/blogs.png";
import Solution from "../assets/navbar/light/solutions.png";
import About from "../assets/navbar/light/aboutUs.png";

// Dark Icon

import services_light from "../assets/navbar/dark/service.png";
import light_icon from "../assets/navbar/dark/dark.png";
import contact_light from "../assets/navbar/dark/contactUs.png";
import blog_light from "../assets/navbar/dark/blogs.png";
import sol_light from "../assets/navbar/dark/solutions.png";
import about_light from "../assets/navbar/dark/aboutUs.png";
import devriser_logo_light from "../assets/navbar/dark/devriserLogoDark.png";

import { Typography } from "@mui/material";
import usa from "../assets/navbar/FlagImg/usaflagimg.png";
import china from "../assets/navbar/FlagImg/chinaflagimg.png";
import france from "../assets/navbar/FlagImg/franceflagimg.png";
import arabic from "../assets/navbar/FlagImg/arabic.png";

import { useRouter } from "next/navigation";

import { useGlobalContext } from "app/components/common/store";
import Navbar_mobile from "./Navbar_mobile";

const Navbar = () => {
  const [sideBarContent, setSideBarContent] = useState([]);
  const [hover, setBgHover] = useState("");
  const [languageTag, setLanguageTag] = useState(false);
  const [navigatePage, setNavigatePage] = useState("");
  const router = useRouter();
  const {
    theme,
    setTheme,
    navbarState,
    setNavbarState,
    showSidebar,
    setShowSidebar,
  } = useGlobalContext();

  const navArr = [
    {
      id: 0,
      name: "",
      icon: !theme ? DevriserLogo : devriser_logo_light,
      content: [],
    },
    {
      id: 1,
      name: "Services",
      icon: !theme ? Service : services_light,
      content: [
        {
          id: 9,
          routeName: "Web Devlopment",
          routePath: "/pages/webdevelopment",
        },
        {
          id: 10,
          routeName: "Mobile Devloment",
          routePath: "/pages/mobiledevelopment",
        },
        { id: 11, routeName: "UI/UX Services", routePath: "/pages/uiux" },
        { id: 12, routeName: "CMS Services", routePath: "/pages/cms" },

        { id: 13, routeName: "Managed Services", routePath: "/pages/" },
        {
          id: 14,
          routeName: "Enterprise Solution",
          routePath: "/pages/enterprisesolution",
        },
      ],
    },
    {
      id: 2,
      name: "Solutions",
      icon: !theme ? Solution : sol_light,
      content: [],
    },
    { id: 3, name: "Blog", icon: !theme ? Blog : blog_light, content: [] },
    {
      id: 4,
      name: "Contact",
      icon: !theme ? Contact : contact_light,
      content: [],
    },
    {
      id: 5,
      name: "About Us",
      icon: !theme ? About : about_light,
      content: [],
    },
  ];

  const handleNavbarClick = (elm) => {
    setLanguageTag(false);
    setBgHover(elm.id);
    if (elm.id !== 0) {
      setShowSidebar(true);
    }
    setSideBarContent(elm.content);
  };
  const languageFlagArr = [
    {
      id: 3,
      flagImg: usa,
      country: "English",
    },
    {
      id: 1,
      flagImg: france,
      country: "Français",
    },
    {
      id: 2,
      flagImg: china,
      country: "中文",
    },

    {
      id: 4,
      flagImg: arabic,
      country: "العربية",
    },
  ];
  const handelLanguageTag = () => {
    setLanguageTag(true);
  };

  const handelRoute = (path) => {
    router.push(path);
    setShowSidebar(false);
  };

  return (
    <>
      <div className="main-navbar-container _nav-1">
        <nav
          className="navbar"
          style={{ backgroundColor: theme ? "#D1CBC8" : "#2D2F31" }}
        >
          <div className="navbar-child1">
            {navArr.map((elm) => {
              return (
                <div
                  className="navbar-child1-subchild"
                  onClick={() => handleNavbarClick(elm)}
                  id={elm.class}
                  key={elm.id}
                  style={{
                    background:
                      elm.id === hover && hover !== 0
                        ? "rgba(255, 255, 255, 0.2)"
                        : "",
                  }}
                >
                  <Image
                    className="navbar-child1-subchild-img"
                    src={elm.icon}
                    alt="icon"
                  />
                  <p
                    className="navbar-child1-subchild-text"
                    style={{ color: theme ? "#2A2A2A" : "#FFFFFF" }}
                  >
                    {elm.name}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="navbar-child2">
            <div onClick={() => setTheme((prev) => !prev)}>
              <Image
                className="navbar-child1-subchild-img  "
                src={!theme ? Light : light_icon}
                alt="themeToggle"
              />
            </div>
            <div onClick={() => setShowSidebar(true)}>
              <Button
                className="navbar-child2-subchild2"
                onClick={handelLanguageTag}
                style={{ color: theme ? "#2A2A2A" : "#FFFFFF" }}
              >
                Eng
              </Button>
            </div>
          </div>
        </nav>
        <nav className={showSidebar ? "navbar2-show" : "navbar2-hide"}>
          {!languageTag ? (
            <div className="mainContainer-navbar2-show">
              {sideBarContent.map((elm, i) => {
                return (
                  <div
                    onClick={() => handelRoute(elm.routePath)}
                    key={i}
                    className="navbar2-show-content"
                  >
                    <Typography
                      style={{ color: theme ? "#2A2A2A" : "#FFFFFF" }}
                    >
                      {elm.routeName}
                    </Typography>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="mainContainer-navbar2-show-language">
              {languageFlagArr.map((elm) => {
                return (
                  <div key={elm.id} className="navbar2-show-content-language">
                    <Image src={elm.flagImg} alt="flag_img" />
                    <Typography
                      style={{ color: theme ? "#2A2A2A" : "#FFFFFF" }}
                    >
                      {elm.country}
                    </Typography>
                  </div>
                );
              })}
            </div>
          )}
        </nav>
      </div>
      <div className="_nav-2">
        <Navbar_mobile />
      </div>
    </>
  );
};

export default Navbar;
