import React from "react";
import {useNavigate} from 'react-router-dom'
// import GeneratePDF from "./GeneratePDF";
// import GeneratePDFUser from "./GeneratePdfUser";

function AlreadySubmitted({details}) {

    const navigate=useNavigate();
    const generateUserPdf = (details)=>{
        navigate(
            "/user/userpdf",  
            {
                state:{
                    details:details
                }
            },
            {
                target:"_blank"
            }
        );
        // console.log(details)
    }

    return (
        <div className="flex flex-col space-y-4 mt-24 justify-center items-center w-full">
            <h2 className="text-3xl font-light text-gray-500 mb-2">You have submitted!</h2>
            <button 
                onClick={()=>{generateUserPdf(details)}}
                className="bg-primary rounded-3xl w-fit text-white py-2 px-10 font-semibold" 
            >
                View
            </button>
        </div>
    );
}

export default AlreadySubmitted;
