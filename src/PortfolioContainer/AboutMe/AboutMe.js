import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Image from "../../assets/Images/me.png";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "I love to create things on the internet and I push myself everyday to learn more tools and technologies. I am also able to absorb new concepts quickly, while tackling new challenges.",
    highlights: {
      bullets: [
        "Full-stack Web Development",
        "DevOps",
        "Windows/Linux",
        "Embedded Systems Development",
      ],
      heading: "Some of my expertises:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={" "} />
        <div className="about-me-card">
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="container">
              <div className="about-me-highlights">
                <div className="highlight-heading">
                  <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
                </div>
                {renderHighlight()}
              </div>
              <div className="about-me-image">
                <img src={Image} width={280} alt="no image" />
              </div>
            </div>

            <div className="about-me-options">
              <a href="https://drive.google.com/file/d/1y47SYmPqFvgTU5nCVT0tkiHswJwLwOvb/view?usp=sharing">
                <button className="btn btn-down btn-down--black">Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
