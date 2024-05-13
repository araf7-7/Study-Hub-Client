import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { toast } from "sonner";

const SubmittedCard = ({ submit, refetch, SetRefetch }) => {
    const { name, assignmentMark, assignmentName, note, doc, _id } = submit || {};
    const [showPreview, setShowPreview] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    const handleGiveMarks = event => {
        event.preventDefault()
        const form = event.target;
        const feedback = form.feedback.value
        const obtainedMark = parseInt(form.obtainedMark.value)
        const updatedMarks = { feedback, obtainedMark, status: 'Mark Obtained' }
        console.log(updatedMarks);


        fetch(`http://localhost:5000/submit/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedMarks)
        })
            .then(res => res.json)
            .then(data => {
                console.log(data)
                
                    toast.success('Marks Given Successfully')
                    setShowModal(false)
                    SetRefetch(!refetch)

              
            })
    }

    return (
        <div className="">
            <div className="">
                <div className="w-full max-w-md px-8 py-4 mt-16 bg-gradient-to-r from-green-500 to-lime-500 rounded-lg shadow-lg">
                    <h2 className="mt-2 text-xl font-semibold text-black md:mt-0">{assignmentName}</h2>
                    <p className="mt-2 font-medium text-black text-sm">Examinee Name: {name}</p>
                    <p className="mt-2 font-medium text-sm text-black">Note: {note}</p>
                    <p className="mt-2 font-medium text-sm text-black">Total Marks: {assignmentMark}</p>
                    <div className="flex mt-2 justify-end gap-4">
                        <button onClick={() => setShowPreview(true)} className="btn transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none border-0 bg-lime-800 hover:bg-lime-600 text-white">Preview</button>
                        <button onClick={openModal} className="btn transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none border-0 bg-lime-800 hover:bg-lime-600 text-white">Give Mark</button>
                    </div>
                </div>
            </div>
            {
                showPreview &&
                <div className="w-full h-full fixed top-0 left-0 z-[999999] bg-[#3e3e3e9c] flex justify-center items-center">
                    <div className="w-[500px] relative">
                        <iframe src={doc} width="100%" height="500px" />
                        <div className="cancelPreView" onClick={() => setShowPreview(false)}>
                            <RxCross2 />
                        </div>
                    </div>
                </div>
            }
            {
                showModal &&
                <div className="w-full h-full fixed top-0 left-0 z-[999999] bg-[#3e3e3e9c] flex justify-center items-center">
                    <form onSubmit={handleGiveMarks}>
                        <div className="modal-box bg-lime-200">
                            <form method="dialog">
                                <button onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold mb-2 text-lg">Submitted Link: <a className="underline text-red-600 font-abc">{doc}</a></h3>
                            <h3 className="font-bold mb-2 text-lg">Examinee Note: <a className="font-abc text-red-600">{note}</a></h3>
                            <div className="flex gap-2 items-center justify-center">
                                <textarea className="textarea h-10 bg-lime-100 w-full" name="obtainedMark" placeholder="Give Marks" required></textarea>
                                <p className="bg-red-500 p-2 rounded-md font-semibold text-center">/{assignmentMark}</p>
                            </div>
                            <textarea className="textarea bg-lime-100 w-full mt-2" name="feedback" placeholder="Feedback"></textarea>
                            <button type="submit" className="btn mt-2 bg-lime-500 border-0 hover:bg-lime-300 btn-block">Submit</button>
                        </div>
                    </form>
                </div>
            }
        </div>
    );
};

export default SubmittedCard;
