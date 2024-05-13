

const MyAssignmentCard = ({ assignment }) => {
    const {  note, submittedOn, assignmentName, status, obtainedMark } = assignment || {};
    return (
        <div className="w-[max-content] mx-auto">
            <div className=" mx-auto space-y-6 rounded-2xl bg-gradient-to-r from-green-500 to-lime-500 px-6 py-4 shadow-md">
                <h1 className="text-xl"> <span className="font-bold">Assignment Name :</span> {assignmentName}</h1>
                <h1 className="text-xl"> <span className="font-bold">Submitted On :</span> {submittedOn}</h1>
                <h1 className="text-xl"> <span className="font-bold">Note : </span>{note}</h1>
                <h1 className="text-xl"> <span className="font-bold">Status :</span> {status}</h1>
                <h1 className="text-xl"> <span className="font-bold">Obtained Mark :</span> {obtainedMark}</h1>
                
            </div>
        </div>
    );
};

export default MyAssignmentCard;
