import React from 'react';
import Img from "../../images/bg/es.png";
import './EasyBoard.css';
const EasyBoard = () => {
    return (
      <div className='container text-center my-5'>
        <h1>Easy-to-use platform</h1>
        <p>
          We are designing an easy-to-use platform, surrounding us by experts in
          UI/UX, with a beautiful interface grouping <br/> in one single  place all the
          tools that a investor need to maximize his profits.
            </p>
            <img style={{borderRadius: "15px"}} className='img-fluid' src={Img} alt="" />
      </div>
    );
};

export default EasyBoard;