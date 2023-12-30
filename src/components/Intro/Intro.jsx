import React, { useContext } from "react";
import "./Intro.css";
import girl from "../../img/girll.jpg";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/*  change in darkmode  */}
          <span style={{ color: darkMode ? "#F1F1EE" : "" }}>Hi! I am</span>
          <span>Anushka Jain</span>
          <span>
            A graduate student in Software Engineering from Oregon State University. A big fans of coding.
          </span>
          <span>
            You can check my GitHub and Linkedin using the icon below!
          </span>
        </div>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/jainanu" target="_blank" rel="noreferrer">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/anushka-jain-574530143/" target="_blank" rel="noreferrer">
            <img src={LinkedIn} alt="" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={girl} alt="" />
        <motion.div
          initial={{ top: "-4%", left: "57%" }}
          whileInView={{ left: "65%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv text1="Fullstack" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "21rem", top: "18rem" }}
          whileInView={{ left: "5rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "55%", top: "18rem" }}
          whileInView={{ left: "65%" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv text1="Front-end" text2="Developer" />
        </motion.div>


        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
