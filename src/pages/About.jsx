import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="about--wrapper">
        <p>
          Welcome to Canv<span>ai</span> - the AI-powered image generator website designed
          and developed by <a target="_blank" style={{color: "#34B3F1", textDecoration: "underline"}} href="https://www.linkedin.com/in/anshul-kulkarni-822a76241/">Anshul Kulkarni</a>. With Canvai, you can create unique
          and stunning images in seconds using advanced AI technology. <br />
          Our website is built using cutting-edge technologies like ReactJS,
          NodeJS, and ExpressJS, which allows us to provide you with a seamless
          and user-friendly experience. We also leverage the power of OpenAI API
          to generate images that are completely unique and tailored to your
          needs.
          <br />
          At Canvai, we believe that creativity should be accessible to
          everyone, and that's why we created this platform to help unleash your
          creativity. Whether you need images for your website, social media, or
          digital artwork, Canvai has got you covered. <br /> So why wait? Start
          exploring our AI-powered image generator today and let your creativity
          run wild.
        </p>
        <div className="details">
            <img src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" alt="react icon" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png" alt="nodeJS icon" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/OpenAI_Logo_%282%29.svg/2560px-OpenAI_Logo_%282%29.svg.png" alt="open ai logo" />
        </div>
      </div>
      <footer>
        <a href="https://github.com/anshulsenpai">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png" alt="github icon" />
        </a>
      </footer>
    </div>
  );
};

export default About;
