import React, { useState } from "react";
import "./ImageSlider.css";

import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import image1 from "../../images/image1.jpeg";
import image2 from "../../images/image2.jpeg";
import image3 from "../../images/image3.jpeg";
import image4 from "../../images/image4.jpeg";
import image5 from "../../images/image5.jpeg";
import image6 from "../../images/image6.jpeg";
import image7 from "../../images/image7.jpeg";
import image8 from "../../images/image8.jpeg";
import image9 from "../../images/image9.jpeg";
import image10 from "../../images/image10.jpeg";
import image11 from "../../images/image11.jpeg";

const ImageSlider = () => {
  const imageSlides = [
    image10,
    image7,
    image8,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image11,
    image9,
  ];

  const [activeSlide, setActiveSlide] = useState(2);

  const nextSlide = () => {
      setActiveSlide(prvSlide => {
          console.log('prvSlide',prvSlide);
          if(prvSlide === imageSlides.length - 1){
              return 0
          }else {
            return prvSlide + 1
          }
      })
  }

  const prevSlide = () => {
    setActiveSlide(prvSlide => {
        console.log('prvSlide',prvSlide);
        if(prvSlide === 0){
            return imageSlides.length - 1;
        }else {
          return prvSlide - 1
        }
    })
}

  return (
    // <div className="imageSliderContainer">
    //     <div>
    //         <FaChevronLeft/>
    //     </div>
    //     <div>
    //     {imageSlides.map((image,index) => {
    //         return (<img className={`imageSlider ${index === activeSlide? 'activeSlide': 'inActiveSlide'}`} src={image} alt="test" />)
    //     })}
    //     </div>
    //     <div>
    //         <FaChevronRight/>
    //     </div>
    // </div>

    <div className="container">
      <div
        id="carousel-thumb"
        className="carousel slide carousel-fade carousel-thumbnails"
        data-ride="carousel"
        
      >
        <div className="carousel-inner" role="listbox">
          {
              imageSlides.map((image, index) => {
                  return (
                    <div key={index} className={`carousel-item ${index === activeSlide ? 'active': 'inActiveSlide'}`}>
                    <img
                      className="d-block w-100"
                      src={image}
                      alt="First slide"
                      style={{width: '500px', height:'500px'}}
                    />
                  </div>
                  )
              })
          }
          {/* <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(121).jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg"
              alt="Third slide"
            />
          </div> */}
        </div>
        <button
          className="carousel-control-prev"
          href="#carousel-thumb"
          role="button"
          data-slide="prev"
          onClick={prevSlide}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          className="carousel-control-next"
          href="#carousel-thumb"
          role="button"
          data-slide="next"
          onClick={nextSlide}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
