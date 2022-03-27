import React from 'react';
import './RoadMap.css'
const RoadMap = () => {
    return (
      <div className="road_top">
        <div className="text-center">
          <h2 className="text-uppercase">Roadmap</h2>
          <p className="roadmap_text">
            Roadmap will continuously change as we deliver and expand on our
            vision.
          </p>
        </div>
        <section className="ps-timeline-sec">
          <div className="container">
            <ol className="ps-timeline">
              <li>
              
                <div className="ps-bot-1">
                  <h4 className="road_title">2022 Boarding List</h4>
                  <p>Build team and communities</p>
                  <p>Launch social networks</p>
                  <p>Launch website</p>
                  <p>Free giveaway</p>
                  <p>Token deployment</p>
                  <p>Kyc doxxed team</p>
                  <p>Audit contract</p>
                  <p>5000 telegram members</p>
                  <p>Private sale</p>
                  <p>Ads on voting platform</p>
                  <p>Public presale</p>
                  <p> Pancakeswap launch</p>
                </div>
                <span className="ps-sp-top">
                  <strong>Q1</strong>
                </span>
              </li>
              <li>
                <div className="ps-top-1">
                  <h4 className="road_title">Imminent Departure</h4>
                  <p>Listing on cmc & cg fast track</p>
                  <p>Start expansive marketing</p>
                  <p>Crypto influencers</p>
                  <p>Listing on gate io</p>
                  <p>Launch our e-commerce</p>
                  <p>Certik audit</p>
                </div>
                <span className="ps-sp-bot">
                  <strong>Q2</strong>
                </span>
              </li>
              <li>
                <div className="ps-bot-2">
                  <h4 className="road_title">Destination Moon</h4>
                  <p>Listing on bitmart</p>
                  <p>Launch staking platform</p>
                  <p>Listing on hotbit</p>
                  <p>Add debit / credit cards</p>
                  <p>Airdrop launchpad</p>
                  <p>Launch copy farming</p>
                  <p>Launch nft real products</p>
                  <p>Launch nft marketplace</p>
                </div>
                <span className="ps-sp-top">
                  <strong>Q3</strong>
                </span>
              </li>
              <li>
                <div className="ps-top-2">
                  <h4 className="road_title">Destination Neptune</h4>
                  <p>Partnerships compaigns</p>
                  <p>Website update v2</p>
                  <p>Launch ai trading bot</p>
                  <p>Launch copy trading</p>
                  <p>Listing on kucoin</p>
                  <p>Release full dapp</p>
                  <p> Launch Mobile app</p>
                </div>
                <span className="ps-sp-bot">
                  <strong>Q4</strong>
                </span>
              </li>
            </ol>
          </div>
        </section>
      </div>
    );
};

export default RoadMap;