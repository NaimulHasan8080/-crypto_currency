import React from 'react';
import MobilePicture from '../../images/mobile/mobile1.png'

const Mobile = () => {
    return (
      <div className="my-3 mobile-section container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
          <div className="col">
            <div className="card mobile_card h-100">
              <img src={MobilePicture} className="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col ">
            <div className="card mobile_card h-100 d-flex align-items-center justify-content-center">
              <div className="mobile">
                <h6>Don't miss our app</h6>
                <h2>PoorToRich Mobile App</h2>
                <h6>
                  Investors can access their portfolio from any mobile device
                  and track their investments and earnings.
                </h6>
                <h2>Available soon</h2>
                <div className='mt-5'>
                  <button className="buy">App Store</button>
                  <button className="buy">Play Store</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Mobile;