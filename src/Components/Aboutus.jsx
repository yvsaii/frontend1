import React from 'react';
import './Aboutus.css';
import Poster3 from '../Assets/poster3.jpg';
import Poster4 from '../Assets/poster4.webp';
import Footer from './Footer'; // default export
import Header from '../Components/Header'; // default export

export default function Aboutus() {
    return (
        <div>
            <Header />

            <div className='aboutus'>
                <div className="reviews">

                    {/* First Section */}
                    <div className="review">
                        <div className="part1">
                            <img src={Poster3} alt="What We Do" />
                        </div>
                        <div className="part2">
                            <h2>What We Do</h2>
                            <p>
                                We specialize in providing tailored carbon offsetting strategies
                                for small businesses and sole traders, alongside offering individuals
                                the opportunity to make a difference. Our services are designed to
                                calculate, reduce, and offset carbon emissions, turning ecological
                                responsibility into a seamless part of daily operations and lifestyle choices.
                            </p>
                        </div>
                    </div>

                    {/* Second Section */}
                    <div className="review">
                        <div className="part2">
                            <h2>Highest Quality</h2>
                            <p>
                                Stay assured of the highest quality on your orders.
                                We combine soil testing, traditional farming methods,
                                and modern technology to bring out the highest nutrition
                                in our produce, which then undergoes quality checks before
                                reaching your doorstep.
                            </p>
                        </div>
                        <div className="part1">
                            <img src={Poster4} alt="Highest Quality" />
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
}
