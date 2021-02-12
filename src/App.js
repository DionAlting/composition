// App.js
import React from "react";
import "./App.css";

import sections from "./data";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div>
      <Header />

      <div className="section-header-spacer"></div>

      <div className="content">
        {sections.map((section, index) => (
          <Content
            key={index}
            className={section.className}
            sectionTitle={section.sectionTitle}
            sectionSubtitle={section.sectionSubtitle}
            description={section.description}
            images={section.images}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
