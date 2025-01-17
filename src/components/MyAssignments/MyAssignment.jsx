import { useEffect, useState } from "react";
import UseAuth from "../UseAuth";
import MyAssignmentCard from "./MyAssignmentCard";
import Footer from '../Head&Foot/Footer'
const MyAssignment = () => {
  const { user } = UseAuth();
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetch(`https://assignment-11-server-tawny-nine.vercel.app/submit/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAssignments(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [user?.email]);

  return (
    <div className="bg-indigo-300/70">
      <div className="text-4xl pt-10 text-center font-bold">
        My Assignments
      </div>
      {assignments.length > 0 ? (
        <div className=" py-10">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg gap-10">
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
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <img src="https://i.ibb.co/QrhB74h/trendy-flat-of-project-complete-vector-43524971-removebg-preview.png" alt="No pending assignments" />
          <h1 className="text-2xl font-abc font-bold">You did not submitted any assignments</h1>

        </div>
      )}
      <Footer></Footer>
    </div>

  );
};

export default MyAssignment;
