import { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import validUrl from "valid-url";

import { AuthContext } from "../FirebaseProvider/FirebaseProvider";




const TakeAssignment = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    const assignment = useLoaderData();
    const { id } = useParams();
    const assignments = assignment.find(assignment => assignment._id === id);
    console.log(assignments);


    const handleSubmit = event => {

        event.preventDefault();

        const form = event.target;
        const doc = form.doc.value;
        const note = form.note.value;
        const name = user?.displayName
        const email = user?.email
        const today = new Date()
        const day = today.getDate()
        const month = today.getMonth()
        const year = today.getFullYear()
        const date = `${year}/${month}/${day}`
        const urlPattern = /^(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9.-]+(\.[a-zA-Z]{2,}){1,2}(\/\S*)?$/;
        if (!urlPattern.test(doc)) {
            return toast.error("please enter a valid link")
        }

        if (!validUrl.isUri(doc)) {
            return toast.error("please give a valid url")
        }


        const submitAssignment = { status: 'Pending', feedback: '', obtainedMark: 0, doc, note, name, email, assignmentName: assignments.name, assignmentMark: assignments.marks, submittedOn: date, };
        console.log(submitAssignment)

        fetch('http://localhost:5000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(submitAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Assignment Submitted')
                    navigate('/assignment')
                }
            })
            .catch(error => {
                console.error('Error submitting assignment:', error);
                // Handle error, e.g., display an error message to the user
            });
    }
    return (

        <div>
            <div className="max-[350px] mx-auto space-y-6 rounded-2xl bg-slate-100/70 px-6 py-4 shadow-md  text-black md:w-[350px]">

                <form onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <h2 id='' className="font-medium text-center text-slate-800 sm:text-lg md:text-xl ">{assignments.name}</h2>
                        <h2 className="font-medium text-center text-slate-800 sm:text-lg md:text-xl ">Marks: {assignments.marks}</h2>
                        <h1 className="font-medium  text-slate-800 sm:text-lg md:text-xl">Enter Your Name</h1>
                        <input type="text" id="name" readOnly defaultValue={user?.displayName} placeholder="Enter Your Name" className="input input-bordered input-md w-full max-w-xs" />
                        <h1 className="font-medium  text-slate-800 sm:text-lg md:text-xl">Enter Your Email</h1>
                        <input type="email" readOnly defaultValue={user?.email} id="email" placeholder="Enter Your Email" className="input input-bordered input-md w-full max-w-xs" />
                        <h1 className="font-medium  text-slate-800 sm:text-lg md:text-xl">Submit Your Pdf/Doc Link</h1>
                        <input type="url" name="assignmentLink" id="doc" placeholder="Submit here" className="input input-bordered input-md w-full max-w-xs" />
                        {/* <input type="url" name="assignmentLink" placeholder="PDF url" />
                        <textarea  className="input input-bordered input-md w-full max-w-xs" name="SubmissionNote" placeholder="Submition note" /> */}
                        <h1 className="font-medium  text-slate-800 sm:text-lg md:text-xl">Notes</h1>
                        <textarea id="note" className="textarea w-full textarea-bordered" placeholder="Bio"></textarea>
                        <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-green-500 focus:dark:ring-green-500 hover:dark:ring-green-500 dark:text-gray-50">Submit Assignment </button>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default TakeAssignment;