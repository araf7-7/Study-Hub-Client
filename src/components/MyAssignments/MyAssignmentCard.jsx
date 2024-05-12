

const MyAssignmentCard = ({ assignment }) => {
    const {  doc, note, submittedOn,  assignmentName, status } = assignment || {}
    return (
        
        <div>
            <div className="max-[350px] mx-auto space-y-6 rounded-2xl  bg-gradient-to-r from-green-500 to-lime-500 px-6 py-4 shadow-md  md:w-[350px]">
               <h1 className="text-xl"> <span className="text-orange-700">Assignment Name:</span> {assignmentName}</h1>
               <h1 className="text-xl"> <span className="text-orange-700">Submitted On:</span> {submittedOn}</h1>
               <h1 className="text-xl"> <span className="text-orange-700">Submitted Link: </span> {doc}</h1>
               <h1 className="text-xl"> <span className="text-orange-700">Note: </span>{note}</h1>
               <h1 className="text-xl"> <span className="text-orange-700">Status:</span> {status}</h1>

              
                
               
            </div>
        </div>
    );
};

export default MyAssignmentCard;