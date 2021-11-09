import React from 'react'
import logo from '../assets/imgs/logoWtext.png'
import './AvHeader.css'
const AvHeader = () => {
    function scrolltoEl(elName: any) {
        var element:any = document.getElementById(elName);
        element.scrollIntoView({behavior: "smooth"});
    }
    return (
        <header className="App-header">
            <div id="logo">
                <img src={logo} alt="img" />
            </div>
            <nav>
                <span onClick={ () => scrolltoEl('abt-us')} >what we do</span>
                <span onClick={ () => scrolltoEl('faq')}>faq</span>
                {/* <span>the team</span> */}
                <button className='avaulto-btn' onClick={ () => scrolltoEl('networks')}>networks</button>
            </nav>
        </header>
    )
}

export default AvHeader
