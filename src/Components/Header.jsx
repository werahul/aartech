import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { indBanner, proBanner, solutionBanner } from '../assets/images';

const linkBackgroundColors = ['#B80001', '#B80001', '#B80001']; // Define background colors for links

const images = [indBanner, proBanner, solutionBanner];

const Header = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative">
            <div className="flex flex-col absolute bottom-0 left-40 z-30 md:flex-row justify-center md:space-x-4">
                {images.map((image, index) => (
                    <Link
                        key={index}
                        to={index === 0 ? '/industries' : index === 1 ? '/products' : '/solutions'}
                        className="w-full hidden lg:block md:w-[336px] h-[220px] text-white pt-8 px-4 md:px-7 font-Barlow div mb-4 md:mb-0"
                        style={{
                            backgroundColor: index === currentIndex ? linkBackgroundColors[index] : 'transparent',
                        }}
                    >
                        {<h2 className="font-[800] border-b-2 text-[14px] tracking-[.2em] md:text-[18px] mb-2 md:mb-6">
                            {index === 0 ? 'INDUSTRIES' : index === 1 ? 'PRODUCTS' : 'SOLUTIONS'}
                        </h2>}
                        <p className="font-normal font-Barlow text-[16px] md:text-[20px]">
                            {index === 0
                                ? 'Work spanning 9 major industries & 33 sub-industries.'
                                : index === 1
                                    ? '12 products adopted across 15 countries.'
                                    : 'Over 20+ customized solutions across industries and products.'}
                        </p>
                    </Link>
                ))}
            </div>
            <div className="image-slider relative">
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
                           {/* <p className="legend">
                                {index === 0
                                    ? 'INDUSTRIES'
                                    : index === 1
                                        ? 'PRODUCTS'
                                        : 'SOLUTIONS'}
                                </p>*/}
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Header;
