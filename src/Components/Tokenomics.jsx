import React from 'react'
import styles from '../styles'

const Tokenomics = () => {
  return (
    <section id="tokenomics">
        <div className="items-center justify-center text-center">
          <h2 className={`${styles.heading2} mt-20 text-gradient`}>Tokenomics</h2>
        </div>
      <div className="root2">
        <div className="container2 bg-gray-800 mt-24">
          <h1 className="title-text text-2xl text-white">Token Distribution - XPEMP</h1>
          <div className="skill-box">
            <span className="title">Sale <span className="text-lime-400">20.0%</span></span>
            <div className="skill-bar">
              <span className="skill-per sale">
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">Liquidity  <span className="text-yellow-200">20.0%</span></span>
            <div className="skill-bar">
              <span className="skill-per liquidity">
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">Treasury <span className="text-lime-600">20.0%</span></span>
            <div className="skill-bar">
              <span className="skill-per Treasury">
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">Airdrop <span className="text-cyan-200">5.0%</span></span>
            <div className="skill-bar">
              <span className="skill-per airdrop">
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">Team (vested) <span className="text-cyan-400">14.0%</span></span>
            <div className="skill-bar">
              <span className="skill-per team">
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">Contributor. (vested) <span className="text-blue-400">6.0%</span></span>
            <div className="skill-bar">
              <span className="skill-per contributor">
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">Development <span className="text-yellow-500">15.0%</span></span>
            <div className="skill-bar">
              <span className="skill-per development">
              </span>
            </div>
          </div>
          <div className="total bg-gradient-to-br from-slate-100 to-blue-600">
          <h1>Total Supply <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-blue-600">1 B</span></h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tokenomics