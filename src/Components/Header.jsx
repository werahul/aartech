import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { indBanner, proBanner, solutionBanner } from '../assets/images';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import arrow icons

const linkBackgroundColors = ['#B80001', '#B80001', '#B80001'];

const images = [indBanner, proBanner, solutionBanner];

const Header = () => {
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

    const handleLinkHover = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full lg:block hidden">
            <div className="flex flex-col absolute bottom-0 left-0 z-30 md:flex-row justify-center items-center w-full md:space-x-4">
                {/* Left Arrow */}
                <div
                    className="w-14 h-14 border bg-white hover:opacity-75 transition absolute left-0 -top-[10rem] transform -translate-y-50% flex justify-center items-center cursor-pointer"
                    onClick={() => handleArrowClick('left')}
                >
                    <FaChevronLeft size={24} color="#000000" />
                </div>

                {images.map((image, index) => (
                    <Link
                        key={index}
                        to={index === 0 ? '/industries' : index === 1 ? '/products' : '/solutions'}
                        className="w-full hidden lg:block md:w-[336px] h-[200px] text-white pt-8 px-4 md:px-7 font-Barlow div mb-4 md:mb-0"
                        style={{
                            backgroundColor: index === currentIndex ? linkBackgroundColors[index] : 'transparent',
                        }}
                        onMouseEnter={() => handleLinkHover(index)}
                    >
                        {<h2 className="font-[700] border-b-2 text-[14px] tracking-[.1em] md:text-[18px] mb-2 md:mb-6 lg:mb-4 leading-10">
                            {index === 0 ? 'INDUSTRIES' : index === 1 ? 'PRODUCTS' : 'SOLUTIONS'}
                        </h2>}
                        <p className="font-normal font-Barlow text-[16px] md:text-[20px]">
                            {index === 0
                                ? 'Work spanning 9 major industries & 33 sub-industries.'
                                : index === 1
                                    ? '11+ products adopted across 15 countries.'
                                    : 'Over 11+ customized solutions across industries and products.'}
                        </p>
                    </Link>
                ))}

                {/* Right Arrow */}
                <div
                    className="w-14 h-14 border bg-white hover:opacity-75 transition absolute right-0 -top-[10rem] transform  flex justify-center items-center cursor-pointer"
                    onClick={() => handleArrowClick('right')}
                >
                    <FaChevronRight size={24} color="#000000" />
                </div>
            </div>
            <div className="image-slider relative w-full">
                <Carousel
                    showArrows={false}
                    selectedItem={currentIndex}
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={false}
                    autoPlay
                    interval={5000}
                    infiniteLoop
                >
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Header;
