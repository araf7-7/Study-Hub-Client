import { useLoaderData } from "react-router-dom";
// import AssignmentCard from "../Home/AssignmentCard/AssignmentCard";
import AllAssignmentsCard from "./AllAssignmentsCard";


const Assignments = () => {
    const assignments = useLoaderData();
    return (
        <div>
            <div>
                <h1 className="text-4xl text-center my-10">All Assignments Page</h1>
            </div>
            <div className="grid grid-cols-3 justify-center container mx-auto gap-10">

                {
                    assignments?.map(assignment =>
                        <AllAssignmentsCard key={assignment._id} assignment={assignment}>
                        </AllAssignmentsCard>
                    )
                }
            </div>
        </div>

    );
};

export default Assignments;