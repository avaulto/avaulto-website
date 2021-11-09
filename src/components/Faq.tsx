import React from 'react'
import './Faq.css'
const Faq = () => {
    const faqs = [{
        q:'How long does it take to stake and unstake SOL?',
        a:`When you stake your SOL tokens at one of our validators the stake needs to be warmed up before it activates. The stake will be activated at the start of a new epoch.
         For one epoch to complete takes around ~48 hours. Same rules apply for unstaking. When you unstake your tokens. 
        The stake needs to be cooled down and will be released when a new epoch starts.`,
    },
        {
            q:'Is staking income automatically staked?',
            a:'Yes, staking income is compounded automatically. You will need to split the stake and withdraw the rewards for it to be liquid again.'
        },
        {
            q:'Do I maintain custody of my SOL tokens?',
            a:'Yes, you maintain full custody of your SOL tokens. When you stake your tokens your wallet address will be the Stake and Withdraw Authority Address of your stake. Only you can unstake and withdraw your tokens.'
        },
        {
            q:'Can I lose my stake or staking rewards?',
            a:`You cannot lose your stake. But when a validator is down you will not be earning staking rewards.
             We will do everything that we can to prevent validator downtime.`
        }
    ]
    return (
        <div id='faq'> 
        {faqs.map(faq => 
            <div className="faq">
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
            </div>
        )}
        </div>
    )
}

export default Faq
