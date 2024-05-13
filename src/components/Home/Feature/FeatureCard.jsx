import { FaUserCircle } from "react-icons/fa";
import { FcAddDatabase } from "react-icons/fc";
import { ImBooks } from "react-icons/im";
import { MdOutlineUpdate, MdPersonSearch } from "react-icons/md";
import { VscSymbolInterface } from "react-icons/vsc";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const FeatureCard = () => {
    useEffect(() => {
        Aos.init({ duration: 2500 })
    }, [])
    return (
        <div >
            <div>
                <h1 className="text-center text-indigo-700 font-abc text-xl font-bold">
                <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            'Feature',
                            1000,
                            'Feature Section ',
                            2000,
                        ]}
                        speed={50}
                        style={{ fontSize: '2em' }}
                        repeat={Infinity}
                    />
                </h1>
            </div>
            <div data-aos="fade-right" className="">
                <div className="grid gap-4 mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
                    <div className="mx-auto max-w-[350px] space-y-4 rounded-lg  bg-teal-200 p-6 shadow-lg md:w-[350px]  text-black">
                        <ImBooks className="text-5xl " />
                        <div className="grid gap-2">
                            <h1 className="text-lg font-semibold ">Access a Wide Range of Assignments</h1>
                            <p className="text-sm text-gray-500 dark:text-black/60">Dive into a vast repository of assignments spanning various subjects and topics, carefully curated to cater to your academic needs. Whether you&apos;re studying mathematics, literature, or science, you&apos;ll find an extensive collection of assignments to help you excel in your studies.

                            </p>

                        </div>
                    </div>
                    <div className="mx-auto max-w-[350px] space-y-4 rounded-lg  bg-green-300 p-6 shadow-lg md:w-[350px]  text-black">
                        <FcAddDatabase className="text-5xl" />
                        <div className="grid gap-2">
                            <h1 className="text-lg font-semibold ">Contribute Your Own Assignments</h1>
                            <p className="text-sm text-gray-500 dark:text-black/60">Share your expertise and contribute to the collective knowledge of the StudyHub community by uploading your own assignments. By sharing your assignments, you not only help fellow students but also foster a collaborative learning environment where knowledge is freely exchanged and shared.

                            </p>

                        </div>
                    </div>
                    <div className="mx-auto max-w-[350px] space-y-4 rounded-lg  bg-yellow-200 p-6 shadow-lg md:w-[350px]  text-black">
                        <VscSymbolInterface className="text-5xl" />
                        <div className="grid gap-2">
                            <h1 className="text-lg font-semibold ">User-Friendly Interface</h1>
                            <p className="text-sm text-gray-500 dark:text-black/60">Navigate StudyHub with ease thanks to our intuitive and user-friendly interface. Designed with simplicity and usability in mind, our interface ensures that finding and accessing assignments is a seamless experience for all users, regardless of their level of technical proficiency.

                            </p>

                        </div>
                    </div>
                </div>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 ">
                    <div className="mx-auto max-w-[350px] space-y-4 rounded-lg  bg-red-100 p-6 shadow-lg md:w-[350px]  text-black">
                        <MdPersonSearch className="text-5xl" />
                        <div className="grid gap-2">
                            <h1 className="text-lg font-semibold ">Search and Filter Functionality</h1>
                            <p className="text-sm text-gray-500 dark:text-black/60">Effortlessly discover assignments relevant to your studies using our powerful search and filter functionality. With advanced search capabilities and customizable filters, you can quickly narrow down your search results based on subject, topic, difficulty level, and more, saving you time and effort.

                            </p>

                        </div>
                    </div>
                    <div className="mx-auto max-w-[350px] space-y-4 rounded-lg  bg-blue-100 p-6 shadow-lg md:w-[350px]  text-black">
                        <FaUserCircle className="text-5xl" />
                        <div className="grid gap-2">
                            <h1 className="text-lg font-semibold "> Free Access for All Users</h1>
                            <p className="text-sm text-gray-500 dark:text-black/60">Enjoy unrestricted access to all assignments on StudyHub without any hidden fees or subscriptions. We believe that education should be accessible to all, which is why we offer our platform completely free of charge to registered users. Explore, learn, and grow with StudyHub at no cost to you.

                            </p>

                        </div>
                    </div>
                    <div className="mx-auto max-w-[350px] space-y-4 rounded-lg  bg-indigo-300 p-6 shadow-lg md:w-[350px]  text-black">
                        <MdOutlineUpdate className="text-5xl" />
                        <div className="grid gap-2">
                            <h1 className="text-lg font-semibold ">Regular Updates and New Content</h1>
                            <p className="text-sm text-gray-500 dark:text-black/60">Stay ahead of the curve with regular updates and new content added to StudyHub. Our dedicated team works tirelessly to keep our database fresh and up-to-date, ensuring that you always have access to the latest assignments and resources to support your academic journey.

                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;