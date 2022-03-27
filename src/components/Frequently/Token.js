import React from "react";

const Token = () => {
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
            What are the usage of the $PTR token?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingOne"
        >
          <div class="accordion-body">
            <p>
              The $PTR token is a deflationary BEP20 tokens, which will have the
              following usages: — Payment: buying on the NFT marketplace, or in
              our e-commerce or any other future product or service. Fiat
              payment will be allowed, immediately converted to $PTR tokens. —
              Staking: the tokens locked for a given period will grant access to
              all products and services. — Holding: get more privileges than
              with simple staking by holding for a longer period of time. The
              longer your stake, the more benefits you get. — Rewards: 3% on
              each transaction for holders to Diversify your portofolio with any
              coins or token in our list . — Update & Evolution: as new features
              come to our platform in the future, we will use $PTR token in new
              ways
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
            Will I get benefits by staking $PTR tokens?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingTwo"
        >
          <div class="accordion-body">
            <p>
            Yes it is possible through our staking program. Users are getting rewards by holding and by staking pool and give us access to all our services for free. Beyond the free benefits of the staking program or if not enough tokens are staked, when a user makes a subscription, the additional tokens he is spending are locked for the subscription duration. Fiat payments are also possible for the products but automatically and immediately converted to $PTR tokens and then locked for the subscription duration. This process ensures that the $PTR tokens maintain a high value while allowing people who are more comfortable to pay in fiat to use the services still, hence touching a broader public.
            </p>
            <p>For instance, if a user subscribed to a period for six months, then the tokens are locked for six months and then returned to $PTR Smart Contract at the end of the subscription</p>
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
           Will I get benefits by holding PTR tokens?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingThree"
        >
          <div class="accordion-body">
            <p>
            Yes it is possible through our HODL program. To reduce the token velocity and encourage users to hold tokens in the long term, we will propose a Great Universal Reward Protocol., the first dividend system designed to diversify your cryptocurrency portfolio by holding $PTR to promotes holding by generating passive income daily and monthly for Holders.
            </p>
            <p>
            You can chose any coins in our bleu chip for rewards Or any partners tokens. that will reward them for keeping their $PTR tokens. Depending on how much the user is holding $PTR tokens, they will get rewards. This program is complementary to the staking program: the longer tokens are staked, greater the benefits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
