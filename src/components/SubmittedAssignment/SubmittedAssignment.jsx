import { useEffect, useState } from "react";

import SubmittedCard from "./SubmittedCard";
import Footer from "../Head&Foot/Footer";



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
        <><div className=" py-4">
            <div>
                <h1 className="text-4xl text-center mb-20 font-bold ">Submitted Assignments </h1>
            </div>
            {submits.length > 0 ? (<div className=" grid  justify-center  items-center">

                {submits?.map(submit => <SubmittedCard key={submit._id} refetch={refetch} SetRefetch={SetRefetch} submit={submit}>

                </SubmittedCard>
                )}
            </div>) : (<div className="flex-col lg:flex justify-center items-center">
                <img src="https://i.ibb.co/RDdKfFT/all-in-one-membership-software-solution.png" alt="No pending assignments" />
                <h1 className="text-2xl font-abc font-bold">Nobody submitted any assignments</h1>

            </div>)}

        </div><Footer /></>
    );
};

export default SubmittedAssignment;