import React, { useEffect, useState, useRef } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import emailjs from '@emailjs/browser'
import CustomSelect from './CustomSelect'
import CustomCountry from './CustomCountry'
import Aos from "aos"
import axios from 'axios';




const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        // Aos.init({duration: 2000});
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        companyName: "",
        email: "",
        message: "",
        salutation: "", // Initialize salutation
        country: "",    // Initialize country
    });

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formSuccess, setFormSuccess] = useState(false);

    const handleSalutationChange = (selectedSalutation) => {
        setFormData({ ...formData, salutation: selectedSalutation });
    }

    // Function to update country in formData
    const handleCountryChange = (selectedCountry) => {
        setFormData({ ...formData, country: selectedCountry });
    }
    
    const handleInputChange = (e) => {

        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,

        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // setFormSubmitted(true);


        try {
            const response = await axios.post('https://graceful-sarong-bass.cyclic.app/sendEmail', formData);
            console.log('Email sent successfully');
            setFormSuccess(true);
            // You can display a success message to the user here.
            setFormData({
                name: '',
                lastName: '',
                companyName: '',
                email: '',
                salutation: '', // Reset salutation field
                country: '', 
                message: ''   // Reset country field
              });

        } catch (error) {
            console.error('Email could not be sent:', error);
            // Handle the error and provide feedback to the user.
            setFormSuccess(false);
        }

        

    };


    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [salutation, setSalutation] = useState("");
    // const [country, setCountry] = useState("");
    // const [email, setEmail] = useState("");
    // const [company, setCompany] = useState("");
    // const [message, setMessage] = useState("");
    // const [error, setError] = useState('');


    // const handleFirstNameChange = (e) => {
    //     setFirstName(e.target.value);
    // };
    // const handleLastNameChange = (e) => {
    //     setLastName(e.target.value);
    // };

    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    //     setError('');
    // };

    // const handleSalutationChange = (e) => {
    //     setSalutation(e.target.value);
    // };

    // const handleCountryChange = (e) => {
    //     setCountry(e.target.value);
    // };

    // const handleCompanyChange = (e) => {
    //     setCompany(e.target.value);
    // };
    // const handleMessageChange = (e) => {
    //     setMessage(e.target.value);
    // };

    // const formField = useRef();
    // const handleSubmit = async (e) => {
    //     e.preventDefault();


    //         try {

    //             const formData = {
    //                 firstName,
    //                 lastName,
    //                 email,
    //                 company,
    //                 salutation,
    //                 country,
    //                 message,
    //             };

    //             emailjs
    //                 .send(
    //                     "service_melangedigital",
    //                     "template_d80pgaj",
    //                     {
    //                         from_name: formData.name,
    //                         to_name: "Sanket Bolinjkar",
    //                         from_email: formData.email,
    //                         from_phone: formData.phone,
    //                         from_company: formData.company,

    //                         to_email: "hello@melangedigital.in",
    //                     },
    //                     "11W3shu7B6S46t437"
    //                 )
    //                 .then(
    //                     () => {


    //                         if (formField.current) {
    //                             formField.current.reset();
    //                         }
    //                     },
    //                     (error) => {
    //                         console.log(error);
    //                         alert("Something went wrong!");
    //                     }
    //                 );

    //             // Reset form fields
    //             setName("");
    //             setEmail("");
    //             setPhone("");
    //             setCompany("");
    //             setLoader(false)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }



    return (
        <>
            <Navbar />
            <div className="mainPage 2xl:px-[120px] lg:px-20 lg:mt-[4rem] lg:py-20 px-5 py-10 sm:px-10 ">
                <div className="title lg:text-4xl text-[28px] text-box-red   font-antonio lg:mt-0 mt-20"  >
                    Contact Us
                </div>
                <div className="form lg:mt-4 mt-1 ">
                    <form onSubmit={handleSubmit} >
                        <div className="formDiv lg:grid grid-cols-2 lg:gap-x-[10px] lg:space-y-[12px] space-y-[16px]">
                            <CustomSelect onSalutationChange={handleSalutationChange}  formSuccess={formSuccess}/>
                            <CustomCountry onCountryChange={handleCountryChange}  formSuccess={formSuccess}/>
                            <input value={formData.name} type="text" placeholder='FIRST NAME' className='border-[1px] uppercase lg:text-[18px] text-[16px] border-black  outline-none py-2 lg:px-6 px-3 h-[50px] w-full font-Barlow placeholder-red-600 font-medium' onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                            <input value={formData.lastName} type="text" placeholder='LAST NAME' className='border-[1px] uppercase lg:text-[18px] text-[16px] border-black outline-none py-2 lg:px-6 px-3 h-[50px] w-full font-Barlow placeholder-red-600 font-medium' onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                            <input value={formData.companyName} type="text" placeholder='COMPANY NAME' className='border-[1px] uppercase lg:text-[18px] text-[16px] border-black   outline-none py-2 lg:px-6 px-3 h-[50px] w-full font-Barlow placeholder-red-600 font-medium' onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} />
                            <input value={formData.email} type="mail" placeholder='EMAIL ID' className='border-[1px] uppercase lg:text-[18px] text-[16px] border-black   outline-none py-2 lg:px-6 px-3 h-[50px] w-full font-Barlow placeholder-red-600 font-medium' onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                        </div>
                        <textarea value={formData.message} type="text" placeholder='YOUR MESSAGE' className="border-[1px] uppercase lg:text-[18px] text-[16px] border-black lg:h-[160px] mt-4  outline-none py-2 lg:px-6 px-3 w-full font-Barlow placeholder-red-600 font-medium resize-none h-[149px]" onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                        <button className='font-Barlow font-bold bg-box-red text-white p-2 lg:text-[18px] text-[16px] mt-3 lg:w-32 w-[100%] h-12 cursor-pointer' type='submit'>SUBMIT</button>
                    </form>


                </div>
                <div className="title lg:text-4xl text-[28px]  font-antonio lg:mt-20 mt-10"  >
                    Email
                </div>
                <div className="emailLinks">
                    <div className="generic flex space-x-8 font-Barlow lg:mt-9 mt-6">
                        <h2 className='text-box-red text-[16px] lg:text-2xl lg:w-60 w-[7.4rem] whitespace-nowrap leading-6'>GENERIC QUERY</h2>
                        <a href="mailto:info@aartechsolonics.com">  <h2 className=" text-[16px] lg:text-2xl font-semibold">info@aartechsolonics.com</h2></a>
                    </div>
                    <div className="seles flex space-x-8 font-Barlow">
                        <h2 className='text-box-red text-[16px] lg:text-2xl  lg:w-60 w-[7rem] whitespace-nowrap'>SALES QUERY</h2>
                        <a href="mailto:sales@aartechsolonics.com"><h2 className=" text-[16px] lg:text-2xl font-semibold">sales@aartechsolonics.com</h2></a>
                    </div>
                </div>
                <div className="title lg:text-4xl text-[28px]  font-antonio lg:mt-20 mt-10 lg:mb-9 mb-6">
                    Address & Phone
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-x-7 lg:gap-y-[30px] gap-y-6 ">
                    <div className="addressbox border-[1px] border-black w-[100%] lg:h-[323px] h-auto py-4 px-4">
                        <div className="boxtitle text-box-red font-bold flex items-center justify-center lg:my-5 font-Barlow lg:text-[24px] text-[20px]">
                            REGISTERED OFFICE
                        </div>
                        <div className="boxContent flex flex-col leading-[26px] space-x-10 font-[400]">
                            <ul className='list-disc lg:ml-9 ml-6 '>
                                <a href="https://goo.gl/maps/NYPZGaFHh2MLaXMK8" target='_blank'><li className='font-Barlow  lg:w-[320px] lg:text-[20px] my-4  text-foot-blue'>“Ashirwad” E2/57, Arera Colony, Bhopal, Madhya Pradesh (M.P.) India 462016</li></a>

                                <a href="tel:+917552463593"><li className='font-Barlow lg:text-[20px] my-4 text-foot-blue'>Tel:+91-755-2463593/ <a href='tel:+917554276335'><span>4276335 </span></a> </li></a>

                                <a href="tel: +919752531167 "><li className='font-Barlow lg:text-[20px] lg:mt-4 mb-0 text-foot-blue'>Mob No.+91-9752531167, <a href="tel:+919993091167"><span>9993091167</span></a></li></a>
                            </ul>
                        </div>
                    </div>
                    <div className="addressbox border-[1px] border-black w-[100%] lg:h-[323px] h-auto py-4 px-4">
                        <div className="boxtitle text-box-red font-bold flex items-center justify-center lg:my-5 font-Barlow lg:text-[24px] text-[20px]">
                            UNIT #1, MANDIDEEP
                        </div>
                        <div className="boxContent flex flex-col leading-[26px] lg:space-x-10 font-[400] ">
                            <ul className='list-disc  lg:ml-8 ml-6 '>
                                <a href="https://goo.gl/maps/Z45HNNGJcqrP7KA39" target='_blank' ><li className='font-Barlow lg:text-[20px] my-4 w-full text-foot-blue'>35-A/36 Sector-B, Industrial Area, Mandideep, District Raisen, (M.P.) India 462046
                                </li></a>
                                <a href="tel:+917480233020"><li className='font-Barlow lg:text-[20px] my-4 text-foot-blue'>
                                    Tel: +91-7480-233020</li></a>
                                <a href="tel:+919993091168"><li className='font-Barlow lg:text-[20px] w-[106%] lg:mt-4 mb-0 text-foot-blue'>Mob No. +91-9993091168,<a href='tel:+917389905790'><span>7389905790, </span></a><br /> <span>+91-9752531167</span> </li></a>
                            </ul>
                        </div>
                    </div>
                    <div className="addressbox border-[1px] border-black w-[100%] lg:h-[323px] h-60 py-4 px-4 ">
                        <div className="boxtitle text-box-red font-bold flex items-center justify-center lg:my-5 font-Barlow lg:text-[24px] text-[20px]">
                            UNIT #2, PARWANOO
                        </div>
                        <div className="boxContent flex flex-col leading-[26px] lg:space-x-10 font-[400] ">
                            <ul className='list-disc  lg:ml-9 ml-6 '>
                                <a href="https://maps.app.goo.gl/h93sv4ZW1JgBFHa99" target='_blank'><li className='font-Barlow lg:text-[20px] my-4 w--full text-foot-blue '>Near Him Cold Storage, Sector-1A, Parwanoo District Solan, Himachal Pradesh (H.P.) 173220
                                </li></a>
                                <a href="tel:+919418509967"><li className='font-Barlow lg:text-[20px]  text-foot-blue'>
                                    Tel: +91-9418509967</li></a>

                            </ul>
                        </div>
                    </div>
                    <div className="addressbox border-[1px] border-black w-[100%] lg:h-[323px] h-60 py-4 px-4 "  >
                        <div className="boxtitle text-box-red font-bold flex items-center justify-center lg:my-5 font-Barlow lg:text-[24px] text-[20px] uppercase">
                            # Onshore Office USA
                        </div>
                        <div className="boxContent flex flex-col leading-[26px] lg:space-x-10 font-[400] ">
                            <ul className='list-disc  lg:ml-9 ml-6 '>
                                <a href="" target='_blank'><li className='font-Barlow lg:text-[20px] my-4 w--full text-foot-blue '>16192 Coastal Highway, Lewes, Delaware 19958, USA
                                </li></a>
                                <a href=""><li className='font-Barlow lg:text-[20px]  text-foot-blue'>

                                    Tel: +1 213-401-2727</li></a>

                            </ul>
                        </div>
                    </div>
                    <div className="addressbox border-[1px] border-black w-[100%] lg:h-[323px] h-60 py-4 px-4 ">
                        <div className="boxtitle text-box-red font-bold flex items-center justify-center lg:my-5 font-Barlow lg:text-[24px] text-[20px] uppercase">
                            # Onshore Office UK
                        </div>
                        <div className="boxContent flex flex-col leading-[26px] lg:space-x-10 font-[400] ">
                            <ul className='list-disc  lg:ml-9 ml-6 '>
                                <a href="" target='_blank'><li className='font-Barlow lg:text-[20px] my-4 w--full text-foot-blue '>71-75 Shelton Street Convent Garden London, United Kingdom
                                </li></a>


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact
