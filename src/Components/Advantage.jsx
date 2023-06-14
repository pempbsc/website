import React from 'react'
import styles from '../styles'

const Advantage = () => {
  return (
    <div className={`mt-20`} id="features">
        <div>
          <h2 className={`${styles.heading2} font-mono flex items-center justify-center text-center mt-[24px] text-transparent text-8xl bg-clip-text text-gradient`}>Features</h2>
        </div>
        <div className="flex-1 flex-col x1:px-0 sm:px-16 px-6">
          <div className="flex mt-12 space-x-10 text-center">
            <div className="block bg-gradient-to-br from-sky-500 to-blue-400 w-96 border rounded-lg shadow">
              <h2 className="text-blue-100 font-semibold xs:text-[20px] text-[20px] xs:leading-[53px] leading-[43px] font-black">Exclusive Content</h2>
              <p className='font-semibold text-slate-900'>Pemp offers a vast library of exclusive adult content, providing users with a wide range of videos, photos, and interactive experiences that are not available on mainstream platforms.</p>
            </div>

            <div className="block bg-gradient-to-br from-sky-500 to-blue-400 w-96 border rounded-lg shadow">
              <h2 className="text-blue-100 font-semibold xs:text-[20px] text-[20px] xs:leading-[53px] leading-[43px] font-black">NFT Integration</h2>
              <p className='font-semibold text-slate-900'>Pemp utilizes Non-Fungible Tokens (NFTs) to enhance the user experience. By connecting their wallets and owning Pemp NFTs, users gain access to premium content, unlocking a personalized and exclusive viewing experience.</p>
            </div>

            <div className="block bg-gradient-to-br from-sky-500 to-blue-400 w-96 border rounded-lg shadow">
              <h2 className="text-blue-100 font-semibold xs:text-[20px] text-[20px] xs:leading-[53px] leading-[43px] font-black">Enhanced Privacy and Security</h2>
              <p className='font-semibold text-slate-900'>Pemp prioritizes user privacy and security by implementing robust encryption protocols, secure payment systems, and anonymous browsing options. Users can enjoy adult content without compromising their privacy or personal information.</p>
            </div>
          </div>

          <div className="flex mt-10 text-center space-x-10">
            <div className="block bg-gradient-to-br from-sky-500 to-blue-400 w-96 border rounded-lg shadow">
              <h2 className="text-blue-100 font-semibold xs:text-[20px] text-[20px] xs:leading-[53px] leading-[43px] font-black">Interactive Features</h2>
              <p className='font-semibold text-slate-900'>Pemp offers interactive features that engage users in unique ways. This includes live streaming events, interactive chats, virtual reality experiences, and interactive games, creating an immersive and interactive environment for adult entertainment.</p>
            </div>

            <div className="block bg-gradient-to-br from-sky-500 to-blue-400 w-96 border rounded-lg shadow">
              <h2 className="text-blue-100 font-semibold xs:text-[20px] text-[20px] xs:leading-[53px] leading-[43px] font-black">Content Curation and Recommendation</h2>
              <p className='font-semibold text-slate-900'>Pemp employs advanced algorithms and user preferences to curate personalized content recommendations. Users can discover new content based on their interests, preferences, and viewing history, ensuring a tailored and satisfying experience.</p>
            </div>

            <div className="block bg-gradient-to-br from-sky-500 to-blue-400 w-96 border rounded-lg shadow">
              <h2 className="text-blue-100 font-semibold xs:text-[20px] text-[20px] xs:leading-[53px] leading-[43px] font-black">Creator-Owned Collections</h2>
              <p className='font-semibold text-slate-900'>Pemp empowers adult content creators by allowing them to create their own collections of NFTs. Creators can tokenize their content and sell it directly to their fans, enabling them to monetize their work and establish direct connections with their audience.</p>
            </div>
          </div>

        </div>
    </div>
       
  )
}

export default Advantage