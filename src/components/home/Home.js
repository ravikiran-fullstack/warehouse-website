import React from "react";
import "./Home.css";
import ImageSlider from "../imageSlider/ImageSlider";
const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div class="card">
                  <div class="row no-gutters">
                    <div class="col-md-6">
                      <ImageSlider />
                    </div>
                    <div class="col-md-6">
                      <div class="card-body">
                        <h2 class="card-title font-color">Marappa Exclusive Warehouse</h2>
                        <p class="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
