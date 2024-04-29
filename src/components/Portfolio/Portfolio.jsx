import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Project1 from "../../img/ShoppingAppwithCart.png";
import Project2 from "../../img/Personal_Portfolio.png";
import Project4 from "../../img/IronMan.png";
import Project3 from "../../img/MusicPlayer.png";
import Project5 from "../../img/SnakeGame.png";



import Project from "../Project/Project";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? '#F1F1EE' : '' }}>Recent Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >

        <SwiperSlide>
          <Project
            img={Project1}
            heading={"Shopping App with Cart"}
            detail={"The Shopping App, constructed with HTML/CSS, employs JavaScript for dynamic interactions. React.js and Redux manage UI components and state, enhancing user experience."}
            darkMode={darkMode}
            gitUrl={"https://github.com/anushkajain2113/shoppinn"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Project
            className="project"
            img={Project2}
            heading={"Personal Website"}
            detail={"This is my personal portfolio. Tech: React"}
            darkMode={darkMode}
            gitUrl={"https://github.com/anushkajain2113/myapp"}
          //proUrl={"https://anushkajain2113.github.io/myapp/"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Project
            className="project"
            img={Project3}
            heading={"Music Player"}
            detail={"This is Music Player. Tech: React, node.js"}
            darkMode={darkMode}
            gitUrl={"https://github.com/anushkajain2113"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Project
            className="project"
            img={Project4}
            heading={"Animation"}
            detail={"Animation Effects and shadings using Blender"}
            darkMode={darkMode}
            gitUrl={"https://github.com/anushkajain2113/Animation-projects"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Project
            className="project"
            img={Project5}
            heading={"Snake Game"}
            detail={"This is a snake game. Tech: React, HTML , Javascript, CSS"}
            darkMode={darkMode}
            gitUrl={"https://github.com/anushkajain2113"}
          />
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Portfolio;
