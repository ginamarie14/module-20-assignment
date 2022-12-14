import React from "react";

const AboutMe = () => (
  <div>
    <div className="bg2">
      <div className="container hero-text">
        <h1>Gina Marie Enriquez</h1>
        <h2>Full-Stack Developer</h2>
      </div>
    </div>
    <div className="bg">
      <div className="container about-wrapper">
          <div className="row">
            <div className="col">
              <h3 className="col" style={{ fontSize: "260%" }}>About Me</h3>
              <div className="line"></div>
              <p>test</p>
              <p>test</p>
              <p>test</p>
            </div>
            <div className="col">
              <p>image here</p>
            </div>
          </div>
        </div>
    </div>
    <div className="bg3">
        <div className="container skills-wrapper">
          <div className="row">
            <h3 className="col-12 skills" style={{ fontSize: "260%" }}>What I do</h3>
            <div className="line"></div>
          </div>
          <div className="row skills-list">
            <div className="col">
              <img scr="" alt=""/>
              <h4>Technologies I can use:</h4>
              <p>
                HTML5, CSS, JavaScript, APIs, jQuery, BootStrap, Node.js, OOP, ExpressJS, MySQL, NoSQL, MongoDB,
                Prisma Schema, React
              </p>
            </div>
            <div className="col">
            <img scr="" alt=""/>
              <h4>Different platforms that I am familiar with:</h4>
              <p>Git, GitHub, VSCode, Brackets, XCode, Android Studio, GIS, Abode Illustrator, Microsoft Office</p>
            </div>
            <div className="col">
            <img scr="" alt=""/>
              <h4>What I want to learn next:</h4>
              <p>Swift, Android Development, C++</p>
            </div>
          </div>
        </div>
    </div>
  </div>
);

export default AboutMe;