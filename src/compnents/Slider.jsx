import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const images = [
    "https://i.ibb.co.com/Mp4yngP/slider1.png",
    "https://i.ibb.co.com/kDhyr7r/slider2.png",
    "https://i.ibb.co.com/rpWk3RV/slider3.png",
    "https://i.ibb.co.com/YDrsYG7/slider4.png",
    "https://i.ibb.co.com/fFGbyTH/slider5.png",
    "https://i.ibb.co.com/bgPfRMZ/slider6.png",
    "https://i.ibb.co.com/1rfwkv9/slider7.png",
    "https://i.ibb.co.com/tQzLq46/slider9.png",
    "https://i.ibb.co.com/G54MjYW/slider8.png",
  ];

  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={2000}
        infinite
        responsive={responsive}
      >
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index}`}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
