import { useLoaderData } from "react-router-dom";
// import AssignmentCard from "../Home/AssignmentCard/AssignmentCard";
import AllAssignmentsCard from "./AllAssignmentsCard";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";


const Assignments = () => {
    const loadedAssignments = useLoaderData();
    const [difficulty, setDifficulty] = useState('');
    const [assignments, setAssignments] = useState(loadedAssignments)
    useEffect(() => {
        fetch(`http://localhost:5000/assignmentsCreate?difficulty=${difficulty}`)
            .then(res => res.json())
            .then(res => setAssignments(res))
    }, [difficulty])

    //     const [count, setCount] = useState(1);
    //     useEffect(() => {
    //         fetch('http://localhost:5000/assignmentCount')
    //             .then(res => res.json())
    //             .then(data => setCount(data));
    //     }, [])
    //     const itemPerPage = 3
    //     const numberOfPages = Math.ceil(count / itemPerPage);
    //     const pages = []
    //     for (let i = 0; i < numberOfPages; i++) {
    //         pages.push(i)
    //     }
    // console.log(pages);
    return (
        <div className="">
            <Helmet>
                <title>Assignments</title>
            </Helmet>
            <div>
                <h1 className="text-4xl text-center py-10">All Assignments Page</h1>
            </div>
            <div className="container mx-auto ">
                <div className="flex gap-2 items-center justify-center">
                    <h1 className="text-2xl">Filter :</h1>
                    <select className="p-2 border-2 w-36 border-indigo-300 rounded" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                        <option value="">All</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>


                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center container mx-auto gap-10">

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
// Mehedi Hasan Shihab
// const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 3;
//     // Pagination
//     const totalPages = Math.ceil(volunteers.length / itemsPerPage);
//     const start = (currentPage - 1) * itemsPerPage;
//     const end = start + itemsPerPage;
//     const currentVolunteers = volunteers.slice(start, end);

//     // Handle page change
//     const changePage = page => setCurrentPage(page);

//     // Previous page
//     const prevPage = () => {
//         if (currentPage > 1) {
//             setCurrentPage(prevPage => prevPage - 1);
//         }
//     };

//     // Next page
//     const nextPage = () => {
//         if (currentPage < totalPages) {
//             setCurrentPage(prevPage => prevPage + 1);
//         }
//     };