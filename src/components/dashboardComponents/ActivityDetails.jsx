
import React from 'react';
import { Carousel } from 'react-bootstrap';  // Import Carousel from react-bootstrap
import slide1 from "../../assets/userIcons/slide1.jpg";
import slide2 from "../../assets/userIcons/slide2.jpg";

const ActivityDetails = () => {
  return (
    <div className="card card-custom">
      <div className="card-header bg-light border-bottom py-2 px-3  bg-dark">
        <div className="card-title ">
          {/* <span className="card-icon">
            <i className="flaticon2-chat-1 text-primary"></i>
          </span> */}
          <h5 className="mb-0 text-white">
            Activity Details <small className="text-muted mb-0 text-white">Details</small>
          </h5>
        </div>
        {/* <div className="bg-light border-bottom py-2 px-3  bg-dark">
      <h5 className="mb-0 text-white">Mobile Recharge</h5>
    </div> */}
      </div>
      <div className="card-body">
        <div className="row">
          {['Usage', 'Payment', 'Commission', 'AEPS'].map((item, index) => (
            <div key={index} className="col px-6 py-3">
              <div className="font-size-sm text-muted font-weight-bold">{item}</div>
              <div className="font-size-h4 font-weight-bolder">0.00</div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12">
            <Carousel interval={2000}> {/* Automatically changes every 2 seconds */}
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slide1}
                  alt="First slide"
                  height="450"
                  width="550"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slide2}
                  alt="Second slide"
                  height="450"
                  width="550"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetails;
