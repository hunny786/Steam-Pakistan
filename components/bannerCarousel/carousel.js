import React, { Component, Fragment } from "react";
import { Carousel } from "react-bootstrap";
import carouselStyles from "./carousel.module.css";

class CarouselView extends Component {
  render() {
    return (
      <Fragment>
        <div id="banner" className="container position-relative">
          <div className={carouselStyles.bannerContent}>
              <h1 className={carouselStyles.h1}>STEAM CLUB</h1>
              <p className={carouselStyles.p}>
              Our website is your home to quality-assured, free-to-access
              resources to support the teaching and learning of science,
              technology, engineering and mathematics (STEAM) subjects.
              </p>
          </div>
        </div>
        <Carousel>
          <Carousel.Item className={`${carouselStyles.slide} ${carouselStyles.slide1}`}>
            <div className={carouselStyles.overlay}></div>
          </Carousel.Item>
          <Carousel.Item className={`${carouselStyles.slide} ${carouselStyles.slide2}`}>
            <div className={carouselStyles.overlay}></div>
          </Carousel.Item>
        </Carousel>
      </Fragment>
    );
  }
}

export default CarouselView;
