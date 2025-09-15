import React, { useState, useRef, useEffect } from 'react'
import portfolio1 from '../../assets/p-hemithexim.jpg'
import portfolio2 from '../../assets/p-stevenquartz.jpg'
import portfolio3 from '../../assets/p-bellottitile.jpg'
import portfolio4 from '../../assets/p-blessedhearts.jpg'

const Portfolio = () => {
    const [isPortfolioVisible, setIsPortfolioVisible] = useState(false)
    const [visibleProjects, setVisibleProjects] = useState([false, false, false, false])
    const portfolioRef = useRef(null)
    const projectRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]

    // Intersection Observer for Portfolio title
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log('Portfolio section is visible!')
                        setIsPortfolioVisible(true)
                    }
                })
            },
            {
                threshold: 0.3,
                rootMargin: '0px 0px 0px 0px'
            }
        )

        if (portfolioRef.current) {
            observer.observe(portfolioRef.current)
        }

        return () => {
            if (portfolioRef.current) {
                observer.unobserve(portfolioRef.current)
            }
        }
    }, [])

    // Individual Intersection Observers for each project
    useEffect(() => {
        const observers = projectRefs.map((ref, index) => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            console.log(`Project ${index + 1} is visible!`)
                            setVisibleProjects(prev => {
                                const newState = [...prev]
                                newState[index] = true
                                return newState
                            })
                        }
                    })
                },
                {
                    threshold: 0.2,
                    rootMargin: '0px 0px -100px 0px'
                }
            )

            if (ref.current) {
                observer.observe(ref.current)
            }

            return observer
        })

        return () => {
            observers.forEach((observer, index) => {
                if (projectRefs[index].current) {
                    observer.unobserve(projectRefs[index].current)
                }
            })
        }
    }, [])
    return (
        <div ref={portfolioRef}>
            <div className='flex flex-col items-center justify-center'>
                <div className={`text-6xl font-bold text-center text-blue-800 mb-8 transition-all duration-1000 ${
                    isPortfolioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>Our Portfolio</div>
                {/* portfolio cards */}
                <div className="space-y-16">
                    <div ref={projectRefs[0]} className="flex items-center gap-12 px-8">
                        <div className={`flex-1 transition-all duration-1200 ease-out ${
                            visibleProjects[0] ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-16 scale-95'
                        }`} style={{ 
                            transitionDelay: visibleProjects[0] ? '100ms' : '0ms',
                            transitionProperty: 'opacity, transform',
                            transitionDuration: '1200ms',
                            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                        }}>
                            <img src={portfolio1} alt="portfolio1" className="w-full h-auto rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-500" />
                        </div>
                        <div className={`flex-1 transition-all duration-1200 ease-out ${
                            visibleProjects[0] ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-16 scale-95'
                        }`} style={{ 
                            transitionDelay: visibleProjects[0] ? '300ms' : '0ms',
                            transitionProperty: 'opacity, transform',
                            transitionDuration: '1200ms',
                            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                        }}>
                            <div className="text-3xl font-bold text-gray-800 mb-4">Website Title</div>
                            <div className="text-lg text-gray-600 leading-relaxed">Website Description</div>
                        </div>
                    </div>
                    <div ref={projectRefs[1]} className="flex items-center gap-12 px-8">
                        <div className={`flex-1 transition-all duration-1200 ease-out ${
                            visibleProjects[1] ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-16 scale-95'
                        }`} style={{ 
                            transitionDelay: visibleProjects[1] ? '100ms' : '0ms',
                            transitionProperty: 'opacity, transform',
                            transitionDuration: '1200ms',
                            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                        }}>
                            <div className="text-3xl font-bold text-gray-800 mb-4">Website Title</div>
                            <div className="text-lg text-gray-600 leading-relaxed">Website Description</div>
                        </div>
                        <div className={`flex-1 transition-all duration-1200 ease-out ${
                            visibleProjects[1] ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-16 scale-95'
                        }`} style={{ 
                            transitionDelay: visibleProjects[1] ? '300ms' : '0ms',
                            transitionProperty: 'opacity, transform',
                            transitionDuration: '1200ms',
                            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                        }}>
                            <img src={portfolio2} alt="portfolio2" className="w-full h-auto rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-500" />
                        </div>
                    </div>
                    <div ref={projectRefs[2]} className="flex items-center gap-12 px-8">
                        <div className={`flex-1 transition-all duration-1200 ease-out ${
                            visibleProjects[2] ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-16 scale-95'
                        }`} style={{ 
                            transitionDelay: visibleProjects[2] ? '100ms' : '0ms',
                            transitionProperty: 'opacity, transform',
                            transitionDuration: '1200ms',
                            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                        }}>
                            <img src={portfolio3} alt="portfolio3" className="w-full h-auto rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-500" />
                        </div>
                        <div className={`flex-1 transition-all duration-1200 ease-out ${
                            visibleProjects[2] ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-16 scale-95'
                        }`} style={{ 
                            transitionDelay: visibleProjects[2] ? '300ms' : '0ms',
                            transitionProperty: 'opacity, transform',
                            transitionDuration: '1200ms',
                            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                        }}>
                            <div className="text-3xl font-bold text-gray-800 mb-4">Website Title</div>
                            <div className="text-lg text-gray-600 leading-relaxed">Website Description</div>
                        </div>
                    </div>
                    <div ref={projectRefs[3]} className="flex items-center gap-12 px-8">
                        <div className={`flex-1 transition-all duration-1200 ease-out ${
                            visibleProjects[3] ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-16 scale-95'
                        }`} style={{ 
                            transitionDelay: visibleProjects[3] ? '100ms' : '0ms',
                            transitionProperty: 'opacity, transform',
                            transitionDuration: '1200ms',
                            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                        }}>
                            <div className="text-3xl font-bold text-gray-800 mb-4">Website Title</div>
                            <div className="text-lg text-gray-600 leading-relaxed">Website Description</div>
                        </div>
                        <div className={`flex-1 transition-all duration-1200 ease-out ${
                            visibleProjects[3] ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-16 scale-95'
                        }`} style={{ 
                            transitionDelay: visibleProjects[3] ? '300ms' : '0ms',
                            transitionProperty: 'opacity, transform',
                            transitionDuration: '1200ms',
                            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                        }}>
                            <img src={portfolio4} alt="portfolio4" className="w-full h-auto rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio