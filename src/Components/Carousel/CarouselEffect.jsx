import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./carousel.module.css"
const CarouselEffect = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((ImageItemlink,index) => {
          return <img key={index} src={ImageItemlink} />;
        })}
      </Carousel>
      <div className={styles.carouselImage}>
        
      </div>
    </div>
  );
};
export default CarouselEffect;
