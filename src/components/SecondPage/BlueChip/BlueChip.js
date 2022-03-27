import React from 'react';
import Mask1 from '../../../images/Bluechip/mask1.png';
import Mask2 from '../../../images/Bluechip/mask2.png';
import Mask3 from '../../../images/Bluechip/mask3.png';
import Mask4 from '../../../images/Bluechip/mask4.png';
import Mask6 from '../../../images/Bluechip/mask6.png';
import Mask5 from '../../../images/Bluechip/mask5.png';
import Mask7 from '../../../images/Bluechip/mask7.png';
import Mask8 from '../../../images/Bluechip/mask8.png';
import Mask9 from '../../../images/Bluechip/mask9.png';
import Mask10 from '../../../images/Bluechip/mask10.png';
import Mask11 from '../../../images/Bluechip/mask11.png';
import Mask12 from '../../../images/Bluechip/mask12.png';
import Mask13 from '../../../images/Bluechip/mask13.png';
import Mask14 from '../../../images/Bluechip/mask14.png';
import Mask15 from '../../../images/Bluechip/mask15.png';

const BlueChip = () => {
    return (
        <div className='text-white container py-3'>
            <h3 className='currency-title'>CURRENCY SELECTOR : <span className='currency-body'> Change your reward token. Default currency paid in <span className='text-uppercase'>$ptr</span>. (Rewards sent in Binance pegged tokens.)</span></h3>
            <h2 className='blue-chip'>Blue Chip List</h2>

            <div >
                <div className="row row-cols-1  row-cols-md-3 row-cols-lg-5 g-3 blue-chip-section my-3 py-3">
                    <div className="col">
                        <div className="card">
                            <img src={Mask2} className="card-img-top mask-image mx-auto mt-5 mb-3" alt="..." />
                            <button className='text-uppercase chip-button mx-auto rounded-pill mb-4'>btc</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Mask1} className="card-img-top mask-image mx-auto mt-5 mb-3" alt="..." />
                            <button className='text-uppercase chip-button mx-auto rounded-pill mb-4'>eth</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Mask3} className="card-img-top mask-image mx-auto mt-5 mb-3" alt="..." />
                            <button className='text-uppercase chip-button mx-auto rounded-pill mb-4'>bnb</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Mask4} className="card-img-top mask-image mx-auto mt-5 mb-3" alt="..." />
                            <button className='text-uppercase chip-button mx-auto rounded-pill mb-4'>usdt</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Mask5} className="card-img-top mask-image mx-auto mt-5 mb-3" alt="..." />
                            <button className='text-uppercase chip-button mx-auto rounded-pill mb-4'>sol</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Mask7} className="card-img-top mask-image mx-auto mt-5 mb-3" alt="..." />
                            <button className='text-uppercase chip-button mx-auto rounded-pill mb-4'>dot</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Mask8} className="card-img-top mask-image mx-auto mt-5 mb-3" alt="..." />
                            <button className='text-uppercase chip-button mx-auto rounded-pill mb-4'>busd</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Mask9} className="card-img-top mask-image mx-auto mt-5 mb-3" alt="..." />
                            <button className='text-uppercase chip-button mx-auto rounded-pill mb-4'>link</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Mask10} className="card-img-top mask-image mx-auto mt-5 mb-3" alt="..." />
                            <button className='text-uppercase chip-button mx-auto rounded-pill mb-4'>xrp</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Mask11} className="card-img-top mask-image mx-auto mt-5 mb-3" alt="..." />
                            <button className='text-uppercase chip-button mx-auto rounded-pill mb-4'>ada</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Mask15} className="card-img-top mask-image mx-auto mt-5 mb-3" alt="..." />
                            <button className='text-uppercase chip-button mx-auto rounded-pill mb-4'>matic</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Mask13} className="card-img-top mask-image mx-auto mt-5 mb-3" alt="..." />
                            <button className='text-uppercase chip-button mx-auto rounded-pill mb-4'>cro</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Mask14} className="card-img-top mask-image mx-auto mt-5 mb-3" alt="..." />
                            <button className='text-uppercase chip-button mx-auto rounded-pill mb-4'>luna</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Mask6} className="card-img-top mask-image mx-auto mt-5 mb-3" alt="..." />
                            <button className='text-uppercase chip-button mx-auto rounded-pill mb-4'>doge</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Mask12} className="card-img-top mask-image mx-auto mt-5 mb-3" alt="..." />
                            <button className='text-uppercase chip-button mx-auto rounded-pill mb-4'>avax</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center chip-text'>
                <p>Note: Please do not change your reward token more than once per hour & check back for updates. You can verify your rewards by opening </p>
                <p > bscscan.com, pasting in your wallet address and checking your BEP-20 & internal transactions.</p>
                <h4 className='fw-bold text-uppercase'>• MORE REWARD TOKEN COMING SOON •</h4>
            </div>
        </div>
    );
};

export default BlueChip;