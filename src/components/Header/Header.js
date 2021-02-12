import React from "react";

const Header = () => {
  return (
    <header id="header" className="section-header scroll">
      <a href="./">
        <img
          className="icon"
          src="https://learntocodetogether.nl/assets/icon.svg"
          alt="icon"
        />
      </a>
      <a href="https://www.meetup.com/Learning-to-Code-Amsterdam/">
        <img
          className="meetup-icon"
          src="https://learntocodetogether.nl/assets/meetup-icon.svg"
          alt="meetup icon"
        />
      </a>
      <nav>
        <a href="/courses.html">Our Courses</a>
      </nav>
    </header>
  );
};

export default Header;
