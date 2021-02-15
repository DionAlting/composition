// App.js
import React from "react";
import "./App.css";

import sections from "./data";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import LikeCounter from "./components/LikeCounter/LikeCounter";
import LikeButton from "./components/LikeButton/LikeButton";
import AwesomeAnimals from "./components/AwesomeAnimals/AwesomeAnimals";
import ArticleList from "./components/Articals/ArticalList";
export default function App() {
  return (
    <div>
      <LikeCounter />
      <LikeButton />
      <AwesomeAnimals />
      <ArticleList />
      {/* <Header />

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
      <Footer /> */}
    </div>
  );
}
