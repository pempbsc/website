import React from 'react'
import styles from '../styles'
import discount from '../assets/discount.png'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col x1:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[20px] h-[20px]" />
          <p className={`${styles.paragraph}`}>
            <span className="text-sm text-white">&nbsp;&nbsp;The best web3 video streaming platform ever</span>
          </p>
        </div>
        <div className="absolute z-[0] w-[40%] h-[35%] top-10 blue__gradient" />
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[40px] text-[30px] text-white ss:leading-[80px] leading-[75px]">
            Welcome to Pemp - Where Adult Content Meets Web3&nbsp;
            <span
              className="rounded-[10px] bg-blue-600"> Web3 </span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <p className={`${styles.paragraph} max-w-[650px] mt-5`}>At pemp, we're committed to providing the best streaming experience for our users. Join and experience the benifits of our streaming platform today!</p>
      </div>
    </section>
  )
}

export default Hero