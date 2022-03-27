import React from 'react';

const PrivateSale = () => {
    return (
        <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              What is the overall process of this ICO?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body">
              <p>
              The $PTR token sale will start on Tuesday 1 Mars 2022, followed by Public Sale in Thursday 3 Mars. This is an excellent opportunity for early adopters and enthusiasts to participate actively in the project by buying the $PTR tokens.
              </p>              
            </div>
          </div>
        </div>
        <div class="accordion-item items">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              What are the different phases of this ICO?  
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div class="accordion-body">
              <p>
              The ICO sale followed by one Private Sale round and a final Public round. After all the tokens get sold for one round, the next round starts. During each phase a certain amount of tokens is sold at a given price. Please refer to our White Paper for the complete details of this process.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item items">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
             When and where will the $PTR token get listed?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div class="accordion-body">
              <p>
              As of now, the listing on Pancakeswap has been confirmed. We are also in discussion with many other exchanges, which we will share at the end of the ICO.
              </p>
              <p>
                For instance, if a user subscribed to a period for six
                months, then the tokens are locked for six months and then
                returned to $PTR Smart Contract at the end of the
                subscription
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PrivateSale;