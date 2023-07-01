"use client";
import { useGlobalContext } from "app/components/common/store.js";
import { Button, Box } from "../../../utils/custom.js";
import darkIllustration from "../../../assets/illustration/laptopdarkillustration.png";
import Avatar from "../../../assets/illustration/avatar.png";
import Webdevelopmentillustration from "../../../assets/illustration/Web development illustration 2.png";
import Weboffring from "../../../assets/illustration/OFFering ilustration.png";
import ArrowDevriser from "../../../assets/illustration/arrowDevriser.png";
import Image from "next/image.js";
import React, { useEffect, useRef, useState } from "react";
import "./webdevelopment.css";
import Carousel from "../../../components/Carousel";
import {
  faqContent,
  ourProcessData,
  ourProcessDataBlack,
  ourProcessDataWhite,
  sections,
} from "./webdevelopmentdata";
import Faq from "../../../components/Faq";
const WebDevelopment = () => {
  const [contentData, setContent] = useState(ourProcessDataBlack[0].content);
  const [contentImg, setContentImg] = useState(ourProcessDataBlack[0].img);
  const [btnColor, setBtnColour] = useState(0);
  const [ourProcessId, setOurProcessId] = useState(1);
  const [text, setText] = useState("");
  const { showSidebar, setShowSidebar, theme, setTheme } = useGlobalContext();
  const [data, setData] = useState([]);
  const containerRef = useRef(null);

  const handleClick = (item) => {
    const container = containerRef.current;
    const itemElement = container.querySelector(`[data-id="${item.id}"]`);

    if (itemElement) {
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const itemOffsetTop = itemElement.offsetTop;
      const itemHeight = itemElement.offsetHeight;

      if (itemOffsetTop + itemHeight > scrollTop + containerHeight) {
        container.scrollTop = itemOffsetTop + itemHeight - containerHeight;
      }
    }
  };
  const sectionStyles = {
    width: "60%",
    margin: "auto",
  };
  const headingStyles = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "white",
    marginTop: "50px",
    marginBottom: "30px",
  };
  const iconContainerStyles = {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "100%",
    margin: "auto",
    textAlign: "center",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#eaeaea",
    padding: "10px",
    borderRadius: "8px",
    backgroundColor: "#FFF",
    backdropFilter: "blur(22px)",
  };
  const iconStyles = {
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const tectnologyHeadingStyles = {
    color: "#FFF",
    textAlign: "center",
    fontSize: "36px",
    fontWeight: "600",
    lineHeight: "52px",
  };
  const content = [
    "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it",
    "I Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    "I hate the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
  ];

  const photo = [Avatar, Avatar, Avatar];
  const name = ["Kelly Williams", "Melly Williams", "Selly Williams"];
  const desc = [
    "Head of Design, Layers",
    "SubHead of Design, Layers",
    "Master of Design, Layers",
  ];
  const handleSixbtn = (ele, id) => {
    setBtnColour(ele.id);

    setContent(ele.content);
    setContentImg(ele.img);
  };
  const handleSetData = (data) => {
    setText(data);
  };
  const handleMouseMove = (index, event) => {
    const rect = event.target.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const gradientX = (mouseX / rect.width) * 100;
    const gradientY = (mouseY / rect.height) * 100;

    setGradientPositions((prevState) => {
      const updatedPositions = [...prevState];
      updatedPositions[index] = { x: gradientX, y: gradientY };
      return updatedPositions;
    });
  };

  const lightTheme = {
    backgroundColor: "#F6F6F6",
    color: "#2A2A2A",
  };
  const darkTheme = {
    backgroundColor: "#090a0b",
    color: "#FFFFFF",
  };
  const textItemStyle = {
    cursor: "pointer",
    background:
      "linear-gradient(.25turn, rgba(80, 22, 204, 1), rgba(247, 161, 208, 1))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  useEffect(() => {
    if (theme) {
      setData(ourProcessDataWhite);
    } else {
      setData(ourProcessDataBlack);
    }
  }, [theme, handleSixbtn]);
  return (
    <div className="container" onClick={() => setShowSidebar(false)}>
      <div className="main-container">
        <div className="_hero-section-container" id="hero-section-pattern-web">
          <div className="_hero-section-container-primary">
            <div className="_hero-section-container-primary-child1">
              <h2 className="_hero-section-container-primary-child1-text1">
                <span className="text-color-web">
                  Custom Website Development Services
                </span>
                {""}
                <span style={{ color: "white", marginLeft: "5px" }}>
                  That Transcend Boundaries
                </span>
              </h2>
              <p className="_hero-section-container-primary-child1-text2">
                {" "}
                Experience the power of tailored solutions with our custom
                website development services. Our team of expert developers is
                committed to crafting visually stunning, highly functional, and
                performance-optimized custom websites
              </p>
              <div>
                <Button
                  className="_hero-section-container-primary-btn"
                  style={{
                    borderRadius: "6px",
                    background:
                      "linear-gradient(145deg, #5016CC 0%, #F7A1D0 100%)",
                  }}
                >
                  Let's Begin
                </Button>
              </div>
            </div>
            <div className="_hero-section-container-primary-child2">
              <Image width={"100%"} src={Webdevelopmentillustration} />
            </div>
          </div>
        </div>
        {/*  flex  reverxse container here */}
        <div className="our-offering-container-web">
          <h2>Our Offrings</h2>
          <div
            style={{
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              id="our-offering-container-image-web"
              src={Weboffring}
              alt="webdevelopment types"
            />
            <div style={{ position: "absolute", color: "white" }}>
              <section className="our-offering-container-section1-text-web">
                <span onClick={() => handleSetData("Educational Platforms")}>
                  Educational Platforms
                </span>
                <span onClick={() => handleSetData("E-commerce Stores")}>
                  E-commerce Stores
                </span>
                <span onClick={() => handleSetData("Corporate Hub")}>
                  Corporate Hub
                </span>
                <span onClick={() => handleSetData("Portfolio Gallery")}>
                  Portfolio Gallery
                </span>
                <span onClick={() => handleSetData("Blogging Websites")}>
                  Blogging Websites
                </span>
              </section>
              <section className="our-offering-container-section2-text-web">
                <span onClick={() => handleSetData("News & media portal")}>
                  News & media portal
                </span>
                <span
                  onClick={() => handleSetData("Community & social networking")}
                >
                  Community & social networking
                </span>
                <span onClick={() => handleSetData("Booking and reservation")}>
                  Booking and reservation
                </span>
                <span onClick={() => handleSetData("Real estate Websites")}>
                  Real estate Websites
                </span>
                <span onClick={() => handleSetData("Non-profit forum")}>
                  Non-profit forum
                </span>
              </section>
              <section className="our-offering-container-section3-text-web">
                <span onClick={() => handleSetData("Static website")}>
                  Static website
                </span>
                <span onClick={() => handleSetData("Dynamic website")}>
                  Dynamic website
                </span>
              </section>
            </div>
          </div>
          <div id="our-offering-container-section4-web">
            <div
              style={{
                height: "100px",
                width: "200px",
                borderRadius: "9px",
                backgroundColor: "#2B2B2B",
                justifyContent: "space-between",
              }}
            ></div>
            <div
              style={{
                width: "70%",
                height: "auto",
                margin: "auto",
                display: "flex",
                alignItems: "center",
                color: "#2A2A2A",
              }}
            >
              <p>
                Static websites are ideal for content-driven platforms with
                infrequent updates, providing fast loading times, enhanced
                security, and cost-effective solutions, making them suitable for
                portfolios, informational sites, landing pages, and brochures
              </p>
            </div>
          </div>
        </div>
        <div
          className="_primary-long-card"
          id="ignite-online-presense-container-web"
        >
          <h2 className="_primary-long-card-text1">
            Ignite Your Online Presence With Custom Made Website 
          </h2>
          <p className="_primary-long-card-text2">
            Experience the power of custom website development with DevRiser.
            Our team specializes in crafting unique websites that reflect your
            brand, capture your vision, and achieve your business goals. We
            build websites from scratch and create a standout online presence
            for your business. Whether you need a simple static website or a
            feature-rich dynamic platform, our expertise has got you covered
          </p>
        </div>
        <div className="webdevlopment-container3">
          <div className="webdeelopment-container3-child1"></div>
        </div>

        {/* cart section start here */}

        <div className="online-presence-container-web">
          <div>
            <h2 className="online-presence-container1-heading-web">
              Experience The Impact Of Custom Made Websites
            </h2>
            <div className="online-presence-container1-heading2-web">
              <span>75%</span>
              <p>
                Internet Users Determine Business Reliability Solely By Website
                Design
              </p>
            </div>
          </div>
          <div className="online-presence-container2-web">
            <section className="online-presence-container2-section1-web">
              <h3 className="online-presence-container2-section1-subheading-web">
                Stand out from the crowd
              </h3>
              <p className="online-presence-container2-section1-subtext-web">
                Standing out from the competition is essential in a world filled
                with countless websites. With our custom website development
                services, we create a website for your business that truly
                represents your brand. At DevRiser, our experts tailor the
                designs and aesthetics to match your unique identity which
                ensures that your website visitors have a memorable experience
              </p>
            </section>
            <section className="online-presence-container2-section2-web"></section>
            <section className="online-presence-container2-section2-web"></section>
            <section className="online-presence-container2-section1-web">
              <h3 className="online-presence-container2-section1-subheading-web">
                Personalized functionality
              </h3>
              <p className="online-presence-container2-section1-subtext-web">
                Off-the-shelf website builders may limit your options for
                functionality. However, with our custom website development, you
                have complete control. We build features and functionalities
                specific to your business requirements. You get whatever feature
                you think of with DevRiser
              </p>
            </section>

            <section className="online-presence-container2-section1-web">
              <h3 className="online-presence-container2-section1-subheading-web">
                Progressive web apps
              </h3>
              <p className="online-presence-container2-section1-subtext-web">
                With PWAs, we combine the best of both worlds, we offer the
                convenience of being accessible through a web browser while also
                providing the option to be installed and launched directly to
                your device. PWAs bridge the gap between websites and
                traditional mobile apps, providing users with the ability to
                access their favorite websites however they like
              </p>
            </section>
            <section className="online-presence-container2-section2-web"></section>
            <section className="online-presence-container2-section2-web"></section>
            <section className="online-presence-container2-section1-web">
              <h3 className="online-presence-container2-section1-subheading-web">
                Improved search engine
              </h3>
              <p className="online-presence-container2-section1-subtext-web">
                Search engine visibility is vital for attracting organic traffic
                to your website. Our custom website development services enable
                you to implement SEO best practices right from the start. By
                optimizing your site's structure, content, and metadata, you can
                increase the chances of ranking higher, driving organic traffic,
                and expanding your online presence
              </p>
            </section>

            <section className="online-presence-container2-section1-web">
              <h3 className="online-presence-container2-section1-subheading-web">
                Website performance
              </h3>
              <p className="online-presence-container2-section1-subtext-web">
                Website performance plays a crucial role in user experience. In
                DevRiser we create Custom made websites that allow optimized
                code and reduces unnecessary bloat that can slow down your
                website. With a streamlined and efficient website, visitors can
                enjoy fast loading times and easy navigation, resulting in a
                positive user experience
              </p>
            </section>
            <section className="online-presence-container2-section2-web"></section>
          </div>
        </div>
        <div className="developement-our-technology-container-web">
          <h2
            style={tectnologyHeadingStyles}
            className="developement-our-technology-heading-web"
          >
            Our Technology Stack
          </h2>
          {sections.map((section, index) => (
            <div key={index} style={sectionStyles}>
              <h2 style={headingStyles}>{section.title}</h2>
              <div style={iconContainerStyles}>
                {section.icons.map((icon, iconIndex) => (
                  <div key={iconIndex} style={iconStyles}>
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          className="_crousal-container"
          style={theme ? lightTheme : darkTheme}
        >
          <h2 className="_crousal-container-child1">
            {" "}
            What<span className="text-color-web"> People Say </span>About Us
          </h2>
          <div className="_crousal-container-child2">
            <Carousel content={content} photo={photo} name={name} desc={desc} />
          </div>
        </div>
        <div
          className="_tertiory-section-container"
          style={theme ? lightTheme : darkTheme}
        >
          <div className="tertiory-section-container-gradient"></div>
          <h2 className="_tertiory-section-container-text1">Why Choose Us</h2>
          <div
            className="_big-card-container"
            style={theme ? lightTheme : darkTheme}
          >
            <div className="_big-card-container-child1-web" ref={containerRef}>
              {/* our process data maped here */}
              {ourProcessData.map((item) => (
                <div
                  onClick={() => {
                    handleClick(item);
                    setOurProcessId(item.id);
                  }}
                  ref={containerRef}
                  className="_big-card-container-child1-item"
                >
                  <span style={ourProcessId == item.id ? textItemStyle : null}>
                    {item.title}
                  </span>
                  <div className="_big-card-container-child1-item-arrow-icon-container-web">
                    <Image
                      className="why-chose-us-arrow-web"
                      src={ArrowDevriser}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="_big-card-container-child2-web">
              <p>{ourProcessData[ourProcessId - 1].description}</p>
            </div>
          </div>
        </div>
        <div style={{ background: "#5016CC" }} className="_secondary-long-card">
          <h2 className="_secondary-long-card-text">
            Ready For A Website That Sets You Apart?
          </h2>
          <Button
            style={{ color: "#5016CC", width: "auto" }}
            className="_secondary-long-card-btn"
          >
            Request a Consultation
          </Button>
        </div>
        <div className="_faq-container" style={theme ? lightTheme : darkTheme}>
          <h2 className="_faq-container-child1">
            Frequently <span className="text-color-web">Asked</span> Questions
          </h2>
          <div className="_faq-container-child2">
            <Faq faqContent={faqContent} />
          </div>
        </div>
      </div>
         
    </div>
  );
};

export default WebDevelopment;
