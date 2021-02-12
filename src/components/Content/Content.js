import React from "react";

const Content = (props) => {
  return (
    <>
      <div className={`section ${props.className}`}>
        <div className="component-section-header">
          <div className="title-badge">
            <div className="title-badge-title">{props.sectionTitle}</div>
          </div>

          <h2>
            <div className="component-title ">{props.sectionSubtitle}</div>
          </h2>

          <div className="description">{props.description}</div>
        </div>

        <div className="component-usp-row">
          {props.images.map((image, index) => (
            <div className="item team">
              <img className="image" src={image.imageSrc} alt="images" />
              <div className="component-title title">{image.imageTitle}</div>
              {image.imageDescription ? (
                <div className="description">{image.imageDescription}</div>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="section-line">
        <div className="line "></div>
      </div>
    </>
  );
};

export default Content;
