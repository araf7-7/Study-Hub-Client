import { useState } from "react";
import { RxCross2 } from "react-icons/rx";



const SubmittedCard = ({ submit }) => {
    const { name, assignmentMark, assignmentName, note, doc } = submit || {}
    const [showPreview, SetShowPreview] = useState(false)
    return (
        <div className="  ">
            <div className=" ">
                <div className="w-full max-w-md px-8 py-4 mt-16  bg-gradient-to-r from-green-500 to-lime-500 rounded-lg shadow-lg ">
                    <h2 className="mt-2 text-xl font-semibold text-black md:mt-0">{assignmentName}</h2>
                    <p className="mt-2 font-medium text-black text-sm  ">Examinee Name : {name}</p>
                    <p className="mt-2 font-medium  text-sm text-black ">Note : {note}</p>
                    <p className="mt-2 font-medium text-sm text-black ">Total Marks : {assignmentMark}</p>
                    <div className="flex mt-2 justify-end gap-4">
                        <button onClick={() => SetShowPreview(true)} className="btn transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none border-0 bg-lime-800 hover:bg-lime-600 text-white">Preview</button>
                        <button className="btn transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none border-0 bg-lime-800 hover:bg-lime-600 text-white">Give Mark</button>
                    </div>
                </div>
            </div>
            {
                showPreview ?
                    <div className="w-full h-full fixed top-0 left-0 z-[999999] bg-[#3e3e3e9c] flex justify-center items-center">
                        <div className="w-[500px] relative">
                            <iframe src={doc} width="100%" height="500px" />
                            <div className="cancelPreView" onClick={() => SetShowPreview(false)}>
                                <RxCross2 />
                            </div>
                        </div>
                    </div>
                    : ""
            }
        </div>
    );
};

export default SubmittedCard;