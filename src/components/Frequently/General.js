import React from 'react';
import './Frequently.css';
const General = () => {
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
                   What is an ICO?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div class="accordion-body">
                    <p>
                    An ICO is an Initial Coin Offering in which a company issues a token on the blockchain and sells it to raise funds and finance a project. This is an excellent opportunity for early adopters and enthusiasts to participate actively in a project by buying the tokens.
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
                    What cryptocurrencies can I use to purchase $PTR tokens?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div class="accordion-body">
                    <p>
                    You can purchase $PTR token either with BNB or BUSD. You will need a decentralized wallet with the Metamask browser extension in order to proceeed with the token sale.
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
                   How can I participate in the ICO token sale?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div class="accordion-body">
                    <p>
                    Once the ICO is officially launched, you can connect your wallet. Then you will be able to buy tokens at the price corresponding to the current round using metamask.
                    </p>
                    <p>
                    Please note that you should can send BNB and BUSD to the ICO wallet addresses. You should use only metamask to interact with the smart contracts and buy $PTR tokens.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item items">
                <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFour"
                  >
                   When will the ICO token be issued?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFour"
                >
                  <div class="accordion-body">
                    <p>
                    The whole ICO process is automated through our audited Smart Contracts. Hence, you will receive the allocation of your token as soon as few hours before the Launch. finally token will be in your wallet.
                    </p>                    
                  </div>
                </div>
              </div>
            </div>
    );
};

export default General;