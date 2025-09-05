import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Footer = () => {

  const quotes = [
    ["Turning Ideas", "into Impact"],
    ["Driven by Innovation,", "Powered by You"],
    ["Where Technology", "Meets Trust"],
    ["Building Today,", "Shaping Tomorrow"],
    ["Your Vision,", "Our Mission"],
  ];

  const [index, setIndex] = useState(0);
  const [displayText1, setDisplayText1] = useState('');
  const [displayText2, setDisplayText2] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const currentQuote = quotes[index];
    let currentIndex1 = 0;
    let currentIndex2 = 0;
    setIsTyping(true);
    setDisplayText1('');
    setDisplayText2('');

    // Type first line
    const typeInterval1 = setInterval(() => {
      if (currentIndex1 < currentQuote[0].length) {
        setDisplayText1(currentQuote[0].substring(0, currentIndex1 + 1));
        currentIndex1++;
      } else {
        clearInterval(typeInterval1);
        // Start typing second line after a short delay
        setTimeout(() => {
          const typeInterval2 = setInterval(() => {
            if (currentIndex2 < currentQuote[1].length) {
              setDisplayText2(currentQuote[1].substring(0, currentIndex2 + 1));
              currentIndex2++;
            } else {
              setIsTyping(false);
              clearInterval(typeInterval2);
            }
          }, 100);
        }, 200);
      }
    }, 100);

    return () => {
      clearInterval(typeInterval1);
    };
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 4000); // Change every 4 seconds to allow time for typing
    return () => clearInterval(interval);
  }, [quotes.length]);

    return (    
        <div className='bg-black text-white mt-10'>
            <div className='grid grid-cols-2 text-4xl font-bold md:px-10 pt-10 md:gap-10'>
              <div>
                <div className="min-h-[120px] flex flex-col justify-center">
                  <div className="text-4xl font-bold">
                    <div>
                      {displayText1}
                      {isTyping && displayText2 === '' && <span className="text-orange-400 animate-pulse">|</span>}
                    </div>
                    <div>
                      {displayText2}
                      {isTyping && displayText2 !== '' && <span className="text-orange-400 animate-pulse">|</span>}
                    </div>
                  </div>
                </div>
                <Link to='/contact' className='text-orange-400 hover:text-orange-500 block'>Let's Connect</Link>
              </div>
              <div>
              <div className='pt-1 px-3'>
                  <img src="src/assets/logo.png" alt="aptech-logo" srcset="" className='w-auto h-12' />
                </div>
                <div>
                  <img src="src/assets/location.png" alt="location" srcset="" className='w-auto h-7' />
                  <div className='text-sm pt-2 px-2'>509,409 Ikon, Saduvasvani Road,Rajkot,Gujarat,India</div>
                  <div className='flex gap-2 pt-3'>
                    <a href="http://"><img src="src/assets/insta.png" alt="phone" srcset="" className='w-auto h-7 ' /></a>
                    <a href="http://"><img src="src/assets/twitter.png" alt="phone" srcset="" className='w-auto h-7 ' /></a>
                    <a href="http://"><img src="src/assets/social.png" alt="phone" srcset="" className='w-auto h-6 ' /></a>
                    <a href="http://"><img src="src/assets/linkedin.png" alt="phone" srcset="" className='w-auto h-7 ' /></a>
                  </div>
                </div>
               
              </div>
            </div>
            <div className='h-0.5 w-full bg-white mt-2'></div>
            <div className='flex justify-center items-center py-4'>
              <div>Copyright © 2025 Aptech Infotech</div>
            </div>
        </div>
    )
}

export default Footer