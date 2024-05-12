import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SubmittedCard from "./SubmittedCard";



const SubmittedAssignment = () => {
    const SubmitAssignment = useLoaderData()
    const [submits, SetSubmits] = useState(SubmitAssignment);
    return (
        <div className="">
            <div>
                <h1 className="text-4xl text-center my-4">Submitted Assignments </h1>
            </div>
            <div className=" grid  justify-center  items-center">

                {
                    submits?.map(submit =>
                        <SubmittedCard key={submit._id} submit={submit} submits={submits} setSubmits={SetSubmits}>

                        </SubmittedCard>
                    )
                }
            </div>
        </div>
    );
};

export default SubmittedAssignment;