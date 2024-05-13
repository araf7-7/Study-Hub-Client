import { useEffect, useState } from "react";

import SubmittedCard from "./SubmittedCard";



const SubmittedAssignment = () => {

    const [refetch, SetRefetch] = useState(false);
    const [submits, SetSubmits] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/pending`)
            .then(res => res.json())
            .then(res => SetSubmits(res))
    }, [refetch])
    console.log('asdas', submits);
    return (
        <div className="">
            <div>
                <h1 className="text-4xl text-center my-4">Submitted Assignments </h1>
            </div>
            {submits.length > 0 ? (<div className=" grid  justify-center  items-center">

                {
                    submits?.map(submit =>
                        <SubmittedCard key={submit._id} refetch={refetch} SetRefetch={SetRefetch} submit={submit}>

                        </SubmittedCard>
                    )
                }
            </div>) : (<div className="flex justify-center items-center">
                <img src="https://i.ibb.co/QrhB74h/trendy-flat-of-project-complete-vector-43524971-removebg-preview.png" alt="No pending assignments" />
                <h1 className="text-2xl font-abc font-bold">You did not submitted any assignments</h1>

            </div>)

            }

        </div>
    );
};

export default SubmittedAssignment;