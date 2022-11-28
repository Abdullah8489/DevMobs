import React, { useRef, useEffect } from 'react';
import lottie from 'lottie-web';
import './why.css';

const Why = () => {
    const whyAni = useRef(null)
    useEffect (()=> {
        lottie.loadAnimation({
          container: whyAni.current,
          renderer:'svg',
          loop: true,
          autoplay: true,
          animationData: require('../why.json')
        })
      }, [])
  return (
    <div className="why-wrapper">
      <div className='why'>
        <div className='whyTpo' style={{color:'white'}}>
          <h1>Tum logon pe bharosa kiyu krein bhai? </h1> <br />
          Our goal is simple, we want to maximize your earnings over the ad spend that <br /> 
          you set aside for your business. We have an in-depth understanding of how the 
          <br /> digital space operates with-in Pakistan. <br />
          We know that you guys haven’t looted the money that you are spending with and <br />
          is your hard earned money, hence, we respect your budget. <br/>
          Our Scope of work items are simple and our milestones are realistic. <br />
          Ham sabz bagh deekhanay walo main se nahi hain.
        </div>
        <div className='whyAni' ref={whyAni} style={{width:'20rem'}}>

        </div>
      </div>
      <div class="custom-shape-divider-top-1662023038">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
    </svg>
</div>
    </div>
    
  )
}

export default Why