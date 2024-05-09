// import { Swiper, SwiperSlide } from 'swiper/react';
// import './styles.css';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';

// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// const Banner = () => {
//     return (
//         <div className=''>
//             <div>

//             </div>
//             <div className='h-[500px] w-['>
//                 <Swiper
//                     spaceBetween={30}
//                     centeredSlides={true}
//                     autoplay={{
//                         delay: 2500,
//                         disableOnInteraction: false,
//                     }}
//                     pagination={{
//                         clickable: true,
//                     }}
//                     navigation={true}
//                     modules={[Autoplay, Pagination, Navigation]}
//                     className=" "
//                 >
//                     <SwiperSlide><img className='' src="https://i.ibb.co/pJdRdHK/Getty-Images-595349163.jpg" alt="" /></SwiperSlide>
//                     <SwiperSlide><img className='w-full h-full'  src="https://i.ibb.co/sj1vngS/new-File-3.jpg" alt="" /></SwiperSlide>
//                     <SwiperSlide><img  className='w-full h-full' src="https://i.ibb.co/s6v3vGM/high-school-teacher-multicultural-studies.webp" alt="" /></SwiperSlide>
//                     <SwiperSlide><img src="https://i.ibb.co/KxJ6xT8/BC-What-Is-Student-Teaching-247733fd61.webp" alt="" /></SwiperSlide>
//                     <SwiperSlide><img src="https://i.ibb.co/F4SBw0B/Teacher-Student-Relationship-1410x820-705x410.jpg" alt="" /></SwiperSlide>

//                 </Swiper>
//             </div>
//         </div>
//     );
// };

// export default Banner;
import { useCallback, useEffect, useState } from "react";

const Banner = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const carouselImages = ['https://i.ibb.co/pJdRdHK/Getty-Images-595349163.jpg', 'https://educationlifeskills.com/storage/2018/02/AdobeStock_61769035.jpeg', 'https://i.ibb.co/ZJ1VR1m/concentrated-businesswoman-looking-laptop-holding-pen-23-2147601507.jpg', 'https://i.ibb.co/KxJ6xT8/BC-What-Is-Student-Teaching-247733fd61.webp', 'https://i.ibb.co/F4SBw0B/Teacher-Student-Relationship-1410x820-705x410.jpg'];
    // const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1);
    const nextSlider = useCallback(() => setCurrentSlider((currentSlider) => currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1), [carouselImages.length]);

    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [nextSlider]);

    return (
        <div className="flex container mx-auto bg-green-100 p-10 m-10 rounded-lg">
            <div className="flex-1">
                <div className=" md:w-auto col-span-2 lg:col-span-1 items-center content-center">
                    <div className="lg:pl-4">
                        <p className="font-bold text-3xl">Welcome To StudyHub</p>
                        <p className='md:text-xl w-[400px] text-base text-gray-500 md:mt-5'>StudyHub is your ultimate destination for academic excellence. With StudyHub, students can access a vast repository of assignments spanning various subjects and difficulty levels, empowering them to excel in their academic pursuits. Additionally, students can contribute to the learning community by sharing their own assignments, fostering collaboration and knowledge sharing. Whether you&apos;re seeking assistance with your assignments or eager to share your expertise, StudyHub is the go-to platform for all your academic needs.</p>
                       
                    </div>
                </div>
            </div>
            <div className="h-60 rounded-lg w-[700px] md:h-[470px] lg:h-[540px] relative overflow-hidden opacity-100">
                {/* arrow left */}
                {/* <button onClick={prevSlider} className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-green-100 rounded-full w-6 h-6 md:w-8 md:h-8">
                    <svg className="w-4 h-4 md:w-6 md:h-6 icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#00000" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                </button> */}
                {/* arrow right */}
                {/* <button onClick={nextSlider} className="absolute top-1/2 z-50 right-3  flex justify-center items-center bg-green-100 rounded-full w-6 h-6 md:w-8 md:h-8">
                    <svg className="w-4  text-black h-4 md:w-6 md:h-6 icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#00000" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                </button> */}
                {/* dots */}
                <div className="flex translate-x-8 justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
                    {carouselImages.map((_, inx) => (
                        <button key={_} onClick={() => setCurrentSlider(inx)} className={`rounded-full duration-500 bg-white ${currentSlider === inx ? "w-8" : "wz-2"} h-2`}></button>
                    ))}
                </div>
                {/* Carousel container */}
                <div className="ease-linear duration-500 flex transform-gpu" style={{ transform: `translateX(-${currentSlider * 100}%)` }}>
                    {/* sliders */}
                    {carouselImages.map((slide, inx) => (
                        <img key={slide} src={slide} className="min-w-full h-60 bg-black/20 sm:h-96 md:h-[540px] object-cover" alt={`Slider - ${inx + 1}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Banner;