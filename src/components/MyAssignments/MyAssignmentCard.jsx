

const MyAssignmentCard = ({ assignment }) => {
    const {   submittedOn, assignmentName, status, obtainedMark,feedback } = assignment || {};
    return (
        <div className="md:w-[400px] h-[max-content] lg:w-[500px] mx-auto font-abc">
            <div className=" mx-auto space-y-6 rounded-2xl bg-gradient-to-r from-indigo-400  text-white to-sky-600 px-6 py-4 shadow-md">
                <h1 className="text-xl"> <span className="font-bold">Assignment Name :</span> <span className= " font-bold text-yellow-400 text">{assignmentName}</span></h1>
                <h1 className="text-xl"> <span className="font-bold">Submitted On :</span><span className= " font-bold text-yellow-400" > {submittedOn}</span></h1>
                <h1 className="text-xl"> <span className="font-bold">Feedback : </span> <span className= " font-bold text-yellow-400">{feedback}</span></h1>
                <h1 className="text-xl"> <span className="font-bold">Status :</span> <span className= " font-bold text-yellow-400">{status}</span></h1>
                <h1 className="text-xl"> <span className="font-bold">Obtained Mark :</span> <span className= " font-bold text-yellow-400">{obtainedMark}</span></h1>
            </div>
            
        </div>
    );
};

export default MyAssignmentCard;
