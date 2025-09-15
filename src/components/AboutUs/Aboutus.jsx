import React from 'react'
import aboutKibbutzUrl from '../../assets/AboutKibbutz.svg'
import missionUrl from '../../assets/MISSION.svg'

const Aboutus = () => {
    return (        
        <div className="overflow-hidden">
           <div className="flex items-center justify-center md:gap-15">
               <div>
                <img src={aboutKibbutzUrl} alt="About Kibbutz" className="w-auto h-120" />
                </div> 
                <div className="flex flex-col items-center justify-center w-1/2">
                    <div className="text-7xl font-bold text-center gradient-text bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-blue-600 pt-10 pb-7 mt-17">
                        About APtech
                    </div>
                    <div className="text-4xl text-center text-gray-900">
                    We've Been Thriving for 8 Years In The Developer Area.
                    </div>
                    <div className="text-2xl text-center text-gray-600 pt-6 mb-30">
                    We've been thriving in the developer space for the past six years. The Kibbutz Developers Company offers a wide range of technical solutions to professionals and students, including website and application development, web & graphic design, digital marketing, and unique services such as bulk SMS & emails, toll-free numbers, and missed call alerts.
                    </div>
                </div>
           </div>

           <div>
            <div className="bg-black h-auto w-screen">
                <div className="flex items-center justify-between px-8 py-10 pt-20">
                    <div className="text-6xl font-bold text-center text-white">Why Choose <div className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-blue-600">APtech?</div></div>
                    <div>
                        <img src="/src/assets/logo.png" alt="" srcset="" />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center"> 
                <div className="flex items-center justify-center gap-4 pt-10 py-2">
                     <div className='border-0 p-3 rounded-md bg-gray-950  h-34 flex flex-col justify-center hover:bg-gradient-to-r hover:from-pink-400 hover:to-blue-600 transition-all duration-300 cursor-pointer'>
                         <div className='text-white text-2xl font-bold hover:text-white'>Trusted Expertise</div>
                         <div className='text-white text-lg hover:text-white'>Our team of developers, designers, and strategists bring a wealth of experience in cutting-edge technologies.</div>
                     </div>
                     <div className='border-0 rounded-md bg-gray-950 w-1/3 h-34 flex flex-col justify-center hover:bg-gradient-to-r hover:from-pink-400 hover:to-blue-600 transition-all duration-300 cursor-pointer p-3'>
                         <div className='text-white text-2xl font-bold hover:text-white'>Innovative Solutions</div>
                         <div className='text-white text-lg hover:text-white'>We combine creativity with technical know-how to bring your vision to life.</div>
                     </div>
                </div>
                <div className="flex items-center justify-center gap-4 py-2 w-[122%] pb-20 mb-10">
                     <div className='border-0 rounded-md bg-gray-950 w-1/3 h-34 flex flex-col justify-center hover:bg-gradient-to-r hover:from-pink-400 hover:to-blue-600 transition-all duration-300 cursor-pointer p-3'>
                         <div className='text-white text-2xl font-bold hover:text-white'>Quality Assurance</div>
                         <div className='text-white text-lg hover:text-white'>Our rigorous testing and refinement processes guarantee quality that meets industry standards.</div>
                     </div>
                     <div className='border-0 p-3 rounded-md bg-gray-950 h-34 flex flex-col justify-center hover:bg-gradient-to-r hover:from-pink-400 hover:to-blue-600 transition-all duration-300 cursor-pointer'>
                         <div className='text-white text-2xl font-bold hover:text-white'>Transparent Collaboration</div>
                         <div className='text-white text-lg hover:text-white'>With open communication and clear goals, we ensure alignment at every stage of the process.</div>
                     </div>
                </div>
                </div>
            </div>
           </div>
           <div className="mt-20 mb-20">
             <div className="flex items-center justify-between px-8">
                <div>
                    <img src={missionUrl} alt="Mission" className="w-auto h-100" />
                </div>
                <div className="flex flex-col items-center justify-center w-1/2">
                    <div className="text-6xl font-bold text-center text-blue-800 ">Our Mission</div>
                    <div className="text-xl text-center text-gray-700">Our website and app development should be succinct and eloquent, with a lot of depth and effect. Choose your words carefully—avoid challenges, hollow phrases, or mission statements that may apply to a variety of businesses and we adhere to that. Our mission is to help our customers' businesses grow by providing creative design, development, and market-defining high-quality solutions that add value and provide a reliable competitive advantage. To achieve effective results, we combine in-depth functional knowledge, international standards, and holistic people.</div>
                </div>
            </div>
           </div>
        </div>
    )
}

export default Aboutus