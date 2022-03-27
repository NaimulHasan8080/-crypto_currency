import React from 'react';
import Partners1 from '../../../images/partners/partners1.png';
import Partners2 from '../../../images/partners/partners2.png';
import Partners3 from '../../../images/partners/partners3.png';
import Partners4 from '../../../images/partners/partners4.png';
import Partners5 from '../../../images/partners/partners5.png';
import Partners6 from '../../../images/partners/partners6.png';
import Partners7 from '../../../images/partners/partners7.png';
import Partners8 from '../../../images/partners/partners8.png';
import Partners9 from '../../../images/partners/partners9.png';
import Partners10 from '../../../images/partners/partners10.png';

const Partners = () => {
    return (
        <div className='text-white container py-3'>

            <h2 className='blue-chip'>Partners Tokens List </h2>

            <div >
                <div className="row row-cols-1  row-cols-md-3 row-cols-lg-5 g-3 blue-chip-section my-3 py-3">
                    <div className="col">
                        <div className="card">
                            <img src={Partners1} className="card-img-top mask-image mx-auto mt-5 mb-3" alt="..." />
                            <button className='text-uppercase chip-button mx-auto rounded-pill mb-4'>SHIBA</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Partners2} className="card-img-top mask-image mx-auto mt-5 mb-3" alt="..." />
                            <button className='text-uppercase chip-button mx-auto rounded-pill mb-4'>BABYDOGE</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Partners3} className="card-img-top mask-image mx-auto mt-5 mb-3" alt="..." />
                            <button className='text-uppercase chip-button mx-auto rounded-pill mb-4'>cake</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Partners4} className="card-img-top mask-image mx-auto mt-5 mb-3" alt="..." />
                            <button className='text-uppercase chip-button mx-auto rounded-pill mb-4'>SAFEMOON</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Partners5} className="card-img-top mask-image mx-auto mt-5 mb-3" alt="..." />
                            <button className='text-uppercase chip-button mx-auto rounded-pill mb-4'>Floki</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Partners6} className="card-img-top mask-image mx-auto mt-5 mb-3" alt="..." />
                            <button className=' chip-button mx-auto rounded-pill mb-4'>Uni</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Partners7} className="card-img-top mask-image mx-auto mt-5 mb-3" alt="..." />
                            <button className='chip-button mx-auto rounded-pill mb-4'>Poocoin</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Partners8} className="card-img-top mask-image mx-auto mt-5 mb-3" alt="..." />
                            <button className='chip-button mx-auto rounded-pill mb-4'>Bunny</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Partners9} className="card-img-top mask-image mx-auto mt-5 mb-3" alt="..." />
                            <button className='chip-button mx-auto rounded-pill mb-4'>Bogged</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Partners10} className="card-img-top mask-image mx-auto mt-5 mb-3" alt="..." />
                            <button className='chip-button mx-auto rounded-pill mb-4'>Dextools</button>
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

export default Partners;