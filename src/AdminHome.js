import React, { useEffect, useState } from 'react'
import { ref, onValue } from "firebase/database"
import { auth, db } from "./firebase_config";
import { PDFExport } from "@progress/kendo-react-pdf";
import {useNavigate, useLocation} from 'react-router-dom'
import TitleSVG from './TitleSVG';


function AdminHome({submitted}) {
    const [userDetails, setUserDetails] = useState([])

    // const location=useLocation();
    // const submitted=location.state.submitted

    // const logout = () => {
    //     auth.signOut();
    // };
    // console.log("location : ",location)


    useEffect(() => {
       
        var dbRef = ref(db, "users/");

        onValue(dbRef, (snapshot) => {
            console.log("snapshot : ",snapshot.val())
            if (snapshot.exists()) {

                const userdata=snapshot.val()

                var tempDetails=[]

                var arrayObj = {};
                var arrNames = [
                    "postphd",
                    "prephd",
                    "awards",
                    "thesis",
                    "projects1",
                    "projects2",
                    "projects3",
                    "projects4",
                    "projects5",
                    "books",
                    "publications1",
                    "publications2",
                    "publications3",
                    "publications4",
                    "publications5",
                    "patents",
                    "filedPatents",
                    "referee",
                ];

                for(var uid in userdata)
                {
                    // arrayObj={}
                    console.log(uid)
                    var user=userdata[uid]
                    if(user.formSubmitted===submitted)
                    {
                        // for (var aname of arrNames) {
                        //     if (user[aname] === undefined) arrayObj[aname] = [];
                        // }

                        tempDetails.push({
                            ...userdata[uid]
                            // ...arrayObj
                        })
                    }
                }

                // setDetails({
                //     ...snapshot.val(),
                //     ...arrayObj,
                // });
                // console.log(tempDetails)
                setUserDetails([...tempDetails])

                // console.log(snapshot.val().formno);
                // setformno(snapshot.val().formno);
                // console.log({
                //     ...snapshot.val(),
                //     ...arrayObj,
                // });
            } 
        });
    }, [])

    // useEffect(() => {
    //     console.log(location.state)
    //     if(location.state)
    //     {
    //         setSubmitted(location.state.submitted)
    //         setLogout(location.state.logout)
    //     }
    // }, [location.state])
    
    const pdfExportComponent = React.useRef(null);
    const [download, setDownload] = useState(false)
    
    // const ListPdf =() => {
    //     return(
    //     <PDFExport paperSize="A4" scale={0.6} margin="1.3cm" ref={pdfExportComponent}>
    //     <div className="h-full w-full flex flex-col items-center justify-center mt-12">
    //         <table className="table-auto w-9/12 border-2 border-collapse break-all rounded-xl drop-shadow-2xl">
    //             <thead className="bg-primary text-white">
    //                 <tr className="border border-white-400 border-collapse break-all">
    //                 <th className="p-3 border border-white-400 border-collapse break-all">Sl.No</th>
    //                 <th className="p-3 border border-white-400 border-collapse break-all">Full Name</th>
    //                 <th className="p-3 border border-white-400 border-collapse break-all">E-mail</th>
    //                 <th className="p-3 border border-white-400 border-collapse break-all">DOB</th>
    //                 <th className="p-3 border border-white-400 border-collapse break-all">Gender</th>
    //                 <th className="p-3 border border-white-400 border-collapse break-all">Mobile No.</th>
    //                 </tr>
    //             </thead>
    //             <tbody className="">
    //                 {userDetails.map((item,index)=>{
    //                     return(
    //                         <tr className="border border-gray-400 border-collapse break-all odd:bg-white hover:bg-primary hover:text-white">
    //                             <td className="p-2 border border-gray-400 border-collapse break-all">{index+1}</td>
    //                             <td className="p-2 border border-gray-400 border-collapse break-all">{item.email}</td>
    //                             <td className="p-2 border border-gray-400 border-collapse break-all">{item.fullname}</td>
    //                             <td className="p-2 border border-gray-400 border-collapse break-all">{item.dob}</td>
    //                             <td className="p-2 border border-gray-400 border-collapse break-all">{item.gender}</td>
    //                             <td className="p-2 border border-gray-400 border-collapse break-all">{item.mob}</td>
    //                         </tr>
    //                     )
    //                 })}
    //             </tbody>
    //         </table>
    //     </div>
    //     </PDFExport>
    //     )
    // }

    const navigate=useNavigate();
    const generateUserPdf = (details)=>{
        navigate(
            "/admin/userpdf",  
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

    // const logout = () => {
    //     auth.signOut().then(() => {
    //         setUser(null);
    //     });
    // };


    return (
        <div className="h-full w-full flex flex-col items-center justify-center mt-9 mb-12">
            {/* <header className="bg-white shadow-md py-4 w-full">
                <div className="w-11/12 md:w-9/12 m-auto flex justify-between items-center">
                    <div className="w-64">
                        <TitleSVG />
                    </div>
                    <button
                        className="btn"
                        onClick={() => {
                            logout();
                        }}
                    >
                        Logout
                    </button>
                </div>
            </header> */}

            <div className="flex flex-row w-11/12 justify-end">
                <button className="bg-white text-primary p-4 rounded-3xl my-3 filter drop-shadow-xl hover:bg-primary hover:text-white font-semibold"
                    onClick={()=>{
                        // savePDF(document.getElementsByClassName("pdf"), {
                            //     paperSize: "A4",
                            // });
                        setDownload(true)
                        if (pdfExportComponent.current && download) {
                            pdfExportComponent.current.save();
                            setDownload(false);
                        }
                    }}>{download?"Generate PDF":"PDF Preview"}</button>
            </div>

            <div className={download?"w-full":"w-11/12"}>
                <PDFExport paperSize="A4" scale={0.6} margin="1.3cm" ref={pdfExportComponent}>
                {   download&&
                    (
                        <header className="bg-white shadow-md py-4">
                        <div className="w-full ml-10 m-auto flex justify-between items-center">
                            <div className="w-64">
                                <TitleSVG />
                            </div>
                        </div>
                        <h1 className="text-4xl text-tertiary font-light mt-8 text-center">Application for the post of Director, CETSOM</h1>
                        <h2 className="text-3xl text-center font-bold my-3 text-opacity-30">Applicants list</h2>
                        </header>
                    )
                }
                <table className="table-auto w-full rounded-xl">
                    <thead className="bg-primary text-white">
                        <tr className="border border-white-400 border-collapse break-all">
                        <th className="p-3 border border-white-400 border-collapse break-all">Sl.No</th>
                        <th className="p-3 border border-white-400 border-collapse break-all">Full Name</th>
                        <th className="p-3 border border-white-400 border-collapse break-all">E-mail</th>
                        <th className="p-3 border border-white-400 border-collapse break-all">DOB</th>
                        <th className="p-3 border border-white-400 border-collapse break-all">Gender</th>
                        <th className="p-3 border border-white-400 border-collapse break-all">Mobile No.</th>
                        {!download&&<th className="p-3 last:bg-gray-100"></th>}
                        </tr>
                    </thead>
                    <tbody className="">
                        {userDetails.map((item,index)=>{
                            return(
                                <tr key={index} className="odd:bg-white hover:bg-gray-300">
                                    <td className="p-2 border border-gray-400 border-collapse break-all">{index+1}</td>
                                    <td className="p-2 border border-gray-400 border-collapse break-all">{item.fullname}</td>
                                    <td className="p-2 border border-gray-400 border-collapse break-all">{item.email}</td>
                                    <td className="p-2 border border-gray-400 border-collapse break-all">{item.dob}</td>
                                    <td className="p-2 border border-gray-400 border-collapse break-all">{item.gender}</td>
                                    <td className="p-2 border border-gray-400 border-collapse break-all">{item.mob}</td>
                                    {!download&&<td className="p-2 last:bg-gray-100"> 
                                        <button 
                                            onClick={()=>{generateUserPdf(item)}}
                                            className="bg-primary rounded-3xl w-full text-white p-2 font-semibold" 
                                        >
                                            View
                                        </button> 
                                    </td>}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                </PDFExport>
            </div>
        </div>
    )
}

export default AdminHome
