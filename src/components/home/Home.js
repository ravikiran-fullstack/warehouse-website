import React from "react";
import "./Home.css";
import ImageSlider from "../imageSlider/ImageSlider";
const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 mt-3">
                <div class="card mb-3">
                  <div class="row no-gutters">
                    <div class="col-md-6">
                      <ImageSlider />
                    </div>
                    <div class="col-md-6">
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p class="card-text">
                          <small class="text-muted">
                            Last updated 3 mins ago
                          </small>
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
