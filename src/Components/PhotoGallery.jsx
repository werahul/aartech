import React, { useState, useEffect } from 'react';
import { down } from '../assets/images';
import { PG1, PG2, PG3, PG4, PG5, PG6, PG7, PG8, PG9, PG10, PG11 } from '../assets/photogallery';
import Aos from "aos"
import "aos/dist/aos.css"


const PhotoGallery = () => {
    useEffect(() => {
       
        Aos.init({duration: 2000})
    }, []);
   
    const [showAllGalleryItems, setShowAllGalleryItems] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null); // New state for selected image index

    const toggleGalleryView = () => {
        setShowAllGalleryItems(!showAllGalleryItems);
    };


    const galleryItems = [
        // ... list of your gallery items
        // You can repeat this block to have 12 items in total
        {
            id: 1,
            imageUrl: PG1,
            description: "On May 12th, 2023, a heartfelt gathering marked the exuberant celebration of Anil Anant Raje's 78th birthday, as Aartech Alumni from all walks of life convened to honor their shared journey.",
        },
        {
            id: 2,
            imageUrl: PG2,
            description: 'In September 2022, a harmonious symphony resonated as shareholders united at the AGM Meeting. Their presence reflected solidarity, shaping the path of progress together.',
        },
        {
            id: 3,
            imageUrl: PG3,
            description: "Every January 1st, ASL dons a festive hue, welcoming Aartechies' families to celebrate its foundation. The occasion unites hearts and reminiscences, strengthening the ASL bond.",
        },
        {
            id: 4,
            imageUrl: PG4,
            description: "Embarking on a business odyssey, AMR's journey led to China. A tale of global aspirations unfolded in the meetings' backdrop, underlining AMR's strategic pursuits.",
        },
        {
            id: 5,
            imageUrl: PG5,
            description: "The month of May 2023 witnessed a captivating chapter as we stepped onto Bansal College of Science and Technology's campus. A journey of potential commenced.",
        },
        {
            id: 6,
            imageUrl: PG6,
            description: "Crafting bridges and fostering cohesion, a dedicated workshop echoed with team-building resonance. Employee engagement took center stage, empowering our collective spirit.",
        },
        {
            id: 7,
            imageUrl: PG7,
            description: "ASL's triumphant moment gleamed in the index photograph. Disc5 challenge victory at DiffConnect 2.0 crowned ASL's innovation, etching a milestone in brilliance.",
        },
        {
            id: 8,
            imageUrl: PG8,
            description: "On August 15th, 2023, a tapestry of patriotism adorned our campus. CEO and SMD's presence added gravitas to the Independence Day celebration, weaving freedom's essence.",
        },
        {
            id: 9,
            imageUrl: PG9,
            description: "June 5th, 2023 saw Aartechies becoming Earth's custodians. Hand in hand, we sowed trees, nurturing nature on World Environment Day, an embodiment of eco-consciousness.",
        },
        {
            id: 10,
            imageUrl: PG10,
            description: "Illuminating October 22nd, 2023, Aartech's campus embraced pre-Diwali jubilation. CMD and CEO's luminance elevated the festive spirit, fostering togetherness.",
        },
        {
            id: 10,
            imageUrl: PG11,
            description: "March 8th, 2023 resonated with empowerment as Aartech campus adorned hues of reverence for International Women's Day. A tribute to women's multifaceted accomplishments, forging progress. ",
        },
        // ... more gallery items
    ];


    const displayedGalleryItems = showAllGalleryItems ? galleryItems : galleryItems.slice(0, 3);

    const openImageModal = (index) => {
        setSelectedImageIndex(index);
    };

    const closeImageModal = () => {
        setSelectedImageIndex(null);
    };

    {/*const openNextImageModal = (currentIndex) => {
        setSelectedImageIndex(currentIndex + 1);
    };*/}

    const openPreviousImage = () => {
        if (selectedImageIndex > 0) {
            setSelectedImageIndex(selectedImageIndex - 1);
        }
    };

    const openNextImage = () => {
        if (selectedImageIndex < displayedGalleryItems.length - 1) {
            setSelectedImageIndex(selectedImageIndex + 1);
        }
    };


    return (
        <>
            {/* ... other components */}
            <div className="galaryGrid grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-x-6 sm:gap-x-2 lg:gap-y-[36px] lg:space-y-0 sm:space-y-0 space-y-6">
                {displayedGalleryItems.map((item, index) => (
                    <div
                        key={item.id}
                        className="galaryBox inline-block"
                        onClick={() => openImageModal(index)}  data-aos="zoom-in"
                    >
                        <div className="img bg-slate-500 aspect-video overflow-hidden cursor-pointer">
                            <img src={item.imageUrl} alt="" />
                        </div>
                        <div className="galaryText line-clamp-2 p-1 font-Barlow font-semibold overflow-hidden mt-2 lg:text-[18px] text-[16px]">
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center lg:mt-[60px] mt-[30px] lg:pb-0 lg:mb-0">
                <div
                    className="viewAll font-Barlow border-[1px] border-black inline-block px-4 py-1 text-[18px] cursor-pointer hover:text-box-red hover:border-box-red font-bold"
                    onClick={toggleGalleryView}
                >
                    {showAllGalleryItems ? 'Show Less' : 'View All'}
                </div>
            </div>

            {/* Modal */}
            {selectedImageIndex !== null && (
                <div className="modal fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-50 select-none">
                    {/* Modal content */}
                    <div className="modal-container my-auto w-screen lg:p-16 p-5 lg:overflow-auto overflow-visible relative">
                        <div className="modal-content bg-slate-500 shadow-2xl w-[100%] max-h-[560px] h-auto mb-2 overflow-hidden">
                            <img src={galleryItems[selectedImageIndex].imageUrl} alt="" />
                        </div>
                        {/*<div className="modal-content grid grid-cols-4 gap-x-2">
                            {displayedGalleryItems.map((item, index) => (
                                <div
                                    className="aspect-video bg-white overflow-hidden"
                                    key={index}
                                    onClick={() => setSelectedImageIndex(index)}
                                >
                                    <img src={item.imageUrl} alt="" />
                                </div>
                            ))}
                            </div>*/}

                        {/* Previous and Next buttons */}
                        <div
                            className="absolute hidden  justify-center items-center top-1/2 w-[70px] h-[70px] left-[35px] transform -translate-y-1/2 cursor-pointer text-2xl text-black bg-white border-[1px] border-black px-2 hover:bg-opacity-75 transition duration-300"
                            onClick={openPreviousImage}
                        >
                            <img src={down} alt="" className="leftArrow" />
                        </div>
                        <div
                            className="absolute hidden justify-center items-center top-1/2 right-[35px] w-[70px] transform -translate-y-1/2 cursor-pointer text-2xl text-black bg-white border-[1px] border-black h-[70px] px-2 hover:bg-opacity-75 transition duration-300"
                            onClick={openNextImage}
                        >
                            <img src={down} alt="" className="rightArrow" />
                        </div>
                        <div className="absolute lg:top-[2.2rem] -top-[9px] lg:right-[3.9rem] right-5 cursor-pointer text-sm text-box-red font-Barlow border-[1px] border-black px-2 py-1 bg-white hover:text-gray-800 transition duration-300" onClick={closeImageModal}>
                            CLOSE
                        </div>
                    </div>
                </div>
            )}




        </>
    );
};

export default PhotoGallery;

