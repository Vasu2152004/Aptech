import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Service = () => {
    const [isServicesVisible, setIsServicesVisible] = useState(false)
    const servicesRef = useRef(null)

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
                threshold: 0.3, // Trigger when 30% of the element is visible
                rootMargin: '0px 0px 0px 0px' // Start animation exactly when element enters viewport
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
   
    return (
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
    )
}

export default Service