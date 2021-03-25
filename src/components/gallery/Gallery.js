import React, { useState } from "react";

import Modal from "react-modal";

import "./Gallery.css";

import GalleryImage from "./GalleryImage";
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

const Gallery = () => {
  const imageComponents = [
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

  const [isOpen, setIsOpen] = useState(false);
  const [imageSelected, setImageSelected] = useState();

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  const expandImage = (url) => {
    console.log("url", url);
    setImageSelected(url);
    setIsOpen(true);
  };

  const MODAL_STYLE = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      padding: 0,
      backgroundColor: "rgba(20, 20, 20, 0.1)"
    },
    content: {
      height: "500px",
      maxWidth: "50vw",
      margin: "100px auto"
    }
  };
  
  return (
    <div refs="gallery-container" className="container gallery-container">
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <h5>Marappa Exclusive Warehouse Pictures</h5>
        </div>
      </div>
      <div className="row">
        {imageComponents.map((url, index) => {
          return (
            <div key={index} className="col-sm-12 col-md-6 col-xl-4">
              <div className="gallery-card">
                <GalleryImage
                  className="gallery-thumbnail"
                  imageUrl={url}
                  alt={"Image number " + (index + 1)}
                />
                <span
                  className="card-icon-open fa fa-expand"
                  value={url}
                  onClick={() => expandImage(url)}
                ></span>
              </div>
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                style={MODAL_STYLE}
              >
                <img style={{width: "100%", height: "auto"}} src={imageSelected} alt="image"/>
              </Modal>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
