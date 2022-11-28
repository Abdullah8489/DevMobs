import React, {useEffect, useRef} from 'react';
import './technology.css'
import lottie from 'lottie-web';

const Technology = () => {
    const containerSer = useRef(null);
    const containerHTML = useRef(null);
    const containerCSS = useRef(null);
    const containerJS = useRef(null);
    const containerReact = useRef(null);
    const containerDes = useRef(null);
    const containerNode = useRef(null);
    useEffect (()=> {
    lottie.loadAnimation({
      container: containerSer.current,
      renderer:'svg',
      loop: true,
      autoplay: true,
      animationData: require('../services.json')
    })
  }, [])
  useEffect (()=> {
    lottie.loadAnimation({
      container: containerHTML.current,
      renderer:'svg',
      loop: true,
      autoplay: true,
      animationData: require('../html.json')
    })
  }, [])
  useEffect (()=> {
    lottie.loadAnimation({
      container: containerCSS.current,
      renderer:'svg',
      loop: true,
      autoplay: true,
      animationData: require('../css.json')
    })
  }, [])
  useEffect (()=> {
    lottie.loadAnimation({
      container: containerJS.current,
      renderer:'svg',
      loop: true,
      autoplay: true,
      animationData: require('../javascript.json')
    })
  }, [])
  useEffect (()=> {
    lottie.loadAnimation({
      container: containerReact.current,
      renderer:'svg',
      loop: true,
      autoplay: true,
      animationData: require('../react.json')
    })
  }, [])
  useEffect (()=> {
    lottie.loadAnimation({
      container: containerDes.current,
      renderer:'svg',
      loop: true,
      autoplay: true,
      animationData: require('../des.json')
    })
  }, [])
  useEffect (()=> {
    lottie.loadAnimation({
      container: containerNode.current,
      renderer:'svg',
      loop: true,
      autoplay: true,
      animationData: require('../node.json')
    })
  }, [])
  return (
    <div className='service'>
        <div className='serviceHeader'>
            <h1 style={{color:'black'}}>Technologies We Use
            <div className='containerSer' ref={containerSer} style={{width:'12rem', marginLeft:'4rem'}}></div>
            </h1>
        </div>
        <div className="serviceProfile1">
          <div className="serviceColumn1">
            <div className='containerHTML' ref={containerHTML} style={{width:'10rem'}}>
                {/* <h1 style={{color:'black'}}>HTML 5</h1> */}
            </div>
            <h1 style={{color:'black'}}>HTML 5</h1>

          </div>
          <div className="serviceColumn2">
            
            <div className='containerCSS' ref={containerCSS}>
                {/* <h1 style={{color:'black'}}>CSS</h1> */}
            </div>
            <h1 style={{color:'black'}}>CSS</h1>
          </div>
          <div className="serviceColumn3">  
            <div className='containerJS' ref={containerJS} >
                {/* <h1 style={{color:'black', marginBottom:'3rem'}}>JavaScript</h1> */}
            </div>
            <h1 style={{color:'black'}}>JavaScript</h1>
          </div>
        </div>
        <div className="serviceProfile1">
          <div className="serviceColumn1">
            <div className='containerReact' ref={containerReact} style={{width:'10rem'}}>
                {/* <h1 style={{color:'black'}}>HTML 5</h1> */}
            </div>
            <h1 style={{color:'black'}}>React</h1>

          </div>
          <div className="serviceColumn2" >
            <div className='containerDes' ref={containerDes}>
                {/* <h1 style={{color:'black'}}>CSS</h1> */}
            </div>
            <h1 style={{color:'black'}}>Design</h1>
          </div>
          <div className="serviceColumn3">  
            <div className='containerNode' ref={containerNode} >
                {/* <h1 style={{color:'black', marginBottom:'3rem'}}>JavaScript</h1> */}
            </div>
            <h1 style={{color:'black'}}>Node</h1>
          </div>
        </div>
        {/* <div className="serviceProfile2">
            <div className='containerReact' ref={containerReact}  style={{width:'10rem'}}>
                <h1 style={{color:'black'}}>React JS</h1>
            </div>
            
            <div className='containerDes' ref={containerDes}  style={{width:'10rem' , marginTop:'-2rem'}}>
                <h1 style={{color:'black'}}>Designing</h1>
            </div>
            
            <div className='containerNode' ref={containerNode}  style={{width:'10rem'}}>
                <h1 style={{color:'black'}}>Node JS</h1>
            </div>
        </div> */}

    </div>
  )
}

export default Technology