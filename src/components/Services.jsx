import React from 'react';
import './services.css';


const Services = () => {
  return (
    <div className='services'>
        <h1 className='serviceHeader'>
            Services We Provide
        </h1>
        <div className="serviceOne">
            <div className="typeSec">
                <h1>Fully Responsive Websites</h1>
                <p> We provide our customers with an interactive fully responsive websites <br />
                that enables creation of an intuitive and business concentric user <br />
                experiences for web applications or website.
                </p>
            </div>
            <div className="svgSection">
                <img src="/front.svg" alt="front" />
            </div>
        </div>
        <div className="serviceTwo">
            <div className="svgSection">
                <img src="/landing.svg" alt="landing" />
            </div>
            <div className="typeSec">
                <h1>Prodigious Landing Pages</h1>
                <p> We provide our customers with an interactive fully responsive websites <br />
                that enables creation of an intuitive and business concentric user <br />
                experiences for web applications or website.
                </p>
            </div>    
        </div>
        <div className="serviceThree">
            <div className="typeSec">
                <h1>Bug Fixing</h1>
                <p> Effective bug fixing can not only makes your website more appealing to users, <br />
                    but also benefit the reputation of the company that developed it. <br />
                    If long-term success is what you’re after, thorough bug fixing should <br />
                    be a top priority and this is what our concern is to satisfy our customers.
                </p>
            </div>
            <div className="svgSection">
                <img src="/bug.svg" alt="bug" />
            </div>    
        </div>


    </div>
  )
}

export default Services