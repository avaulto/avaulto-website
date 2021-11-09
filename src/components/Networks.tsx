import React, { useEffect, useRef, useState } from 'react'
import solanaLogo from '../assets/imgs/solanaLogo.png'
import minaLogo from '../assets/imgs/minaLogo.png'
import solanaLogoActive from '../assets/imgs/solanaLogoActive.png'
import minaLogoActive from '../assets/imgs/minaLogoActive.jpeg'
import './Networks.css'
interface NetworksProps {
  className: string;
}
const Networks = (props?: NetworksProps) => {
  const calcCoinROI = (amount: number, days: number) => {
    return ((7.5 / 100) * amount / days * 0.9).toFixed(2);
  }
  const [amount, setAmount]: any = useState(0)
  const [isActive, setIsActive] = useState(0);
  const toggleIsActive = (i: any) => {
    setIsActive(i);
  };
  const networkList = [{
    name: 'solana',
    payoutFreq: '1 epoch(~2.5 days)',
    expectedRewardRate: '7.1%',
    commition: '10%',
    unbodingPeriod: 'end of epoch',
    validatorAddress: '7K8DVxtNJGnMtUY1CQJT5jcs8sFGSZTDiG7kowvFpECh',
    img: solanaLogo,
    activeImg: solanaLogoActive
  },
  {
    name: 'mina',
    payoutFreq: '1 epoch(~14 days)',
    expectedRewardRate: '12-24%',
    commition: '0%',
    unbodingPeriod: 'during next epoch',
    validatorAddress: 'SOON',
    img: minaLogo,
    activeImg: minaLogoActive
  }]
  const [selectNetwork, setselectNetwork] = useState(networkList[0])

  useEffect(() => {
    console.log(selectNetwork)
    // return () => {
    //   cleanup
    // }
  }, [selectNetwork])
  return (
    <div id='networks'>
      <h2 className='brand-title'>networks</h2>
      <ul id='network-icons'>
        {networkList.map((network, i) =>
          <li 
           onClick={() => {
            setselectNetwork(network)
            toggleIsActive(i)
          }}><img 
          className={isActive === i ? 'active' : ""}
          src={network.img} /></li>
        )}
      </ul>
      <div id='support-networks'>
       
        <div className='group'>
          <div className='block'>
            <div className='block-title'>expected reward rate</div>
            <div className='block-info'>{selectNetwork.expectedRewardRate}</div>
          </div>
          <div className='block'>
            <div className='block-title'>commition</div>
            <div className='block-info'>{selectNetwork.commition}</div>
          </div>
        </div>
        <div className='group' style={{ flex:2}}>
          <div className='block'>
          <img src={selectNetwork.img} alt='network-img'/>
          <div id='network-name'>{selectNetwork.name}</div>
          <div id='network-status'>{}</div>
          
         {selectNetwork.name == 'solana' && <button id='stake-btn' 
          onClick={() => window.open('https://solanabeach.io/validator/7K8DVxtNJGnMtUY1CQJT5jcs8sFGSZTDiG7kowvFpECh','_blank')}>Stake on <span>Solana Beach</span></button>
         }
          <small>address: {selectNetwork.validatorAddress}</small>
          </div>
        </div>
        <div className='group'>
          <div className='block'>
            <div className='block-title'>Payout Frequency</div>
            <div className='block-info'>{selectNetwork.payoutFreq}</div>
          </div>
          <div className='block'>
            <div className='block-title'>Unbonding period</div>
            <div className='block-info'>{selectNetwork.unbodingPeriod}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Networks
