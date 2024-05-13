
// import { useCallback, useEffect, useState } from "react";
// import { TypeAnimation } from "react-type-animation";
// import { Fade } from "react-awesome-reveal";
import "./Banner.css";
import Lottie from "lottie-react";
import BannerPic from "./Banner.json";
import { Fade } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
    return (
        <div className="">
            <div className="homeWrapper ">
            <div className="lg:pl-4">
                        <p className="font-bold pl-4 text-white text-xl "><TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                'Welcome',
                                1000,
                                'Welcome To ',
                                2000,
                                'Welcome To Study Hub ',
                                3000,
                            ]}
                            speed={50}
                            style={{ fontSize: '2em' }}
                            repeat={Infinity}
                        /></p>
                        <Fade>
                            <p className='bannerText md:text-2xl text-white p-4 md:mt-5'>StudyHub is your ultimate destination for academic excellence. With StudyHub, students can access a vast repository of assignments spanning various subjects and difficulty levels, empowering them.</p>
                        </Fade>


                    </div>
                <Lottie className="w-[400px] hidden lg:flex" animationData={BannerPic} />

                <div className="wave">
                    <img src="https://i.ibb.co/ZY7GQmt/wave.png" />
                </div>



            </div>
        </div>
    );
};
export default Banner;