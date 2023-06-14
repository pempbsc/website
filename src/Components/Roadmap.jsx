import React from 'react'
import styles from '../styles'

const Roadmap = () => {
  return (
<section id="roadmap">
    <div className={`${styles.heading2} mt-20 text-gradient text-center`}>ROADMAP</div>
    <div class="text-white py-8">
    <div class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
      <div class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
        <p class="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 text-gradient">Working Process of Pemp ecosystem</p>
        <p class="text-sm md:text-base text-gray-50 mb-4">
          
        </p>
      </div>
      <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
        <div class="container mx-auto w-full h-full">
          <div class="relative wrap overflow-hidden p-10 h-full">
            <div class="border-2-2 border-yellow-555 absolute h-full border sudo1"></div>
            <div class="border-2-2 border-yellow-555 absolute h-full border sudo2"></div>
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="order-1 w-5/12 px-1 py-4 text-right">
                <p class="mb-3 text-base text-blue-500">2023 - Q1</p>
                <h4 class="mb-3 font-bold text-lg md:text-2xl">Research</h4>
                <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                Conducting research on the porn industry, including platforms like Pornhub and OnlyFans, to understand their revenue generation strategies, and exploring opportunities to enhance our product and increase profitability.
                </p>
              </div>
            </div>
            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="order-1  w-5/12 px-1 py-4 text-left">
                <p class="mb-3 text-base text-blue-500">2023 - Q2</p>
                <h4 class="mb-3 font-bold text-lg md:text-2xl">launch of Pemp</h4>
                <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                Creating the Pemp ecosystem involves the development of various components, including the creation of the Pemp and XPemp tokens, implementing verification and auditing mechanisms, and more.
                </p>
              </div>
            </div>
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="order-1 w-5/12 px-1 py-4 text-right">
                <p class="mb-3 text-base text-blue-500">2023 - Q3</p>
                <h4 class="mb-3 font-bold text-lg md:text-2xl">V1 streaming platform</h4>
                <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                Pemp project will launch its V1 streaming platform. The V1 streaming platform is a pivotal milestone in the project's roadmap, as it marks the official debut of the platform to users. This version of the streaming platform will offer a range of features and functionalities to provide an immersive and enjoyable adult content viewing experience.
                </p>
              </div>
            </div>

            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>

              <div class="order-1  w-5/12 px-1 py-4">
                <p class="mb-3 text-base text-blue-500">2023 - Q4</p>
                <h4 class="mb-3 font-bold  text-lg md:text-2xl text-left">V2 streaming platform</h4>
                <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                we will be launching the V2 streaming platform as a major upgrade to the Pemp ecosystem. The V2 streaming platform will introduce exciting new features, including the integration of Creator-Owned Collections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </section>
  )
}

export default Roadmap