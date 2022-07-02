import React, { useEffect, useState } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import { db } from "./firebase_config";
import { onValue, ref, set } from "firebase/database";

function GeneratePDF({ setformno, scrollTop, user, details, setDetails }) {
    const pdfExportComponent = React.useRef(null);

    const [applicationNo, setApplicationNo] = useState(-1)
    const [signed, setSigned] = useState(false)

    const pushToDatabase = () => {
        // console.log(user);
        set(ref(db, "users/" + user.uid), {
            ...details,
            userSignInEmail: user.email,
            formSubmitted: true,
            applicationNo:applicationNo
        });

        set(ref(db, "application/applicationNo"), {
            applicationNo:applicationNo+1
        });
    };

    useEffect(() => {
        if(details.declaration0===true&&details.declaration1===true)
        {
            if(details.goi==="Yes"||details.bpl==="Yes"||details.differentlyabled==="Yes"||details.category==="st"||details.category==="sc")
            {
                if(details.declaration2===true)
                {
                    setSigned(true)
                }
                else
                {
                    setSigned(false)
                }
            }
            else
            {
                if(details.declaration3===true&&details.declaration4===true)
                {
                    setSigned(true)
                }
                else{
                    setSigned(false)
                }
            }
        }
    }, [details])
    

    useEffect(() => {
        var dbRef = ref(db, "application/applicationNo");

        onValue(dbRef, (snapshot) => {
            console.log("called")
            if (snapshot.exists()) {
                console.log("open = ",snapshot.val())
                setApplicationNo(snapshot.val().applicationNo)
            }
        });

    }, [])


    return (
        <>
            {/* <h1 className="text-4xl text-tertiary font-light mt-8 text-center">Application for Hostel Admission</h1> */}
            <h2 className="text-center mt-1 font-bold text-gray-500">Review your application</h2>
            <div className="w-11/12 md:w-9/12 mx-auto my-8 bg-white shadow-md rounded-xl pb-2">
               {applicationNo!==-1&&( <PDFExport paperSize="A4" scale={0.6} margin="1.3cm" ref={pdfExportComponent}>
                    <dl className="review-section">
                        <h2>Application CET/Hostel/{applicationNo}</h2>
                        <h3 className="text-3xl text-secondary">Personal Details</h3>
                        <hr className="mt-3 mb-4" />
                        <h4>Personal Details</h4>
                        <p>
                            <dt>Full Name</dt> <dd>{details.fullname}</dd>
                        </p>
                        <p>
                            <dt>Date of Birth</dt> <dd>{details.dob}</dd>
                        </p>
                        <p>
                            <dt>Gender</dt> <dd>{details.gender}</dd>
                        </p>
                        <p>
                            <dt>Admission No.</dt> <dd>{details.admno}</dd>
                        </p>
                        <p>
                            <dt>Course</dt> <dd>{details.course}{details.course==="MTech"&&("/"+details.courseother)}</dd>
                        </p>
                        <p>
                            <dt>Programme</dt> <dd>{details.programme}</dd>
                        </p>
                        <p>
                            <dt>Department</dt> <dd>{details.dept}</dd>
                        </p>
                        <p>
                            <dt>Semester</dt> <dd>{details.sem}</dd>
                        </p>
                        <h4>Current Contact Information</h4>
                        <p>
                            <dt>Mobile Number</dt> <dd>{details.mob}</dd>
                        </p>
                        <p>
                            <dt>Primary Email Address</dt> <dd>{details.pemail}</dd>
                        </p>
                        <p>
                            <dt>Residential Address</dt> <dd>{details.address}</dd>
                        </p>
                        <p>
                            <dt>Category</dt> <dd>{details.category}</dd>
                        </p>
                        <p>
                            <dt>BPL</dt> <dd>{details.bpl}</dd>
                        </p>
                        <p>
                            <dt>Differently abled</dt> <dd>{details.differentlyabled}</dd>
                        </p>
                        <p>
                            <dt>Government of India Nominee</dt> <dd>{details.goi}</dd>
                        </p>
                        {(details.goi==="Yes"||details.bpl==="Yes"||details.differentlyabled==="Yes")?"":(
                            <>
                                {(details.sem!=="S1"&&details.sem!=="S2")?(<p>
                                    <dt>CGPA</dt> <dd>{details.cgpa}</dd>
                                </p>):
                                (<p>
                                    <dt>Entrance Exam Rank</dt> <dd>{details.examrank}</dd>
                                </p>)}
                                <p>
                                    <dt>Annual Family Income</dt> <dd>{details.aincome}</dd>
                                </p>
                            </>
                        )}
                        <p>
                            <dt>Parent/Guardian Name</dt> <dd>{details.parentname}</dd>
                        </p>
                        <p>
                            <dt>Parent/Guardian Mob.No</dt> <dd>{details.parentmob}</dd>
                        </p>
                        <p>
                            <dt>Parent/Guardian Address</dt> <dd>{details.parentaddr}</dd>
                        </p>

                        <div className="flex flex-row space-x-2 items-center">
                            <input type="checkbox" name="declaration0" checked={details.declaration0} id="declaration0" value={details.declaration0} onChange={()=>{setDetails(d=>({...d,declaration0:!d.declaration0}))}}/>
                            <p>I know that I have to download and keep a copy of this pdf to claim that I have applied for hostel admission</p>
                        </div>

                        <div className="flex flex-row space-x-2 items-center">
                            <input type="checkbox" name="declaration1" checked={details.declaration1} id="declaration1" value={details.declaration1} onChange={()=>{setDetails(d=>({...d,declaration1:!d.declaration1}))}}/>
                            <p>I hereby declare that all the informations given above are true to the best of my knowledge.</p>
                        </div>

                        {(details.goi==="Yes"||details.bpl==="Yes"||details.differentlyabled==="Yes"||details.category==="st"||details.category==="sc")?(<div className="flex flex-row space-x-2 items-center">
                            <input type="checkbox" name="declaration2" checked={details.declaration2} id="declaration2" value={details.declaration2} onChange={()=>{setDetails(d=>({...d,declaration2:!d.declaration2}))}}/>
                            <p>I know that admssion to the hostel if obtained will be cancelled if I fail to produce a certificate from concerned authorities to prove that I belong to the category {details.category==="sc"?"SC":(details.category==="st"?"ST":(details.goi==="Yes"?"GOI":(details.bpl==="Yes"?"BPL":(details.differentlyabled==="Yes"?"Differently Abled":""))))}</p>
                        </div>):(
                            <>
                                <div className="flex flex-row space-x-2 items-center">
                                    <input type="checkbox" name="declaration3" checked={details.declaration3} id="declaration3" value={details.declaration3} onChange={()=>{setDetails(d=>({...d,declaration3:!d.declaration3}))}}/>
                                    <p>I know that admssion to the hostel if obtained will be cancelled if I fail to produce a certificate from concerned authorities to prove that my CGPA is {details.cgpa}</p>
                                </div>

                                <div className="flex flex-row space-x-2 items-center">
                                    <input type="checkbox" name="declaration4" checked={details.declaration4} id="declaration4" value={details.declaration4} onChange={()=>{setDetails(d=>({...d,declaration4:!d.declaration4}))}}/>
                                    <p>I know that admssion to the hostel if obtained will be cancelled if I fail to produce a certificate from concerned authorities to prove that my annual family income is {details.aincome}</p>
                                </div>
                            </>
                        )}

                        {signed&&(<>
                            <p>S/d</p>
                            <p>{details.fullname}</p>
                        </>)}
                    </dl>
                      

                  
         
                    
                </PDFExport>)}
            </div>
            <div className="flex justify-center space-x-6 mb-10">
                <button
                    className="btn-outline"
                    onClick={() => {
                        setformno(1);
                        set(ref(db, "users/" + user.uid), {
                            ...details,
                            formno: 1,
                        });
                        scrollTop();
                    }}
                >
                    Edit
                </button>

                <button
                    className={"btn-secondary "+(signed===false?"opacity-50":"")}
                    onClick={() => {
                        if(details.declaration0===true&&details.declaration1===true)
                        {
                            if(details.goi==="Yes"||details.bpl==="Yes"||details.differentlyabled==="Yes"||details.category==="st"||details.category==="sc")
                            {
                                if(details.declaration2===true)
                                {
                                    pushToDatabase();
                                    if (pdfExportComponent.current) {
                                        pdfExportComponent.current.save();
                                    }
                                }
                            }
                            else
                            {
                                if(details.declaration3===true&&details.declaration4===true)
                                {
                                    pushToDatabase();
                                    if (pdfExportComponent.current) {
                                        pdfExportComponent.current.save();
                                    }
                                }
                            }
                        }
                    }}
                >
                    Submit
                </button>
            </div>
        </>
    );
}

export default GeneratePDF;
