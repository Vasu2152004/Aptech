import React, { useState, useRef, useEffect } from 'react'
import checkIcon from '../../assets/check.png'
import { Link } from 'react-router-dom'
const Home = () => {
    const [currentCard, setCurrentCard] = useState(0)
    const scrollContainerRef = useRef(null)
    const [scrollPosition, setScrollPosition] = useState(0)
    const [scrollDirection, setScrollDirection] = useState('down')
    const [isServicesVisible, setIsServicesVisible] = useState(false)
    const servicesRef = useRef(null)
    const [isTrustVisible, setIsTrustVisible] = useState(false)
    const trustRef = useRef(null)
    const [isHeroVisible, setIsHeroVisible] = useState(false)
    const heroRef = useRef(null)
    const [isFeaturesVisible, setIsFeaturesVisible] = useState(false)
    const featuresRef = useRef(null)
    
    const cards = [
        {
            title: "AI-Powered Coding Assistants",
            description: "Speed up your full-stack development with real-time coding insights. Our developers are assisted by tools that help them write code faster and smarter.",
            features: [
                "Code completion, error detection, smart suggestions",
                "Auto-generate boilerplate, test cases, and documentation"
            ],
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="44" viewBox="0 0 42 44" fill="none">
                <path d="M35 39C35.8509 38.6181 36.5789 38.1224 37.2175 37.479C40 34.6759 40 30.1643 40 21.1411C40 12.1179 40 7.60629 37.2175 4.80314C34.435 2 29.9567 2 21 2C12.0433 2 7.56497 2 4.78249 4.80314C2 7.60629 2 12.1179 2 21.1411C2 30.1643 2 34.6759 4.78249 37.479C5.42111 38.1224 6.14907 38.6181 7 39" stroke="#2B4DFF" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M2 15L40 15" stroke="#2B4DFF" stroke-width="2.5" stroke-linejoin="round"/>
                <path d="M10.9996 9H11.0176" stroke="#2B4DFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.9996 9H19.0176" stroke="#2B4DFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.1606 41.7145L15.6535 42.8571L15.6535 42.8571L16.1606 41.7145ZM14.2664 39.6851L13.1005 40.1358H13.1005L14.2664 39.6851ZM27.7336 39.6851L28.8995 40.1358L28.8995 40.1358L27.7336 39.6851ZM25.8394 41.7145L26.3464 42.8571H26.3465L25.8394 41.7145ZM25.8394 31.0355L26.3464 29.8929L25.8394 31.0355ZM27.7336 33.0649L28.8995 32.6142V32.6142L27.7336 33.0649ZM16.1606 31.0355L15.6535 29.8929H15.6535L16.1606 31.0355ZM14.2664 33.0649L13.1005 32.6142H13.1005L14.2664 33.0649ZM16.25 30.75C16.25 31.4404 16.8096 32 17.5 32C18.1904 32 18.75 31.4404 18.75 30.75H16.25ZM23.25 30.75C23.25 31.4404 23.8096 32 24.5 32C25.1904 32 25.75 31.4404 25.75 30.75H23.25ZM19.25 30.75V32H22.75V30.75V29.5H19.25V30.75ZM22.75 42V40.75H19.25V42L19.25 43.25H22.75V42ZM19.25 42V40.75C18.4163 40.75 17.8581 40.7492 17.4261 40.7176C17.0072 40.687 16.8034 40.6322 16.6677 40.572L16.1606 41.7145L15.6535 42.8571C16.161 43.0823 16.6865 43.1703 17.2438 43.211C17.788 43.2508 18.4529 43.25 19.25 43.25L19.25 42ZM14 36.375H12.75C12.75 37.2327 12.7494 37.9344 12.7858 38.5063C12.8229 39.0879 12.9018 39.6218 13.1005 40.1358L14.2664 39.6851L15.4323 39.2343C15.3646 39.0592 15.3103 38.8117 15.2808 38.3474C15.2506 37.8734 15.25 37.2646 15.25 36.375H14ZM16.1606 41.7145L16.6677 40.572C16.129 40.333 15.6748 39.8616 15.4323 39.2343L14.2664 39.6851L13.1005 40.1358C13.5685 41.3462 14.477 42.3349 15.6535 42.8571L16.1606 41.7145ZM28 36.375H26.75C26.75 37.2646 26.7494 37.8734 26.7192 38.3474C26.6897 38.8117 26.6354 39.0592 26.5677 39.2343L27.7336 39.6851L28.8995 40.1358C29.0982 39.6218 29.1771 39.0879 29.2142 38.5063C29.2506 37.9344 29.25 37.2327 29.25 36.375H28ZM22.75 42V43.25C23.5471 43.25 24.212 43.2508 24.7562 43.211C25.3135 43.1703 25.839 43.0823 26.3464 42.8571L25.8394 41.7145L25.3323 40.572C25.1966 40.6322 24.9928 40.687 24.5739 40.7176C24.1419 40.7492 23.5837 40.75 22.75 40.75V42ZM27.7336 39.6851L26.5677 39.2343C26.3252 39.8616 25.871 40.333 25.3323 40.572L25.8394 41.7145L26.3465 42.8571C27.523 42.3349 28.4315 41.3462 28.8995 40.1358L27.7336 39.6851ZM22.75 30.75V32C23.5837 32 24.1419 32.0008 24.5739 32.0324C24.9928 32.063 25.1966 32.1178 25.3323 32.178L25.8394 31.0355L26.3464 29.8929C25.839 29.6677 25.3135 29.5797 24.7562 29.539C24.212 29.4992 23.5471 29.5 22.75 29.5V30.75ZM28 36.375H29.25C29.25 35.5173 29.2506 34.8156 29.2142 34.2437C29.1771 33.6621 29.0982 33.1282 28.8995 32.6142L27.7336 33.0649L26.5677 33.5157C26.6354 33.6908 26.6897 33.9383 26.7192 34.4026C26.7494 34.8766 26.75 35.4854 26.75 36.375H28ZM25.8394 31.0355L25.3323 32.178C25.871 32.417 26.3252 32.8884 26.5677 33.5157L27.7336 33.0649L28.8995 32.6142C28.4315 31.4038 27.523 30.4151 26.3464 29.8929L25.8394 31.0355ZM19.25 30.75V29.5C18.4529 29.5 17.788 29.4992 17.2438 29.539C16.6865 29.5797 16.161 29.6677 15.6535 29.8929L16.1606 31.0355L16.6677 32.178C16.8034 32.1178 17.0072 32.063 17.4261 32.0324C17.8581 32.0008 18.4163 32 19.25 32V30.75ZM14 36.375H15.25C15.25 35.4854 15.2506 34.8766 15.2808 34.4026C15.3103 33.9383 15.3646 33.6908 15.4323 33.5157L14.2664 33.0649L13.1005 32.6142C12.9018 33.1282 12.8229 33.6621 12.7858 34.2437C12.7494 34.8156 12.75 35.5173 12.75 36.375H14ZM16.1606 31.0355L15.6535 29.8929C14.477 30.4151 13.5685 31.4038 13.1005 32.6142L14.2664 33.0649L15.4323 33.5157C15.6748 32.8884 16.129 32.417 16.6677 32.178L16.1606 31.0355ZM17.5 30.75H18.75V27.375H17.5H16.25V30.75H17.5ZM24.5 27.375H23.25V30.75H24.5H25.75V27.375H24.5ZM21 24V25.25C22.2859 25.25 23.25 26.2439 23.25 27.375H24.5H25.75C25.75 24.7782 23.5801 22.75 21 22.75V24ZM17.5 27.375H18.75C18.75 26.2439 19.7141 25.25 21 25.25V24V22.75C18.4199 22.75 16.25 24.7782 16.25 27.375H17.5Z" fill="#2B4DFF"/>
              </svg>
            ),
          
        },
        {
            title: "AI Agents for MVPs",
            description: "Build MVPs in days not months. With AI agents our team can turn your ideas into deployable products in no time.",
            features: [
                "Convert ideas into working prototypes quickly",
                "Reduce iteration cycles and launch risks"
            ],
            icon: (
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            title: "AI Productivity Tools",
            description: "Improve the development process and decision-making. Our experts use specialized AI tools to accelerate research, reduce coding time and increase engineering output.",
            features: [
                "Automate repetitive engineering and research tasks",
                "Speed up coding and design decision workflows"
            ],
            icon: (
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
            )
        }
    ]

    const scrollToCard = (index) => {
        setCurrentCard(index)
        if (scrollContainerRef.current) {
            const cardWidth = scrollContainerRef.current.clientWidth
            scrollContainerRef.current.scrollTo({
                left: index * cardWidth,
                behavior: 'smooth'
            })
        }
    }

    const nextCard = () => {
        const nextIndex = (currentCard + 1) % cards.length
        scrollToCard(nextIndex)
    }

    const prevCard = () => {
        const prevIndex = (currentCard - 1 + cards.length) % cards.length
        scrollToCard(prevIndex)
    }

    // Auto-slide functionality with timer
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentCard((prevCard) => (prevCard + 1) % cards.length)
        }, 4000) // Change slide every 4 seconds

        return () => clearInterval(timer) // Cleanup timer on component unmount
    }, [cards.length])

    // Scroll-based marquee effect with infinite loop
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            const scrollDelta = currentScrollY - scrollPosition
            
            if (scrollDelta > 0) {
                setScrollDirection('down')
            } else if (scrollDelta < 0) {
                setScrollDirection('up')
            }
            
            // Use modulo to create infinite loop effect
            const infiniteScrollPosition = currentScrollY % 2000 // Reset every 2000px
            setScrollPosition(infiniteScrollPosition)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [scrollPosition])

    // Intersection Observer for Services section animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log('Services section is visible!') // Debug log
                        setIsServicesVisible(true)
                    }
                })
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
                rootMargin: '0px 0px -50px 0px' // Start animation when element is closer to viewport
            }
        )

        if (servicesRef.current) {
            observer.observe(servicesRef.current)
        }

        return () => {
            if (servicesRef.current) {
                observer.unobserve(servicesRef.current)
            }
        }
    }, [])

    // Intersection Observer for Trust section animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log('Trust section is visible!') // Debug log
                        setIsTrustVisible(true)
                    }
                })
            },
            {
                threshold: 0.3, // Trigger when 30% of the element is visible
                rootMargin: '0px 0px 0px 0px' // Start animation exactly when element enters viewport
            }
        )

        if (trustRef.current) {
            observer.observe(trustRef.current)
        }

        return () => {
            if (trustRef.current) {
                observer.unobserve(trustRef.current)
            }
        }
    }, [])

    // Intersection Observer for Hero section animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log('Hero section is visible!') // Debug log
                        setIsHeroVisible(true)
                    }
                })
            },
            {
                threshold: 0.3, // Trigger when 30% of the element is visible
                rootMargin: '0px 0px 0px 0px' // Start animation exactly when element enters viewport
            }
        )

        if (heroRef.current) {
            observer.observe(heroRef.current)
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current)
            }
        }
    }, [])

    // Intersection Observer for Features section animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log('Features section is visible!') // Debug log
                        setIsFeaturesVisible(true)
                    }
                })
            },
            {
                threshold: 0.3, // Trigger when 30% of the element is visible
                rootMargin: '0px 0px 0px 0px' // Start animation exactly when element enters viewport
            }
        )

        if (featuresRef.current) {
            observer.observe(featuresRef.current)
        }

        return () => {
            if (featuresRef.current) {
                observer.unobserve(featuresRef.current)
            }
        }
    }, [])

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
            <div ref={heroRef} className="flex items-center justify-center relative">
                <div className="flex items-center justify-center">
                    <div className={`transition-all duration-1000 ${
                        isHeroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                    }`}>
                    <div className="text-[45px] font-bold text-center gradient-text bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-blue-600">
                    Cutting-Edge AI-Enhanced Software Company
                    </div>
                    <div className="text-xl text-center text-gray-800 pt-2">
                    Your Ultimate Partner for World-Class Software Development, IT Consulting and Digital Transformation.
                    </div>
                    <div className="text-lg text-center text-gray-600 pt-3">
                        Blending creativity, technology, and intelligence to deliver impactful solutions.  
                        </div>
                        <div className="text-lg text-center text-gray-600">
                        Your vision, our expertise — together shaping the future of digital.  
                        </div>

                </div>
                    </div>
                    <div className={`transition-all duration-1000 ${
                        isHeroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                    }`} style={{ transitionDelay: isHeroVisible ? '300ms' : '0ms' }}>
                        <div>
                            <img src="/src/assets/homepic3.jpg" alt="" srcset="" className="w-auto h-120" />
                        </div>
                    </div>
                </div>
            {/* Lorem Text Section */}
            <div ref={featuresRef} className="px-4 py-16 bg-white/90 backdrop-blur-sm">
                <div className="mx-24">
                    <div className="border-2 border-amber-50 rounded-3xl shadow-2xl pb-8  h-auto w-auto">
                                           <div className={`text-blue-950 text-4xl flex flex-col items-center transition-all duration-1000 ${
                        isFeaturesVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-8'
                    }`}>
                      <div className='font-bold text-center'>Code, Test, Deploy</div>
                      <div className='font-bold text-center'>All 5X Faster with AI Pair Programmers</div>
                      </div>
                     <div className={`text-blue-600 text-lg flex flex-col items-center mt-4 transition-all duration-1000 ${
                        isFeaturesVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-8'
                    }`} style={{ transitionDelay: isFeaturesVisible ? '200ms' : '0ms' }}>
                        <div className='text-center'>Aptech combines AI expertise with agile development to help startups and enterprises build, test and launch</div>
                        <div className='text-center'>digital products 5X faster without sacrificing quality, flexibility or scalability.</div>
                     </div>

                     <div className='grid grid-cols-2'>

                            <div className={`transition-all duration-1000 ${
                                isFeaturesVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-12'
                            }`} style={{ 
                                transitionDelay: isFeaturesVisible ? '400ms' : '0ms',
                                transitionProperty: 'opacity, transform',
                                transitionDuration: '1000ms'
                            }}>
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

                                           {/* Cards Carousel Section */}
                      <div className={`mt-7 transition-all duration-1000 ${
                                isFeaturesVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-12'
                            }`} style={{ 
                                transitionDelay: isFeaturesVisible ? '600ms' : '0ms',
                                transitionProperty: 'opacity, transform',
                                transitionDuration: '1000ms'
                            }}>
                        <div className="relative">

                            {/* Cards Container */}
                            <div className="overflow-hidden rounded-2xl">
                                <div 
                                    ref={scrollContainerRef}
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{ transform: `translateX(-${currentCard * 100}%)` }}
                                >
                                    {cards.map((card, index) => (
                                        <div key={index} className="w-full flex-shrink-0 px-4">
                                            <div className="rounded-3xl h-[300px] bg-white p-8 shadow-2xl border border-gray-200">
                                        {/* Header with Icon */}
                                        <div className="flex items-start mb-6">
                                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                                                        {card.icon}
                                            </div>
                                            <div>
                                                        <h3 className="text-2xl font-bold text-gray-900">{card.title}</h3>
                                            </div>
                                        </div>
                                        
                                        {/* Description */}
                                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                                    {card.description}
                                        </p>
                                        
                                        {/* Features */}
                                        <div className="space-y-3 mb-8">
                                                    {card.features.map((feature, featureIndex) => (
                                                        <div key={featureIndex} className="flex items-center">
                                                <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                            <span className="text-gray-700">{feature}</span>
                                            </div>
                                                    ))}
                                            </div>
                                            </div>
                                        </div>
                                    ))}
                                            </div>
                                        </div>
                                        
                            {/* Dots Indicator */}
                            <div className="flex justify-center mt-6 space-x-2">
                                {cards.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => scrollToCard(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                            index === currentCard 
                                                ? 'bg-blue-600 scale-125' 
                                                : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                      </div>
                     </div>

                    </div>
                </div>
            </div>
            <div ref={trustRef} className='flex flex-col justify-center bg-gray-950 text-white relative h-auto'>
                <div className={`text-6xl font-bold text-center pt-18 transition-all duration-1000 ${
                    isTrustVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                Why Businesses Trust APTech
                </div>
                <div className={`text-md text-center w-1/2 mx-auto pt-4 transition-all duration-1000 ${
                    isTrustVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: isTrustVisible ? '200ms' : '0ms' }}>
                We are built with extensive knowledge to ensure that you never lose great ideas or context. We do not have any hidden fees or charges like others. We provide you with the best security features on our website and design it with cutting-edge technology.
                </div>
                <div className='py-14 mb-8'>
                    <div className='flex items-center justify-center gap-10'>
                        <div className={`flex flex-col items-center justify-center transition-all duration-700 ${
                            isTrustVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                        }`} style={{ 
                            transitionDelay: isTrustVisible ? '400ms' : '0ms',
                            transitionProperty: 'opacity, transform',
                            transitionDuration: '700ms'
                        }}>
                            <img src="/src/assets/artificial-intelligence.png" alt="" srcset="" className='w-auto h-20'/>
                            <div className='text-lg font-bold text-center'>
                            AI & Automation
                            </div>
                            <div className='text-md text-center'>
                            We bring the power of innovation to your business with AI-driven solutions and intelligent automation. APtech ensures you stay ahead in a fast-changing world by simplifying processes and boosting productivity.
                            </div>
                        </div>
                        <div className={`flex flex-col items-center justify-center transition-all duration-700 ${
                            isTrustVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                        }`} style={{ 
                            transitionDelay: isTrustVisible ? '600ms' : '0ms',
                            transitionProperty: 'opacity, transform',
                            transitionDuration: '700ms'
                        }}>
                            <img src="/src/assets/handshake.png" alt="" srcset="" className='w-auto h-20'/>
                            <div className='text-lg font-bold text-center'>Customer-Centric</div>
                            <div className='text-md text-center'>
                            Your goals are at the heart of everything we do. APtech builds strong, lasting partnerships by understanding your unique needs and tailoring solutions that put your success first.
                            </div>
                        </div>
                        <div className={`flex flex-col items-center justify-center transition-all duration-700 ${
                            isTrustVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                        }`} style={{ 
                            transitionDelay: isTrustVisible ? '800ms' : '0ms',
                            transitionProperty: 'opacity, transform',
                            transitionDuration: '700ms'
                        }}>
                            <img src="/src/assets/target.png" alt="" srcset="" className='w-auto h-20'/>
                            <div className='text-lg font-bold text-center'>Impactful Results</div>
                            <div className='text-md text-center'>
                            At APtech, we don't just deliver projects — we deliver measurable success. Our solutions are designed to create real business impact, helping you achieve growth, efficiency, and long-term value.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Professional Tape Marquee Design */}
            <div className="relative bg-gray-100 py-32 h-96 w-screen overflow-hidden">
                {/* Rounded Cards Above */}
               
                {/* First Orange Tape - Upper-left to Lower-right */}
                <div 
                    className="absolute top-1/2 transform -translate-y-1/2" 
                    style={{ 
                        transform: 'rotate(12deg) translateY(-50%)',
                        left: '-100vw',
                        width: '300vw'
                    }}
                >
                    <div 
                        className="bg-orange-500 h-16 flex items-center"
                        style={{
                            transform: `translateX(${scrollDirection === 'down' ? scrollPosition * 0.6 : -scrollPosition * 0.6}px)`,
                            width: '100%'
                        }}
                    >
                        <div className="flex whitespace-nowrap px-2">
                            {/* Extensive repetitions for truly endless flow */}
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Projects</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Works</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Clients</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Products</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Services</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Projects</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Works</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Clients</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Products</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Services</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Projects</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Works</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Clients</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Products</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Services</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Projects</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Works</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Clients</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Products</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Services</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Projects</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Works</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Clients</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Products</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Services</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Projects</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Works</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Clients</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Products</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Services</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Projects</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Works</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Clients</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Products</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Services</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Projects</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Works</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Clients</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Products</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Services</span>
                        </div>
                    </div>
                </div>
                
                {/* Second Orange Tape - Lower-left to Upper-right */}
                <div 
                    className="absolute top-1/2 transform -translate-y-1/2" 
                    style={{ 
                        transform: 'rotate(-12deg) translateY(-50%)',
                        left: '-100vw',
                        width: '300vw'
                    }}
                >
                    <div 
                        className="bg-orange-500 h-16 flex items-center"
                        style={{
                            transform: `translateX(${scrollDirection === 'down' ? -scrollPosition * 0.6 : scrollPosition * 0.6}px)`,
                            width: '100%'
                        }}
                    >
                        <div className="flex whitespace-nowrap px-2">
                            {/* Extensive repetitions for truly endless flow */}
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Projects</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Works</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Clients</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Products</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Services</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Projects</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Works</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Clients</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Products</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Services</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Projects</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Works</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Clients</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Products</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Services</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Projects</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Works</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Clients</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Products</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Services</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Projects</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Works</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Clients</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Products</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Services</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Projects</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Works</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Clients</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Products</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Services</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Projects</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Works</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Clients</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Products</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Services</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Projects</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Works</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Clients</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Products</span>
                            <span className="text-white font-bold text-lg tracking-wide mr-8">Our Services</span>
                        </div>
                    </div>
                </div>     
            </div>
            {/* Project cards*/}
            <div className='flex justify-center items-center py-8 relative md: gap-6'>
                <div className='border-2 border-blue-500 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl hover:opacity-90 transition-shadow duration-300'>
                    <img 
                        src="/p-hemithexim.jpg" 
                        alt="product" 
                        className="w-auto h-[300px] object-cover hover:scale-105 transition-transform duration-300" 
                        onClick={() => window.open('https://example.com', '_blank')}
                    />
                </div>
                <div className='border-2 border-blue-500 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl hover:opacity-90 transition-shadow duration-300'>
                    <img 
                        src="/src/assets/p-bellottitile.jpg" 
                        alt="product" 
                        className="w-auto h-[300px] object-cover hover:scale-105 transition-transform duration-300" 
                        onClick={() => window.open('https://example.com', '_blank')}
                    />
                </div>
                <div className='border-2 border-blue-500 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl hover:opacity-90 transition-shadow duration-300'>
                    <img 
                        src="/src/assets/p-stevenquartz.jpg" 
                        alt="product" 
                        className="w-auto h-[300px] object-cover hover:scale-105 transition-transform duration-300" 
                        onClick={() => window.open('https://example.com', '_blank')}
                    />
                </div>
                <div className='border-2 border-blue-500 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl hover:opacity-90 transition-shadow duration-300'>
                    <img 
                        src="/src/assets/p-blessedhearts.jpg" 
                        alt="product" 
                        className="w-auto h-[300px] object-cover hover:scale-105 transition-transform duration-300" 
                        onClick={() => window.open('https://example.com', '_blank')}
                    />
                </div>
            </div>

            {/*whychoose us*/}

           
            {/*Our Service*/}
           <div ref={servicesRef} className='relative flex flex-col justify-center items-center'>
            <div className={`text-6xl font-bold text-center pt-10 transition-all duration-1000 ${
                isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>Our Services</div>
            <div className="flex justify-center items-center gap-10">
            <div className={`relative border-amber-50 rounded-lg m-4 ${
                isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`} style={{ 
                transitionDelay: isServicesVisible ? '200ms' : '0ms',
                transitionProperty: 'opacity, transform',
                transitionDuration: '700ms'
            }}>
                <div className="hover:shadow-2xl hover:border-amber-100 transition-all duration-300">
                    <Link to="/service/fullstack" >
                        <img
                            src="/src/assets/8354902_3847762.jpg"
                            alt=""
                            className="w-auto h-48"
                        />
                        <div>
                            <div className='text-xl font-bold text-center'>Building Websites</div>
                        </div>
                    </Link>
                </div>
                </div>
            <div className={`relative border-amber-50 rounded-lg m-4 ${
                isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`} style={{ 
                transitionDelay: isServicesVisible ? '400ms' : '0ms',
                transitionProperty: 'opacity, transform',
                transitionDuration: '700ms'
            }}>
                 <div className="hover:shadow-2xl hover:border-amber-100 transition-all duration-300">
                    <Link to="/service/mobile" >
                        <img
                            src="/src/assets/8785463_3991832.jpg"
                            alt=""
                            className="w-auto h-48"
                        />
                        <div>
                            <div className='text-xl font-bold text-center'>Mobile App Development</div>
                        </div>
                    </Link>
                </div>
                </div>
            <div className={`relative border-amber-50 rounded-lg m-4 ${
                isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`} style={{ 
                transitionDelay: isServicesVisible ? '600ms' : '0ms',
                transitionProperty: 'opacity, transform',
                transitionDuration: '700ms'
            }}>
                 <div className="hover:shadow-2xl hover:border-amber-100 transition-all duration-300">
                    <Link to="/service/saasdevelopment" >
                        <img
                            src="/src/assets/saas.jpg"
                            alt=""
                            className="w-auto h-48"
                        />
                        <div>
                            <div className='text-xl font-bold text-center'>Saas Application</div>
                        </div>
                    </Link>
                </div>
                </div>
            <div className={`relative border-amber-50 rounded-lg m-4 ${
                isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`} style={{ 
                transitionDelay: isServicesVisible ? '800ms' : '0ms',
                transitionProperty: 'opacity, transform',
                transitionDuration: '700ms'
            }}>
                 <div className="hover:shadow-2xl hover:border-amber-100 transition-all duration-300">
                    <Link to="/service/uiuxdesign" >
                        <img
                            src="/src/assets/28480869_Tiny graphic designer drawing with big pen on computer screen.jpg"
                            alt=""
                            className="w-auto h-48"
                        />
                        <div>
                            <div className='text-xl font-bold text-center'>UI/UX Design</div>
                        </div>
                    </Link>
                </div>
                </div>

            </div>


           </div>
        </div>
    )
}

export default Home