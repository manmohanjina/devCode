"use client";
import React, { useEffect, useRef, useState } from "react";
import "./cms.css";

import { Button } from "../../../utils/custom";
import { Drupal, Shopify, Webflow, Wix, Wordpress } from "asset1/cms_svg";

import Carousel from "../../../components/Carousel";
import Avatar from "../../../assets/illustration/avatar.png";

import Faq from "../../../components/Faq";
import { useGlobalContext } from "app/components/common/store";
import { Hero, HeroLight, Pattern } from "asset1/cms_svg/index";
import FourCard from "@/app/components/common/FourCard";
import { LineConnectorLg } from "../../../asset1/index";
export default function Cms() {
  const { showSidebar, setShowSidebar, theme } = useGlobalContext();

  const ourProcessDataBlack = [
    {
      id: 0,
      btnName: "Wordpress",
      img: <Wordpress fill="white" />,
      content:
        "WordPress is a renowned CMS platform known for its versatility and user-friendly interface. At DevRiser, we use vast plugin libraries of WordPress to customize various websites for you, whether it is blogs, business sites, e-commerce stores, portfolios, or forums. We use responsive designs to enhance your user engagement and accessibility across various devices",
    },
    {
      id: 1,
      btnName: "Drupal",
      img: <Drupal fill="white" />,
      content:
        " Drupal is a robust and highly flexible content management system (CMS) known for its extensive customization options and scalability. At Devriser, we use Drupal website development services and create exceptional websites with their flexible architecture, extensive module library, and intuitive administration interface. This allows us to tailor websites precisely to our client's needs, ensuring optimal performance, scalability, and an exceptional user experience",
    },
    {
      id: 2,
      btnName: "Wix",
      img: <Wix fill="white" />,
      content:
        "Wix is a powerful and user-friendly website builder with professional templates, customizable elements, and an app market for added functionalities. We at Devriser utilize its intuitive tools, reliable hosting, mobile optimization, and SEO capabilities to provide you with a unique website that delivers an outstanding online experience",
    },
    {
      id: 3,
      btnName: "Webflow",
      img: <Webflow fill="white" />,
      content:
        " Webflow is one of the best platforms for CMS website development. It is known for its intuitive visual editor and robust features. At Devriser, we leverage its seamless design capabilities, responsive layouts, built-in SEO tools, and extensive template library to create visually stunning websites which align with your goals and objectives",
    },
    {
      id: 4,
      btnName: "Shopify",
      img: <Shopify fill="white" />,
      content:
        "Shopify is a powerful e-commerce platform with diverse features to construct and oversee online stores. Devriser experts harness the extensive capabilities to craft excellent websites tailored to your specific business requirements. We ensure seamless integration, intuitive navigation, and optimized performance, resulting in an elevated shopping experience",
    },
  ];

  const ourProcessDataWhite = [
    {
      id: 0,
      btnName: "Wordpress",
      img: <Wordpress fill="black" />,
      content:
        "WordPress is a renowned CMS platform known for its versatility and user-friendly interface. At DevRiser, we use vast plugin libraries of WordPress to customize various websites for you, whether it is blogs, business sites, e-commerce stores, portfolios, or forums. We use responsive designs to enhance your user engagement and accessibility across various devices",
    },
    {
      id: 1,
      btnName: "Drupal",
      img: <Drupal fill="black" />,
      content:
        " Drupal is a robust and highly flexible content management system (CMS) known for its extensive customization options and scalability. At Devriser, we use Drupal website development services and create exceptional websites with their flexible architecture, extensive module library, and intuitive administration interface. This allows us to tailor websites precisely to our client's needs, ensuring optimal performance, scalability, and an exceptional user experience",
    },
    {
      id: 2,
      btnName: "Wix",
      img: <Wix fill="black" />,
      content:
        "Wix is a powerful and user-friendly website builder with professional templates, customizable elements, and an app market for added functionalities. We at Devriser utilize its intuitive tools, reliable hosting, mobile optimization, and SEO capabilities to provide you with a unique website that delivers an outstanding online experience",
    },
    {
      id: 3,
      btnName: "Webflow",
      img: <Webflow fill="black" />,
      content:
        " Webflow is one of the best platforms for CMS website development. It is known for its intuitive visual editor and robust features. At Devriser, we leverage its seamless design capabilities, responsive layouts, built-in SEO tools, and extensive template library to create visually stunning websites which align with your goals and objectives",
    },
    {
      id: 4,
      btnName: "Shopify",
      img: <Shopify fill="black" />,
      content:
        "Shopify is a powerful e-commerce platform with diverse features to construct and oversee online stores. Devriser experts harness the extensive capabilities to craft excellent websites tailored to your specific business requirements. We ensure seamless integration, intuitive navigation, and optimized performance, resulting in an elevated shopping experience",
    },
  ];

  const [btnColor, setBtnColour] = useState(0);

  const content = [
    "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it",
    "I Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    "I hate the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
  ];
  const gridFourCard = [
    {
      heading: "Time-Efficient",
      content:
        " Our team specializes in creating user-friendly CMS websites that areeasy to manage. We harness the power of CMS platforms to accelerate the website creation process, allowing you to have a fully functionalwebsite in significantly less time compared to traditional code-basedmethods",
    },
    {
      heading: "Cost-Effective",
      content:
        "Our team specializes in creating user-friendly CMS websites that are easy to manage. We harness the power of CMS platforms to accelerate the website creation process, allowing you to have a fully functional website in significantly less time compared to traditional code-based methods",
    },
    {
      heading: "Responsive Design",
      content:
        "Our websites seamlessly adapt to all devices, ensuring exceptional user experiences. Through responsive design, we optimize layouts and functionality for optimal viewing and interaction. Experience effortless compatibility across screens, from big screens to laptops and from mobiles to tablets",
    },
    {
      heading: "Easy to manage",
      content:
        "  Simplify website management with our user-friendly interfaces. Our expertly crafted websites eliminate complexities, empowering you to effortlessly update and maintain your online presence. Experience seamless control and keep your website up-to-date with ease",
    },
  ];

  const photo = [Avatar, Avatar, Avatar];
  const name = ["Kelly Williams", "Melly Williams", "Selly Williams"];
  const desc = [
    "Head of Design, Layers",
    "SubHead of Design, Layers",
    "Master of Design, Layers",
  ];
  const [id, setId] = useState(0);

  const handleSixbtn = (elm, id) => {
    setBtnColour(id);
    setId(id);
  };

  const faqContent = [
    {
      question: "What CMS platforms do you offer for website creation ?",
      ans: "We offer website creation services through popular CMS platforms like WordPress, Drupal, Webflow, Wix, and Shopify. These platforms provide flexible and scalable solutions which help us to create different types of websites, from simple blogs to complex e-commerce stores.",
      panel: "1",
    },
    {
      question: "What will be the cost of the CMS development services ?",
      ans: "The cost for CMS development services can vary depending on several factors, including the complexity of the project, the specific CMS platform chosen, the desired features and functionalities, and the level of customization required. It is essential to discuss your project requirements and goals to get an accurate estimate of the cost involved.",
      panel: "2",
    },
    {
      question: "How much time will it take to create a website?",
      ans: "The time required to create a website can vary based on several factors, including the complexity of the website, the specific CMS platform chosen, the desired features and functionalities, and the level of customization required.",
      panel: "3",
    },
    {
      question: "Is my data secure with you?",
      ans: "Yes, we as a CMS development company prioritize the security of your data. We implement robust measures to ensure the confidentiality, integrity, and availability of your information. Rest assured that we follow industry best practices, utilize encryption protocols, and implement secure hosting environments to safeguard your data throughout our website creation process.",
      panel: "4",
    },
  ];

  const lightTheme = {
    backgroundColor: "#F6F6F6",
    color: "#2A2A2A",
  };
  const darkTheme = {
    backgroundColor: "#090a0b",
    color: "#FFFFFF",
  };

  return (
    <div className="_container" onClick={() => setShowSidebar(false)}>
      <div className="main-container">
        <div
          className="_hero-section-container"
          style={theme ? lightTheme : darkTheme}
        >
          <div
            className="_hero-section-container-primary"
            style={{ border: "1px solid red" }}
          >
            <Pattern id="hero-section-pattern" />
            <div className="container-gradient"></div>
            <div className="_hero-section-container-primary-child1">
              <h2 className="_hero-section-container-primary-child1-text1">
                Advanced{" "}
                <span className="text-color">CMS Development Services</span> For
                Maximizing Your Website's Potential
              </h2>
              <p
                className="_hero-section-container-primary-child1-text2"
                style={{ color: theme ? "#2A2A2A" : "#B1B2B2" }}
              >
                {" "}
                We optimize the true power of your business with our advanced
                CMS development services. Our CMS team handles every aspect of
                your website's creation, ensuring a seamless and dynamic online
                presence that maximizes your website's potential
              </p>
              <div>
                <Button
                  className="_hero-section-container-primary-btn"
                  style={{ color: theme ? "#2A2A2A" : "#fff" }}
                >
                  Let's Begin
                </Button>
              </div>
            </div>
            <div className="_hero-section-container-primary-child2">
              {/* <Image src={darkIllustration} /> */}
              <Hero />
            </div>
          </div>
        </div>

        <div className="_secondry-section-container">
          <div>
            <h2
              className="_secondry-section-container-text1"
              style={{ color: "#ffff" }}
            >
              Elevate Your Website Creation With Our Expert CMS Development
              Services
            </h2>
          </div>
          <p className="_secondry-section-container-text2">
            Experience the power of website creation with our comprehensive CMS
            Development Services. Leveraging industry-leading platforms such as
            WordPress, Wix, Drupal, Webflow, and Shopify, we provide tailored
            solutions that cater to your unique needs. Our expertise in custom
            designs and responsive layouts ensures seamless user experiences
            while effortless website management and updates empower you to stay
            in control. Captivate your audience, achieve tangible results, and
            embark on a transformative digital journey with our exceptional CMS
            web development services.
          </p>
        </div>

        <FourCard gridFourCard={gridFourCard} />

        <div className="_primary-long-card">
          <h2 className="_primary-long-card-text1">
            Exquisite Precision Crafted By Our CMS Experts
          </h2>
          <p className="_primary-long-card-text2">
            {" "}
            Experience the art of website creation with our team of CMS experts
            who specialize in delivering customized websites that precisely
            align with your unique requirements. Leveraging a range of CMS
            platforms, we seamlessly integrate cutting-edge technology to craft
            dynamic, user-friendly websites that fascinate your audience. Each
            website is meticulously tailored to perfection, ensuring a seamless
            and distinctive online experience that sets you apart from the
            competition.
          </p>
        </div>

        <div
          className="cms-container-box5"
          style={theme ? lightTheme : darkTheme}
        >
          <h2 className="cms-container-box5-text">Meet Our CMS Lineups</h2>
          <div>
            <div className="cms-container-box5-boxbtn">
              {ourProcessDataBlack.map((elm) => {
                return (
                  <Button
                    style={{
                      backgroundColor:
                        btnColor == elm.id
                          ? "#E77BA6"
                          : "" || theme
                          ? "#E2DFD2"
                          : "",
                      backgroundImage:
                        btnColor == elm.id ? "none" : "" || theme ? "none" : "",
                      color: theme ? "#090A0B" : "white",
                    }}
                    className="cms-container-box5-boxbtn-btn"
                    onClick={() => handleSixbtn(elm, elm.id)}
                    key={elm.id}
                  >
                    {elm.btnName}
                  </Button>
                );
              })}
            </div>
            <div
              className="cms-container-box5-card"
              style={{ background: theme ? "#090A0B" : "#EEE" }}
            >
              {theme
                ? ourProcessDataBlack[id].img
                : ourProcessDataWhite[id].img}
              <p
                className="cms-container-box5-card-text"
                style={{ color: theme ? "#FFF" : "#2A2A2A" }}
              >
                {ourProcessDataBlack[id]?.content}
              </p>
            </div>
          </div>
        </div>

        <div
          className="cms-container-box6"
          style={theme ? lightTheme : darkTheme}
        >
          <div className="cms-container-box6-gradient"> </div>
          <div className="cms-container-box6-child1">
            <h2>Types Of Websites We Create With CMS</h2>
          </div>
          <div className="cms-container-box6-child2">
            <div className="cms-container-box6-child2-subchild1">
              <p
                className="cms-container-box6-child2-subchild1-text"
                style={{
                  background: theme ? "none" : "",
                  border: theme ? "1px solid black" : "",
                }}
              >
                Business websites
              </p>
              <p
                className="cms-container-box6-child2-subchild1-text"
                style={{
                  background: theme ? "none" : "",
                  border: theme ? "1px solid black" : "",
                }}
              >
                Blog & news websites
              </p>
              <p
                className="cms-container-box6-child2-subchild1-text"
                style={{
                  background: theme ? "none" : "",
                  border: theme ? "1px solid black" : "",
                }}
              >
                E-commerce websites
              </p>
            </div>
            <div className="cms-container-box6-child2-subchild1">
              <p
                className="cms-container-box6-child2-subchild1-text"
                style={{
                  background: theme ? "none" : "",
                  border: theme ? "1px solid black" : "",
                }}
              >
                Real-estate websites
              </p>
              <p
                className="cms-container-box6-child2-subchild1-text"
                style={{
                  background: theme ? "none" : "",
                  border: theme ? "1px solid black" : "",
                }}
              >
                Community websites
              </p>
            </div>
            <div className="cms-container-box6-child2-subchild1">
              <p
                className="cms-container-box6-child2-subchild1-text"
                style={{
                  background: theme ? "none" : "",
                  border: theme ? "1px solid black" : "",
                }}
              >
                Charity websites
              </p>
              <p
                className="cms-container-box6-child2-subchild1-text"
                style={{
                  background: theme ? "none" : "",
                  border: theme ? "1px solid black" : "",
                }}
              >
                Portfolio websites
              </p>
              <p
                className="cms-container-box6-child2-subchild1-text"
                style={{
                  background: theme ? "none" : "",
                  border: theme ? "1px solid black" : "",
                }}
              >
                Educational websites
              </p>
            </div>
          </div>
        </div>

        <div className="cms-container-box7">
         
          <h2 className="cms-container-box7-text">
         
            Our <span className="text-color">Process</span>
          </h2>
          <LineConnectorLg 
          id='line-connector' />
          <div className="cms-container-box7-child2 ">
            <div className="cms-container-box7-child2-subchild1 order-ourProcess-1">
              <p className="cms-container-box7-child2-subchild1-text">
                Gathering requirements
              </p>
              <p className="cms-container-box7-child2-subchild1-text">
                Research and planning
              </p>
              <p className="cms-container-box7-child2-subchild1-text grid-ourProcess-span">
                Creating design
              </p>
            </div>
            <div className="cms-container-box7-child2-subchild1 order-ourProcess-2">
              <p className="cms-container-box7-child2-subchild1-text">
                Website development
              </p>
              <p
                className="cms-container-box7-child2-subchild1-text"
                style={{ paddingRight: "13%", paddingLeft: "13%" }}
              >
                Website testing
              </p>
            </div>
            <div className="cms-container-box7-child2-subchild1 order-ourProcess-3">
              <p
                className="cms-container-box7-child2-subchild1-text"
                id="cms-container-box7-child2-subchild1-text"
              >
                User training
              </p>
              <p className="cms-container-box7-child2-subchild1-text">
                Staging site
              </p>
              <p className="cms-container-box7-child2-subchild1-text grid-ourProcess-span">
                Launch of website
              </p>
            </div>
          </div>
        </div>
        <div className="cms-container-box8">
          <div className="cms-container-box8-gradient"></div>
          <div className="cms-container-box8-child1 order-span-1">
            <div className="cms-container-box8-child1-subchild">
              <Button className="cms-container-box8-child1-subchild-btn">
                A
              </Button>
              <h2 className="cms-container-box8-child1-subchild-text1">
                Gathering requirements
              </h2>
              <p className="cms-container-box8-child1-subchild-text2">
                We Begin by understanding your needs, goals, preferred CMS
                platform, and target audience to determine the website's
                features, functionality, and content requirements
              </p>
            </div>
            <div className="cms-container-box8-child1-subchild">
              <Button className="cms-container-box8-child1-subchild-btn">
                B
              </Button>
              <h2 className="cms-container-box8-child1-subchild-text1">
                Research and planning
              </h2>
              <p className="cms-container-box8-child1-subchild-text2">
                We then move on to conduct in-depth research and create a
                comprehensive plan outlining the project scope, suitable CMS
                platform, timeline, and deliverables
              </p>
            </div>
            <div className="cms-container-box8-child1-subchild grid-span">
              <Button className="cms-container-box8-child1-subchild-btn">
                C
              </Button>
              <h2 className="cms-container-box8-child1-subchild-text1">
                Creating design
              </h2>
              <p className="cms-container-box8-child1-subchild-text2">
                Our third step involves creating a visually appealing and
                user-friendly website design, considering factors like branding,
                layout, navigation, and responsive design
              </p>
            </div>
          </div>
          <div className="cms-container-box8-child1 order-span-2">
            <div className="cms-container-box8-child1-subchild">
              <Button className="cms-container-box8-child1-subchild-btn">
                D
              </Button>
              <h2 className="cms-container-box8-child1-subchild-text1">
                Website development
              </h2>
              <p className="cms-container-box8-child1-subchild-text2">
                Utilizing the approved design, our professionals develop a fully
                functional website by incorporating all of the necessary
                features and functionalities
              </p>
            </div>
            <div className="cms-container-box8-child1-subchild">
              <Button className="cms-container-box8-child1-subchild-btn">
                E
              </Button>
              <h2 className="cms-container-box8-child1-subchild-text1">
                Website testing
              </h2>
              <p className="cms-container-box8-child1-subchild-text2">
                We conduct rigorous testing of the newly created website to
                ensure the website functions flawlessly across different
                browsers, devices, and scenarios
              </p>
            </div>
          </div>
          <div className="cms-container-box8-child1 order-span-3">
            <div className="cms-container-box8-child1-subchild">
              <Button className="cms-container-box8-child1-subchild-btn">
                F
              </Button>
              <h2 className="cms-container-box8-child1-subchild-text1">
                User training
              </h2>
              <p className="cms-container-box8-child1-subchild-text2">
                We provide training and a detailed manual for your web
                operations team to efficiently manage the website, serving as a
                comprehensive reference guide for ongoing maintenance and
                updates
              </p>
            </div>
            <div className="cms-container-box8-child1-subchild">
              <Button className="cms-container-box8-child1-subchild-btn">
                G
              </Button>
              <h2 className="cms-container-box8-child1-subchild-text1">
                Staging site
              </h2>
              <p className="cms-container-box8-child1-subchild-text2">
                After user training and before the launch, we deploy the website
                for the final round of testing. This ensures that any issues or
                bugs are identified and resolved before the website goes live
              </p>
            </div>
            <div className="cms-container-box8-child1-subchild grid-span">
              <Button className="cms-container-box8-child1-subchild-btn">
                H
              </Button>
              <h2 className="cms-container-box8-child1-subchild-text1">
                Launch of website
              </h2>
              <p className="cms-container-box8-child1-subchild-text2">
                After successful staging, the website is launched, marking its
                online debut and making it accessible to the target audience
              </p>
            </div>
          </div>
        </div>

        <div
          className="_crousal-container"
          style={theme ? lightTheme : darkTheme}
        >
          <h2 className="_crousal-container-child1">
            {" "}
            What<span className="text-color"> People Say </span>About Us
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
          <p
            className="_tertiory-section-container-text2"
            style={{ color: theme ? "#2A2A2A" : "#B1B2B2" }}
          >
            Through adherence to industry-leading standards in design and
            development, we offer tailor-made CMS solutions that prioritize
            scalability, security, and effortless management
          </p>
        </div>

        <div
          className="_five-card-container"
          style={theme ? lightTheme : darkTheme}
        >
          <div className="_five-card-container-child1">
            <div className="_five-card-container-child1-subchild">
              <Button className="_five-card-container-child1-subchild-btn">
                A
              </Button>
              <h2 className="_five-card-container-child1-subchild-text1">
                Real-time project tracking
              </h2>
              <p className="_five-card-container-child1-subchild-text2">
                Experience real-time project visibility with our convenient
                dashboard, tailored to make your website journey special. Track
                milestones, view tasks, and monitor development progress
                effortlessly. Our centralized project management hub ensures
                transparency, and effective communication, throughout the entire
                process
              </p>
            </div>
            <div className="_five-card-container-child1-subchild">
              <Button className="_five-card-container-child1-subchild-btn">
                B
              </Button>
              <h2 className="_five-card-container-child1-subchild-text1">
                Expertise in CMS Development
              </h2>
              <p className="_five-card-container-child1-subchild-text2">
                At DevRiser, we have highly skilled professionals with extensive
                expertise in CMS development services. In-depth knowledge of
                various CMS platforms enables us to deliver top-notch websites
                that are tailored to meet your specific requirements
              </p>
            </div>
            <div className="_five-card-container-child1-subchild">
              <Button className="_five-card-container-child1-subchild-btn">
                C
              </Button>
              <h2 className="_five-card-container-child1-subchild-text1">
                Professional Design & User Experience
              </h2>
              <p className="_five-card-container-child1-subchild-text2">
                A visually appealing and user-friendly website is essential for
                online success. Our professionals focus on creating websites
                that not only look stunning but also offer a seamless user
                experience, making navigation intuitive and engaging
              </p>
            </div>
          </div>
          <div className="_five-card-container-child1">
            <div className="_five-card-container-child1-subchild">
              <Button className="_five-card-container-child1-subchild-btn">
                D
              </Button>
              <h2 className="_five-card-container-child1-subchild-text1">
                Ongoing Support & Maintenance
              </h2>
              <p className="_five-card-container-child1-subchild-text2">
                Our commitment to quality CMS development service extends beyond
                the website's initial creation. From regular updates to
                troubleshooting and technical assistance, we are dedicated to
                providing reliable support throughout our clients' online
                journey
              </p>
            </div>
            <div className="_five-card-container-child1-subchild">
              <Button className="_five-card-container-child1-subchild-btn">
                E
              </Button>
              <h2 id="costeffective" className="_five-card-container-child1-subchild-text1">
                Cost Effective
              </h2>
              <p className="_five-card-container-child1-subchild-text2">
                Experience cost-effective CMS development services tailored to
                your budget. Our team excels at delivering efficient websites
                without compromising quality. With meticulous attention to
                detail, we provide exceptional value for your investment
              </p>
            </div>
          </div>
        </div>

        <div className="_secondary-long-card">
          <h2 className="_secondary-long-card-text">
            Let's Build Your Dream Website
          </h2>
          <Button className="_secondary-long-card-btn"><p className="secondary-long-card-btn-text" >Get in touch</p></Button>
        </div>

        <div className="_faq-container" style={theme ? lightTheme : darkTheme}>
          <h2 className="_faq-container-child1">
            Frequently <span className="text-color">Asked</span> Questions
          </h2>

          <div className="_faq-container-child2">
            <Faq faqContent={faqContent} />
          </div>
        </div>
      </div>
         
    </div>
  );
}
