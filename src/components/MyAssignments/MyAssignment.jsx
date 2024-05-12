import { useEffect, useState } from "react";
import UseAuth from "../UseAuth";
import MyAssignmentCard from "./MyAssignmentCard";

const MyAssignment = () => {
  const { user } = UseAuth();
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/submit/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAssignments(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [user?.email]);

  return (
    <div>
      {assignments.length > 0 ? (
        <div className="bg-green-200 py-10">
          <div className="grid grid-cols-3 gap-10">
            {assignments.map((assignment) => (
              <MyAssignmentCard
                key={assignment.email}
                assignments={assignments}
                assignment={assignment}
                setAssignments={setAssignments}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <img src="https://i.ibb.co/QrhB74h/trendy-flat-of-project-complete-vector-43524971-removebg-preview.png" alt="No pending assignments" />
          <h1 className="text-2xl font-abc font-bold">You did not submitted any assignments</h1>
         
        </div>
      )}
    </div>
  );
};

export default MyAssignment;
