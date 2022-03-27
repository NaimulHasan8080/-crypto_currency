import React from 'react';
import Connect1 from '../../../images/connect/connect1.png';
import Connect2 from '../../../images/connect/connect2.png';
import Connect3 from '../../../images/connect/connect3.png';
import Connect4 from '../../../images/connect/connect4.png';

const Connects = () => {
    return (
      <div className="container mt-5">
        <h2 className="connect-title text-center text-uppercase">
          CONNECT YOUR WALLET <br /> TO USE THE DASHBOARD
        </h2>
        <div className="row g-4 p-3">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="h-75 text-white ">
              <h5 className="hold-header ">Hold & Earn Manager</h5>
              <p>
                Connect Your wallet to view real time stats on your Dashboard
                Manager. If you sell any tokens within the dispersal period your
                rewards will be forfeited for that period .{" "}
              </p>

              <p>
                To verify your rewards, check both your internal & BEP-20
                transactions on BscScan. Rewards are claimed automatically,
                please allow up to 24 hours.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2 ">
            <div className=" h-auto  connect-card rounded text-center py-4">
              <h5 className="text-black connect_text">Your Holdings</h5>
              <img
                src={Connect1}
                className="card-img-top connect-image py-1 "
                alt="..."
              />
              <h5 className="mt-4 text-black connect_text">0.0 PTR</h5>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2">
            <div className="h-auto  connect-card rounded text-center py-4">
              <h5 className=" text-black text-center connect_text">
                Total Rewards
              </h5>
              <img
                src={Connect2}
                className="card-img-top connect-image  py-1"
                alt="..."
              />
              <h5 className="mt-4 text-black connect_text">0.000000 BNB</h5>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2">
            <div className="h-auto  connect-card rounded text-center py-4">
              <h5 className="text-black connect_text">Income Pending</h5>
              <img
                src={Connect3}
                className="card-img-top connect-image  py-1"
                alt="..."
              />
              <h5 className="mt-4 text-black connect_text">0 Position</h5>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2 ">
            <div className="h-auto  connect-card rounded text-center py-4">
              <h5 className="text-black connect_text">Next payment</h5>
              <img
                src={Connect4}
                className="card-img-top connect-image  py-1"
                alt="..."
              />
              <h5 className="mt-4 text-black connect_text">0.00000000 BNB</h5>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Connects;