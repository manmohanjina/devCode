
"use client";
import Image from "next/image";
import React, { useState } from "react";
import "styles/navbar_mobile.css";
import "styles/navbar.css";
import {
  Button,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "utils/custom";
import homeBurger from "../assets/illustration/homeBurger.png";
import devLogo from "../assets/navbar/light/home.png";
import devlogoDark from "../assets/navbar/dark/home.png";
import Cross from "../assets/navbar/dark/cross.png";
import Light from "../assets/navbar/light/light.png";
import darkLight from "../assets/navbar/dark/dark.png";
import aboutUs from "../assets/navbar/light/aboutUs.png";
import aboutUsDark from "../assets/navbar/dark/aboutUs.png";
import blogs from "../assets/navbar/light/blogs.png";
import blogsDark from "../assets/navbar/dark/blogs.png";
import contactUs from "../assets/navbar/light/contactUs.png";
import contactUsDark from "../assets/navbar/dark/contactUs.png";
import service from "../assets/navbar/light/service.png";
import serviceDark from "../assets/navbar/dark/service.png";
import solution from "../assets/navbar/light/solutions.png";
import solutionDark from "../assets/navbar/dark/solutions.png";

import arrowUp from "../assets/navbar/dark/arrowUp.png";
import arrowDown from "../assets/navbar/dark/arrowDown.png";
import { useGlobalContext } from "@/app/components/common/store";
import Link from "next/link";

const Navbar_mobile = () => {
  const {
    theme,
    setTheme,
    navbarState,
    setNavbarState,
    showSidebar,
    setShowSidebar,
  } = useGlobalContext();

  const [toggle, setToogle] = useState(false);
  const [services, openServices] = useState(false);
  const [solutions, openSolution] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [marginTop, setMarginTop] = React.useState("0px");
  const [industry,setIndustry]=useState('')
  const handleSignup = () => {
    console.log("hello");
  };

  const handleToggle = () => {
    setToogle(true);
  };

  const handleService = () => {
    openServices(!services);
  };
  const handleSolution = () => {
    openSolution(!solutions);
  };

  const handleOpen = () => {
    setOpen(true);
    setMarginTop("180px") 
  };

  const handleClose = () => {
    setOpen(false);
    setMarginTop("0px");
  };

  const handelChange=(e)=>{
    setIndustry(e.target.value)
  }

  return (
    <div>
      <div className="Navbar-res-container">
        <div className="Navbar-res-container-child1">
          <Button
            onClick={handleSignup}
            className="Navbar-res-container-child1-btn"
            style={{
              color: theme ? "#2A2A2A" : "#fff",
              border: theme ? "1px solid #090a0b" : "1px solid #fff",
            }}
          >
            Sign Up
          </Button>
        </div>
        <div className="Navbar-res-container-child1">
          <Image
            className="Navbar-res-container-child1-devimg"
            src={theme ? devlogoDark : devLogo}
            alt={"devLogo"}
          />
        </div>
        <div className="Navbar-res-container-child1" onClick={handleToggle}>
          <Image
            className="Navbar-res-container-child1-homeimg"
            src={homeBurger}
            alt={"home-burger"}
          />
        </div>
      </div>

      <div>
        {toggle && (
          <div className="navbar-res-show">
            <div className="navbar-res-show-child1">
              <Image
                src={theme ? darkLight : Light}
                onClick={() => setTheme(!theme)}
              />
              <Image onClick={() => setToogle(false)} src={Cross} />
            </div>
            <div
              className="navbar-child2-container"
              style={{ background: theme ? "#24292F" : "#fff" }}
            >
              <div className="navbar-res-show-child2">
                <div className="navbar-res-show-child2-subchild">
                  <Image src={theme ? devLogo : devlogoDark} alt={"home"} />
                  <h2
                    className="navbar-res-show-child2-subchild-text"
                    style={{ color: theme ? "#fff" : "#2A2A2A" }}
                  >
                    Home
                  </h2>
                </div>
                <div className="navbar-res-show-child2-subchild">
                  <Image src={theme ? service : serviceDark} alt={"service"} />
                  <h2
                    className="navbar-res-show-child2-subchild-text drowUpDown"
                    style={{ color: theme ? "#fff" : "#2A2A2A" }}
                    onClick={handleService}
                  >
                    Services <Image src={services ? arrowUp : arrowDown} />
                  </h2>
                </div>
                {services ? (
                  <div
                    className="services_dropData"
                    style={{ color: theme ? "#fff" : "#2A2A2A" }}
                    onClick={() => setToogle(false)}
                  >
                    <Link href="/pages/webdevelopment">
                      <h2 className="services_dropData-text">
                        Web Development
                      </h2>
                    </Link>
                    <Link href="/pages/mobiledevelopment">
                      <h2 className="services_dropData-text">
                        Mobile Development
                      </h2>
                    </Link>
                    <Link href="/pages/uiux">
                      {" "}
                      <h2 className="services_dropData-text">UI/UX Services</h2>
                    </Link>
                    <Link href="/pages/cms">
                      <h2 className="services_dropData-text">CMS Services</h2>
                    </Link>
                    <Link href="/pages/pms">
                      {" "}
                      <h2 className="services_dropData-text">
                        Managed Services
                      </h2>
                    </Link>
                    <Link href="pages/enterprisessolution">
                      {" "}
                      <h2 className="services_dropData-text">
                        Enterprise Solutions
                      </h2>
                    </Link>
                  </div>
                ) : (
                  ""
                )}

                <div className="navbar-res-show-child2-subchild">
                  <Image
                    src={theme ? solution : solutionDark}
                    alt={"solution"}
                  />
                  <h2
                    className="navbar-res-show-child2-subchild-text drowUpDown"
                    style={{ color: theme ? "#fff" : "#2A2A2A" }}
                    onClick={handleSolution}
                  >
                    Solutions <Image src={solutions ? arrowUp : arrowDown} />
                  </h2>
                </div>
                <div className="navbar-res-show-child2-subchild ">
                  <Image src={theme ? blogs : blogsDark} alt={"blog"} />
                  <h2
                    className="navbar-res-show-child2-subchild-text"
                    style={{ color: theme ? "#fff" : "#2A2A2A" }}
                  >
                    Blog
                  </h2>
                </div>
                <div className="navbar-res-show-child2-subchild">
                  <Image
                    src={theme ? contactUs : contactUsDark}
                    alt={"contactUs"}
                  />
                  <h2
                    className="navbar-res-show-child2-subchild-text"
                    style={{ color: theme ? "#fff" : "#2A2A2A" }}
                  >
                    Contact
                  </h2>
                </div>
                <div className="navbar-res-show-child2-subchild">
                  <Image src={theme ? aboutUs : aboutUsDark} alt={"aboutUs"} />
                  <h2
                    className="navbar-res-show-child2-subchild-text"
                    style={{ color: theme ? "#fff" : "#2A2A2A" }}
                  >
                    About us
                  </h2>
                </div>
              </div>
              <div className="navbar-res-show-child3">
              <FormControl  sx={{width:'90%',borderRadius:'6px'}} style={{border: theme ? "1px solid #fff" : "1px solid #090a0b"}}>
          

              {industry === null && !open ? (
                <InputLabel id="input_lable_formControl">
                Select Industry
              </InputLabel>
              ) : (
                ""
              )} 
              <Select
                id="formControl-select_tag"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                onChange={handelChange}
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                

                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #166678",
                  },
                }}
              >
                <MenuItem
                  value="banking"
                  className="menuItem_select_tag"
                  onClick={handleClose}
                >
                  English
                </MenuItem>
                <MenuItem
                  value="finance"
                  className="menuItem_select_tag"
                  onClick={handleClose}
                >
                Français
                </MenuItem>
                <MenuItem
                  value="manufacturing"
                  className="menuItem_select_tag"
                  onClick={handleClose}
                >
                 中文
                </MenuItem>

                <MenuItem
                  value="construction"
                  className="menuItem_select_tag"
                  onClick={handleClose}
                >
                       العربية

                </MenuItem>
               
              </Select>
            </FormControl>
                <Button
                  className="navbar-res-show-child3-btn"
                  style={{
                    color: theme ? "#2A2A2A" : "#fff",
                    border: theme ? "1px solid #fff" : "1px solid #090a0b",
                    backgroundColor: theme ? "#fff" : "#24292F",
                    marginTop: marginTop 
                  }}
                >
                  Sign in
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar_mobile;
