import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profilePic from '../assets/images/arda.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilePic} alt="Arda " />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ardaaygun" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/arda-ayg%C3%BCn-66226b172/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Arda Aygün</h1>
          <p>Computer Engineering Student</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/ardaaygun" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/arda-ayg%C3%BCn-66226b172/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;