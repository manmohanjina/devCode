"use client";
import "@/styles/Faq.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import MinusImg from "../assets/illustration/plusImg.png";
import PlusImg from "../assets/illustration/minusImg.png";

import MuiAccordion from "@mui/material/Accordion";

import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { AccordionSummary } from "@mui/material";
import { useGlobalContext } from "app/components/common/store";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:before": {
    display: "none",
  },
}));

const exmaple_arr = [
  {
    question: "what is your name",
    ans: "my name is manish",
    panel: 1,
  },
  {
    question: "what is your city name ",
    ans: "my city name is kahsipur",
    panel: 2,
  },
  { question: "what is your postal address", ans: "244713", panel: 3 },
];

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export default function Faq({ faqContent = [] }) {
  const [expanded, setExpanded] = React.useState("panel1");
  const { showSidebar, setShowSidebar, theme, setTheme } = useGlobalContext();
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
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
    <div className="accordian-div">
      {faqContent.length > 0 &&
        faqContent.map((elm) => {
          return (
            <Accordion
              className="Accordian"
              expanded={expanded === elm.panel}
              onChange={handleChange(elm.panel)}
              style={theme ? lightTheme : darkTheme}
            >
              <AccordionSummary
            sx={{
              
            }}
                
                expandIcon={
                  <Image
                    src={expanded === elm.panel ? PlusImg : MinusImg}
                    
                  />
                }
                aria-controls="panel1d-content"
               
              >
                <Typography className="Accordian-text1">
                  {elm.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="Accordian-text2">{elm.ans}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
    </div>
  );
}
