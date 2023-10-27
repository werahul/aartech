import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { mIndBanner, mProBanner, mSolBanner } from '../assets/images';

const images = [mIndBanner, mProBanner, mSolBanner];
const imageLinks = ['/industries', '/products', '/solutions'];


const Header2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleArrowClick = (direction) => {
        if (direction === 'left') {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        } else if (direction === 'right') {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }
    };

    const handleCarouselTouchStart = (e) => {
        // Prevent touch event propagation to allow scrolling
        e.stopPropagation();
    };

    return (
        <div className="relative w-full lg:hidden mt-16">
            <div className="flex flex-col absolute bottom-0 left-0 z-30 md:flex-row justify-center items-center w-full md:space-x-4">
                <div
                    className="lg:w-14 lg:h-14 w-10 h-10 border bg-white hover:opacity-75 transition absolute left-0 -top-[22rem] transform -translate-y-50% flex justify-center items-center cursor-pointer"
                    onClick={() => handleArrowClick('left')}
                >
                    <FaChevronLeft size={24} color="#000000" />
                </div>
                <div
                    className="lg:w-14 lg:h-14 w-10 h-10 border bg-white hover:opacity-75 transition absolute right-0 -top-[22rem] transform flex justify-center items-center cursor-pointer"
                    onClick={() => handleArrowClick('right')}
                >
                    <FaChevronRight size={24} color="#000000" />
                </div>
            </div>
            <div className="image-slider relative w-full" onTouchStart={handleCarouselTouchStart}>
                <Carousel
                    showArrows={false}
                    selectedItem={currentIndex}
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={false}
                    autoPlay
                    interval={5000}
                    infiniteLoop
                    swipeable={true}
                   
                  
                   
                >
                    {images.map((image, index) => (
                        <Link to={imageLinks[index]} key={index}>
                            <img src={image} alt={`Image ${index + 1}`} />
                        </Link>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Header2;