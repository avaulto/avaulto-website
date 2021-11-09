import React, { useEffect, useRef } from 'react'
import './TopBlock.css'

declare const VANTA: any;
const TopBlock = () => {
    let ventaRef = useRef(null);
    useEffect(() => {
        console.log(VANTA)
        // Update the document title using the browser API
        VANTA.TOPOLOGY({
            el: "#top-block",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xb3b3b3,
            backgroundColor: 0x0
          })
      });

    return (
        <div id='top-block' ref={ventaRef}>
             <h1>GROW YOUR <br/>assets</h1>

                <p>be a part of financial next generation & help securing the network<br/> and get incetevies by the protocol</p>

    
                {/* <p style={{fontWeight:100}}>securing POS networks</p> */}
                               {/* <button></button> */}
  
            {/* <div id="right-area">
                <Lottie
                    options={defaultOptions}
                    height={400}
                    width={400}
                />
            </div> */}
        </div>
    )
}

export default TopBlock
