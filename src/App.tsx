import React from 'react';
import logo from './logo.svg';
import discordLogo from './assets/imgs/discord-icon.png'
import './App.css';
import AvHeader from './components/AvHeader';
import TopBlock from './components/TopBlock';
import Networks from './components/Networks';
import AboutUs from './components/AboutUs';
import Faq from './components/Faq';

function App() {
  return (
    <div className="App">
        <AvHeader />
        <TopBlock/>
        <AboutUs/>
        <Networks className=''/>
        <Faq/>
        <footer>
          <a 
          href='https://discord.com/channels/884383956248694785/884383956248694788'
          target="_blank"
          ><img src={discordLogo}/></a>
        
        </footer>
    </div>
  );
}

export default App;
