import { useLoaderData } from "react-router-dom";
// import AssignmentCard from "../Home/AssignmentCard/AssignmentCard";
import AllAssignmentsCard from "./AllAssignmentsCard";
import { useState } from "react";


const Assignments = () => {
    const loadedAssignments = useLoaderData();
    const [assignments , setAssignments] =useState(loadedAssignments)
    return (
        <div>
            <div>
                <h1 className="text-4xl text-center my-10">All Assignments Page</h1>
            </div>
            <div className="grid grid-cols-3 justify-center container mx-auto gap-10">

                {
                    assignments?.map(assignment =>
                        <AllAssignmentsCard key={assignment._id} assignment={assignment} assignments={assignments} setAssignments={setAssignments}>
                            
                        </AllAssignmentsCard>
                    )
                }
            </div>
        </div>

    );
};

export default Assignments;