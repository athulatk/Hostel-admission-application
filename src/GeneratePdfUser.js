import React, { useEffect, useState } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import {useLocation} from 'react-router-dom'


function GeneratePDFUser() {
    const pdfExportComponent = React.useRef(null);
    const [details, setDetails] = useState(null)
    
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    
    
    const location=useLocation();
    useEffect(() => {
        // console.log(location.state.details)
        setDetails(location.state.details)
        scrollTop()
    }, [location.state])


    return (
        <>
         {details!==null  &&
         (<>
            <div className="w-11/12 md:w-9/12 mx-auto my-8 bg-white shadow-md rounded-xl pb-2">
            <PDFExport paperSize="A4" scale={0.6} margin="1.3cm" ref={pdfExportComponent}>
                    <dl className="review-section">
                        <h2>Application CET/Hostel/{details.applicationNo}</h2>
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
                        {(details.goi==="Yes"||details.bpl==="Yes"||details.differentlyabled==="Yes"||details.category==="st"||details.category==="sc")?"":(
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
                            <input type="checkbox" name="declaration0" checked={details.declaration0} id="declaration0" value={details.declaration0} disabled/>
                            <p>I know that I have to download and keep a copy of the pdf generated automatically after submitting the form to claim that I have applied for hostel admission</p>
                        </div>

                        <div className="flex flex-row space-x-2 items-center">
                            <input type="checkbox" name="declaration1" checked={details.declaration1} id="declaration1" value={details.declaration1} disabled />
                            <p>I hereby declare that all the informations given above are true to the best of my knowledge.</p>
                        </div>

                        {(details.goi==="Yes"||details.bpl==="Yes"||details.differentlyabled==="Yes"||details.category==="st"||details.category==="sc")?(<div className="flex flex-row space-x-2 items-center">
                            <input type="checkbox" name="declaration2" checked={details.declaration2} id="declaration2" value={details.declaration2} disabled />
                            <p>I know that admssion to the hostel if obtained will be cancelled if I fail to produce a certificate from concerned authorities to prove that I belong to the category {details.category==="sc"?"SC":(details.category==="st"?"ST":(details.goi==="Yes"?"GOI":(details.bpl==="Yes"?"BPL":(details.differentlyabled==="Yes"?"Differently Abled":""))))}</p>
                        </div>):(
                            <>
                                <div className="flex flex-row space-x-2 items-center">
                                    <input type="checkbox" name="declaration3" checked={details.declaration3} id="declaration3" value={details.declaration3} disabled />
                                    <p>I know that admission to the hostel if obtained will be cancelled if I fail to produce a certificate from concerned authorities to prove that my {details.sem==="S1"||details.sem==="S2"?"entrance exam rank":"CGPA"} is {details.sem==="S1"||details.sem==="S2"?details.examrank:details.cgpa}</p>
                                </div>

                                <div className="flex flex-row space-x-2 items-center">
                                    <input type="checkbox" name="declaration4" checked={details.declaration4} id="declaration4" value={details.declaration4} disabled />
                                    <p>I know that admssion to the hostel if obtained will be cancelled if I fail to produce a certificate from concerned authorities to prove that my annual family income is {details.aincome}</p>
                                </div>
                            </>
                        )}

                        {details.formSubmitted&&(<>
                            <p>S/d</p>
                            <p>{details.fullname}</p>
                        </>)}
                    </dl>
                      
                </PDFExport>
            </div>

            <div className="flex justify-center space-x-6 mb-10">
                <button
                    className="btn-secondary"
                    onClick={() => {
                        if (pdfExportComponent.current) {
                            pdfExportComponent.current.save();
                        }
                    }}
                >
                    Generate PDF
                </button>
            </div>
            </>)
        }
        </>
    );
}

export default GeneratePDFUser;
