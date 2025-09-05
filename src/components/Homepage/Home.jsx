import React from 'react'
import checkIcon from '../../assets/check.png'

const Home = () => {
    return (
        <div className="min-h-screen relative overflow-hidden bg-white">
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50">
                <div className="absolute inset-0 bg-white/80"></div>
            </div>
            
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
                <div className="max-w-6xl mx-auto text-center">
                
                    {/* Main heading */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight">
                        <span className="block bg-gradient-to-r from-gray-900 via-orange-600 to-orange-500 bg-clip-text text-transparent">
                            Transform Your Business
                        </span>
                        <span className="block bg-gradient-to-r from-orange-500 via-orange-600 to-gray-900 bg-clip-text text-transparent">
                            with AI-Accelerated
                        </span>
                        <span className="block bg-gradient-to-r from-gray-900 via-blue-600 to-blue-500 bg-clip-text text-transparent">
                            Software Development
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                        Revolutionize your development process with cutting-edge AI technology. 
                        Build faster, smarter, and more efficient software solutions that drive real business results.
                    </p>

                    {/* CTA Buttons */}
                   
                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">10x</div>
                            <div className="text-gray-600">Faster Development</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">99%</div>
                            <div className="text-gray-600">Code Accuracy</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-purple-500 mb-2">24/7</div>
                            <div className="text-gray-600">AI Support</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lorem Text Section */}
            <div className="px-4 py-16 bg-white/90 backdrop-blur-sm">
                <div className="mx-24">
                    <div className="border-2 border-orange-400 pb-8  h-[100vh] w-auto">
                                           <div className='text-blue-950 text-4xl flex flex-col items-center'>
                      <div className='font-bold text-center'>Code, Test, Deploy</div>
                      <div className='font-bold text-center'>All 5X Faster with AI Pair Programmers</div>
                      </div>
                     <div className='text-blue-600 text-lg flex flex-col items-center mt-4'>
                        <div className='text-center'>Aptech combines AI expertise with agile development to help startups and enterprises build, test and launch</div>
                        <div className='text-center'>digital products 5X faster without sacrificing quality, flexibility or scalability.</div>
                     </div>

                     <div className='grid grid-cols-2'>

                                                 <div>
                             <div className='text-gray-400 text-lg px-10 pt-16'>
                             Modern Teams need Speed to stay ahead in this fast-paced world. Our AI-powered solutions help startups, businesses and product teams develop their projects 5X faster, smarter and leaner by accelerating MVP and product development cycles.
                             </div>
                             <div className='flex items-center gap-2 px-10 mt-14 font-bold'>
                                 <img src={checkIcon} alt="check" className='h-6 w-auto' />
                                 5X Faster Product Iterations
                             </div>
                             <div className='flex items-center gap-2 px-10 mt-2 font-bold'>
                                 <img src={checkIcon} alt="check" className='h-6 w-auto' />
                                 80% Reduction in Dev Workload
                             </div>
                             <div className='flex items-center gap-2 px-10 mt-2 font-bold'>
                                 <img src={checkIcon} alt="check" className='h-6 w-auto' />
                                 Human-AI Collaboration = Better Ideas, Better Code
                             </div>
                             <div className='flex items-center gap-2 px-10 mt-2 font-bold'>
                                 <img src={checkIcon} alt="check" className='h-6 w-auto' />
                                 Enterprise-grade Scalability & Security
                             </div>
                             <div className='flex items-center gap-2 px-10 mt-2 font-bold'>
                                 <img src={checkIcon} alt="check" className='h-6 w-auto' />
                                 Cross-Platform: Web, Mobile, API-first Apps
                             </div>
                         </div>

                     </div>
                    </div>
                </div>
            </div>
        
           
        </div>
    )
}

export default Home