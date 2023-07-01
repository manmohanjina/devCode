"use client";

import React, { useEffect } from "react";
import "./uiux.css";
import Image from "next/image";
import processLine from "../../../assets/illustration_ux/processLine.png";
import { Button } from "../../../utils/custom";
import Carousel from "../../../components/Carousel";
import Avatar from "../../../assets/illustration/avatar.png";
import darkIllustration from "../../../assets/illustration/laptopDarkIllustration.png";
import Faq from "../../../components/Faq";
import { useGlobalContext } from "app/components/common/store";
export default function Uiux() {
  const { showSidebar, setShowSidebar, theme, setTheme } = useGlobalContext();

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

  const faqContent = [
    {
      question: "Why should I invest in custom website development services ?",
      ans: "Custom website development ensures a unique online presence  to your brand, offering enhanced functionality, better user experience, and improved search engine visibility.",
      panel: "1",
    },
    {
      question: "How long does it take to develop a custom website ?",
      ans: "The duration of a UI/UX design project varies depending on the complexity and scope of the project. It typically involves multiple stages, including research, wireframing, prototyping, and testing. We will provide the timeline after assessing your specific requirements.",
      panel: "2",
    },
    {
      question: "What is the role of user research in UI/UX design ?",
      ans: "User research plays a crucial role in UI/UX design as it helps in understanding the target audience, their needs, behaviors, and preferences. It allows us to create designs that are tailored to meet user expectations, resulting in a more effective and engaging user experience.",
      panel: "3",
    },
    {
      question:
        "How do you ensure a consistent and cohesive design across my website ?",
      ans: "We ensure consistency in design through the use of standardized style guides, design systems, and a meticulous approach to design implementation. By establishing consistent styling, layout, and interaction patterns, we create a seamless and cohesive user experience throughout your website.",
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
    <div className="main-container-ux">
      <div className="ux-container">
        <div
          className="_hero-section-container"
          style={theme ? lightTheme : darkTheme}
          id="hero-section-uix-pattern"
          onClick={() => setShowSidebar(false)}
        >
          <div className="_hero-section-container-primary">
            <div className="_hero-section-container-primary-child1">
              <h2 className="_hero-section-container-primary-child1-text1">
                Enrich User Experience With Our Exquisite{" "}
                <span className="text-color-uix">UI/UX Design Services</span>{" "}
                For
              </h2>
              <p className="_hero-section-container-primary-child1-text2" style={{color:theme?'#2A2A2A':'#B1B2B2'}}>
                Experience exceptional UI/UX design with DevRiser. Our skilled
                team creates captivating user experiences that seamlessly blend
                aesthetics and functionality. From meticulous wireframing to
                innovative prototyping and rigorous user testing, we specialize
                in crafting impressive designs
              </p>
              <div>
                <Button
                  id="hero_section-uix-button"
                  className="_hero-section-container-primary-btn"
                  style={{color:theme?'#2A2A2A':'#fff'}}
                >
                  Let's Begin
                </Button>
              </div>
            </div>
            <div className="_hero-section-container-primary-child2">
              {/* <Image src={darkIllustration} alt={"dark_illustration"} /> */}
            </div>
          </div>
        </div>
        <div className="_secondry-section-container">
          <div>
            <h2
              className="_secondry-section-container-text1"
              style={{ color: "#ffff" }}
            >
              Discover The Power Of Our UI/UX Design Services
            </h2>
          </div>
          <p className="_secondry-section-container-text2">
            Unleash the transformative potential of our UI/UX design services
            and witness the impact of captivating user experiences that leave a
            lasting impression. Experience the seamless fusion of aesthetics and
            functionality, revolutionizing your digital presence like never
            before
          </p>
        </div>

        <div className="_grid-four-card">
          <div className="_grid-four-card-child">
            <h2 className="_grid-four-card-child-subchild1">
              Visual hierarchy
            </h2>
            <p className="_grid-four-card-child-subchild2">
              Our UI/UX service emphasizes visual hierarchy to guide user
              attention and enhance user experience. Through the strategic use
              of size, color, contrast, and typography, we create a clear and
              intuitive interface that directs the focus of users, prioritizes
              important elements, and improves overall usability
            </p>
          </div>
          <div className="_grid-four-card-child">
            <h2 className="_grid-four-card-child-subchild1">Consistency</h2>
            <p className="_grid-four-card-child-subchild2">
              Our UI/UX service maintains consistency throughout the design,
              encompassing styling, layout, and interaction patterns. By
              ensuring consistent elements, we create a seamless and intuitive
              user experience that enhances usability and familiarity
            </p>
          </div>
          <div className="_grid-four-card-child">
            <h2 className="_grid-four-card-child-subchild1">
              {" "}
              Micro-interactions
            </h2>
            <p className="_grid-four-card-child-subchild2">
              We elevate the user experience by integrating subtle and
              delightful micro-interactions, such as animated elements, smooth
              transitions, and visual feedback. These interactive details offer
              a sense of engagement, enhancing user satisfaction and immersion
            </p>
          </div>
          <div className="_grid-four-card-child">
            <h2 className="_grid-four-card-child-subchild1">Accessibility</h2>
            <p className="_grid-four-card-child-subchild2">
              We elevate the user experience by integrating subtle and
              delightful micro-interactions, such as animated elements, smooth
              transitions, and visual feedback. These interactive details offer
              a sense of engagement, enhancing user satisfaction and immersion
            </p>
          </div>
        </div>

        <div id="primary-long-card-uix" className="_primary-long-card">
          <h2 className="_primary-long-card-text1">
            Spark User Interest and Fuel Success With Intuitive UI/UX Design
            Services
          </h2>
          <p className="_primary-long-card-text2">
            Elevate your website's performance with our comprehensive UI/UX
            design service. We prioritize user-centric principles, seamlessly
            merging aesthetics and functionality for an exceptional digital
            experience. With intuitive navigation, responsive design, and
            engaging interactions, we captivate users, boosting satisfaction,
            visit durations, conversions, and brand loyalty. Experience the
            transformative power of our well-crafted UI/UX design service and
            unlock the full potential of your online presence
          </p>
        </div>
        <div
          className="_secondry-section-container"
          style={theme ? lightTheme : darkTheme}
        >
          <div>
            <h2 className="_secondry-section-container-text1">
              Embrace The Benefits Of UI UX Design Services
            </h2>
          </div>
          <p
            className="_secondry-section-container-text2"
            style={{ width: "60%",color:theme?'#2A2A2A':'#B1B2B2'}}
          >
            Witness the power of exceptional UI/UX services and transform your
            digital experiences with our expert team of designers
          </p>
        </div>
        <div
          className="ux-container-2card"
          style={theme ? lightTheme : darkTheme}
        >
          <div className="ux-container-2card-child1">
            <h2 className="ux-container-2card-child1-text1">
              Experience The Art Of Meticulous Design With Our UI/UX Specialists
            </h2>
            <p className="ux-container-2card-child1-text2" style={{color:theme?'#2A2A2A':'#B1B2B2'}}>
              We are the creators of user-friendly interfaces and seamless
              interactions. Our goal is to turn ordinary designs into
              extraordinary experiences, unlocking new possibilities in every
              detail. With a combination of creativity and a focus on users'
              needs, we design digital journeys that surpass expectations. From
              initial wireframes to interactive prototypes, we bring ideas to
              life, making each click, swipe, and tap a captivating interaction
              between the user and the interface
            </p>
          </div>
          <div className="ux-container-2card-child2"></div>
        </div>

        <div className="ux-container-box1">
          <div className="ux-container-box1-gradeint"></div>
          <h2 className="ux-container-box1-child1">
            Our <span className="text-color-uix">Process</span>
          </h2>
          <div className="ux-container-box1-child2">
            <div className="ux-container-box1-child2-subchild1">
              <div>
                <h2 className="ux-container-box1-child2-subchild1-heading">
                  Research and Discovery
                </h2>
              </div>
              <div>
                <p className="ux-container-box1-child2-subchild1-content">
                  We then delve deep into user analysis to identify user needs,
                  behaviors, and pain points. We create user personas to
                  represent different user types and tailor the design to meet
                  their specific requirements
                </p>
              </div>
              <div>
                <h2 className="ux-container-box1-child2-subchild1-heading">
                  Information Architecture
                </h2>
              </div>
              <div>
                <p className="ux-container-box1-child2-subchild1-content">
                  We create low-fidelity wireframes and interactive prototypes
                  to visualize the layout, hierarchy, and functionality of the
                  interface. This helps in validating the design concept and
                  gathering feedback early in the process
                </p>
              </div>
              <div>
                <h2 className="ux-container-box1-child2-subchild1-heading">
                  Visual Design
                </h2>
              </div>
              <div>
                <p className="ux-container-box1-child2-subchild1-content">
                  We focus on creating intuitive and seamless interactions for
                  users. Our interactive prototypes allow us to refine and test
                  various interactions, ensuring a delightful user experience at
                  each touchpoint
                </p>
              </div>
              <div>
                <h2 className="ux-container-box1-child2-subchild1-heading">
                  Usability Testing
                </h2>
              </div>
            </div>
            <div className="ux-container-box1-child2-subchild2">
              <Image src={processLine} />
            </div>
            <div className="ux-container-box1-child2-subchild1">
              <div>
                <p className="ux-container-box1-child2-subchild1-content">
                  We begin by conducting thorough research to understand your
                  business goals, target audience, and industry trends. This
                  research forms the foundation for our design decisions
                </p>
              </div>
              <div>
                <h2 className="ux-container-box1-child2-subchild1-heading">
                  User Analysis and Personas
                </h2>
              </div>
              <div>
                <p className="ux-container-box1-child2-subchild1-content">
                  Then we focus on organizing and structuring the screen and
                  navigation elements to ensure a logical flow and easy access
                  to information. This step involves creating sitemaps and user
                  flows to optimize user interactions
                </p>
              </div>
              <div>
                <h2 className="ux-container-box1-child2-subchild1-heading">
                  Wireframing and Prototyping
                </h2>
              </div>
              <div>
                <p className="ux-container-box1-child2-subchild1-content">
                  Our team crafts visually appealing designs, incorporating your
                  branding elements, color schemes, and typography. We pay
                  attention to creating a consistent and visually engaging
                  interface that resonates with your target audience
                </p>
              </div>
              <div>
                <h2 className="ux-container-box1-child2-subchild1-heading">
                  Interactive Design
                </h2>
              </div>
              <div>
                <p className="ux-container-box1-child2-subchild1-content">
                  We conduct usability testing sessions with real users to
                  validate the design choices and identify any usability issues.
                  This iterative process helps us refine the design and make
                  data-driven improvements
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="_crousal-container"
          style={theme ? lightTheme : darkTheme}
        >
          <h2 className="_crousal-container-child1">
            {" "}
            What<span className="text-color-uix"> People Say </span>About Us
          </h2>
          <div
            className="_crousal-container-child2"
            id="crousal-container-child2-uix"
          >
            <Carousel content={content} photo={photo} name={name} desc={desc} />
          </div>
        </div>

        <div
          className="_tertiory-section-container"
          style={theme ? lightTheme : darkTheme}
        >
          <h2 className="_tertiory-section-container-text1">Why Choose Us</h2>
          <p className="_tertiory-section-container-text2"  style={{color:theme?'#2A2A2A':'#B1B2B2'}}>
            We offer a user-centered approach, creative solutions, and industry
            expertise in our UI UX design services to make your digital product
            stand out in the market.
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
                Effortless Project Tracking
              </h2>
              <p className="_five-card-container-child1-subchild-text2">
                Stay informed throughout your UI/ UX design service journey with
                our intuitive dashboard, customized to make your experience
                exceptional. Easily track milestones, view tasks, and monitor
                design progress in real-time. Our centralized project management
                hub ensures transparency, effective communication, and seamless
                collaboration throughout the entire process
              </p>
            </div>
            <div className="_five-card-container-child1-subchild">
              <Button className="_five-card-container-child1-subchild-btn">
                B
              </Button>
              <h2 className="_five-card-container-child1-subchild-text1">
                Cost Efficient
              </h2>
              <p className="_five-card-container-child1-subchild-text2">
                Experience budget-friendly UI/UX services tailored to your
                needs. Our team excels at delivering efficient and high-quality
                designs, ensuring exceptional value for your investment. With
                meticulous attention to detail, we create compelling user
                experiences that meet your goals and budget
              </p>
            </div>
            <div className="_five-card-container-child1-subchild">
              <Button className="_five-card-container-child1-subchild-btn">
                C
              </Button>
              <h2 className="_five-card-container-child1-subchild-text1">
                Support and Maintenance
              </h2>
              <p className="_five-card-container-child1-subchild-text2">
                Our commitment to exceptional UI/UX services extends beyond the
                design phase. We provide continuous support, optimization, and
                technical assistance to ensure a seamless and successful user
                experience for your digital product
              </p>
            </div>
          </div>
          <div className="_five-card-container-child1">
            <div className="_five-card-container-child1-subchild">
              <Button className="_five-card-container-child1-subchild-btn">
                D
              </Button>
              <h2 className="_five-card-container-child1-subchild-text1">
                Professional UI/UX Designers
              </h2>
              <p className="_five-card-container-child1-subchild-text2">
                Our team of experts is dedicated to crafting visually
                captivating websites that prioritize seamless navigation and
                intuitive user experiences. With a focus on aesthetics and
                usability, we ensure your website not only looks stunning but
                also captivates and engages your audience
              </p>
            </div>
            <div className="_five-card-container-child1-subchild">
              <Button className="_five-card-container-child1-subchild-btn">
                E
              </Button>
              <h2 className="_five-card-container-child1-subchild-text1">
                Expertise in UI/UX Design Services
              </h2>
              <p className="_five-card-container-child1-subchild-text2">
                At DevRiser, our team of highly skilled professionals brings
                extensive expertise in UI/UX design. With a deep understanding
                of user-centric principles, we deliver exceptional designs that
                meet your unique requirements and elevate your digital presence
              </p>
            </div>
          </div>
        </div>

        <div className="_secondary-long-card" id="secondary-long-card-uix">
          <h2 className="_secondary-long-card-text">
            Get Ready To Start Your Dream Project
          </h2>
          <Button
            className="_secondary-long-card-btn"
            id="secondary-long-card-btn-uix"
          >
            Let's Talk
          </Button>
        </div>
        <div className="_faq-container" style={theme ? lightTheme : darkTheme}>
          <h2 className="_faq-container-child1">
            Frequently <span className="text-color-uix">Asked</span> Questions
          </h2>

          <div className="_faq-container-child2">
            <Faq faqContent={faqContent} />
          </div>
        </div>
      </div>
    </div>
  );
}
