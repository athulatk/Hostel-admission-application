import React, { useEffect, useState } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import TitleSVG from "./TitleSVG";
import {useLocation} from 'react-router-dom'

function GeneratePDFAdmin() {
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
                <PDFExport paperSize="A4" scale={0.6} margin="1.3cm" ref={pdfExportComponent} fileName="CET_MBA_DIRECTOR_APPLICATION">
                    <header className="bg-white shadow-md py-4">
                        <div className="w-full ml-10 m-auto flex justify-between items-center">
                            <div className="w-64">
                                <TitleSVG />
                            </div>
                        </div>
                        <h1 className="text-4xl text-tertiary font-light mt-8 text-center">Application for the post of Director, CETSOM</h1>
                    </header>

                    <dl className="review-section">
                        <h3 className="text-3xl text-secondary">Personal Details</h3>
                        <hr className="mt-3 mb-4" />
                        <h4>Account Details</h4>
                        <p>
                            <dt>Account Email</dt>
                            <dd>{details.email}</dd>
                        </p>
                        <h4>Personal Details</h4>
                        <p>
                            <dt>Full Name</dt> <dd>{details.fullname}</dd>
                        </p>
                        <p>
                            <dt>Date of Birth</dt> <dd>{details.dob}</dd>
                        </p>
                        <p>
                            <dt>Place of Birth</dt> <dd>{details.pob}</dd>
                        </p>
                        <p>
                            <dt>Gender</dt> <dd>{details.gender}</dd>
                        </p>
                        <p>
                            <dt>Nationality</dt> <dd>{details.nation}</dd>
                        </p>
                        <p>
                            <dt>Father's Name</dt> <dd>{details.father}</dd>
                        </p>
                        <p>
                            <dt>Marital Status</dt> <dd>{details.marital}</dd>
                        </p>
                        <h4>Current Contact Information</h4>
                        <p>
                            <dt>Mobile Number</dt> <dd>{details.mob}</dd>
                        </p>
                        <p>
                            <dt>Phone Number</dt> <dd>{details.phone}</dd>
                        </p>
                        <p>
                            <dt>Primary Email Address</dt> <dd>{details.pemail}</dd>
                        </p>
                        <p>
                            <dt>Secondary Email Address</dt> <dd>{details.semail}</dd>
                        </p>
                        <p>
                            <dt>Current Address</dt> <dd>{details.address}</dd>
                        </p>
                        <h4>Teaching/Research Interests</h4>
                        {details.resspec&&(<p>
                            <dt>Your Research Specialization</dt>
                            <dd>{details.resspec}</dd>
                        </p>)}
                        {details.tr&&(<p>
                            <dt>Statement of your "Teaching/Research Administration agenda" for the next 3 years</dt>
                            <dd>{details.tr}</dd>
                        </p>)}
                        {details.cc&&(<p>
                            <dt>Name core of courses you like to teach at MBA level</dt>
                            <dd>{details.cc}</dd>
                        </p>)}
                        {details.ec&&(<p>
                            <dt>Name any elective course you like to offer</dt>
                            <dd>{details.ec}</dd>
                        </p>)}
                    </dl>

                    <dl className="review-section">
                        <h3 className="text-3xl text-secondary">Education</h3>
                        <hr className="mt-3 mb-4" />
                        <h4>PhD degree</h4>
                        <p>
                            <dt>Degree Name</dt> <dd>{details.phd.degree}</dd>
                        </p>
                        <p>
                            <dt>Title of Thesis</dt> <dd>{details.phd.title}</dd>
                        </p>
                        <p>
                            <dt>Affliiation of Supervisor</dt> <dd>{details.phd.affiliation}</dd>
                        </p>
                        <p>
                            <dt>Name of Supervisor</dt> <dd>{details.phd.supervisor}</dd>
                        </p>
                        <p>
                            <dt>University</dt> <dd>{details.phd.university}</dd>
                        </p>
                        <p>
                            <dt>Discipline</dt> <dd>{details.phd.discipline}</dd>
                        </p>
                        <p>
                            <dt>College</dt> <dd>{details.phd.college}</dd>
                        </p>
                        <p>
                            <dt>Start Date</dt> <dd>{details.phd.startdate}</dd>
                        </p>
                        <p>
                            <dt>Date of Ph.D Thesis (Submitted for Evaluation)</dt> <dd>{details.phd.submitdate}</dd>
                        </p>
                        <p>
                            <dt>Date of Ph.D Thesis (Defended Successfully)</dt> <dd>{details.phd.defenddate}</dd>
                        </p>

                        <h4>ME/MTech/MPhil/MBA/PGDM degree</h4>
                        <p>
                            <dt>Degree Name</dt>
                            <dd>{details.masters.name}</dd>
                        </p>
                        <p>
                            <dt>Discipline</dt> <dd>{details.masters.discipline}</dd>
                        </p>
                        <p>
                            <dt>University</dt> <dd>{details.masters.university}</dd>
                        </p>
                        <p>
                            <dt>Start Date</dt> <dd>{details.masters.startdate}</dd>
                        </p>
                        <p>
                            <dt>End Date</dt> <dd>{details.masters.enddate}</dd>
                        </p>
                        <p>
                            <dt>Division/Awarded</dt> <dd>{details.masters.division}</dd>
                        </p>
                        <p>
                            <dt>System of Awarding Marks</dt> <dd>{details.masters.system}</dd>
                        </p>
                        <p>
                            <dt>% Marks/Grade</dt> <dd>{details.masters.marks}</dd>
                        </p>
                        <p>
                            <dt>College</dt> <dd>{details.masters.college}</dd>
                        </p>
                        <p>
                            <dt>Others</dt> <dd>{details.masters.others}</dd>
                        </p>

                        {details.bachelors1.name && (
                            <div>
                                <h4>BE/BTech/MA/MSc/MCom/MCA degree</h4>
                                <p>
                                    <dt>Degree Name</dt> <dd>{details.bachelors1.name}</dd>
                                </p>
                                <p>
                                    <dt>Discipline</dt> <dd>{details.bachelors1.discipline}</dd>
                                </p>
                                <p>
                                    <dt>University</dt> <dd>{details.bachelors1.university}</dd>
                                </p>
                                <p>
                                    <dt>Start Date</dt> <dd>{details.bachelors1.startdate}</dd>
                                </p>
                                <p>
                                    <dt>End Date</dt> <dd>{details.bachelors1.enddate}</dd>
                                </p>
                                <p>
                                    <dt>Division/Awarded</dt> <dd>{details.bachelors1.division}</dd>
                                </p>
                                <p>
                                    <dt>System of Awarding Marks</dt> <dd>{details.bachelors1.system}</dd>
                                </p>
                                <p>
                                    <dt>% Marks/Grade</dt> <dd>{details.bachelors1.marks}</dd>
                                </p>
                                <p>
                                    <dt>College</dt> <dd>{details.bachelors1.college}</dd>
                                </p>
                                <p>
                                    <dt>Others</dt> <dd>{details.bachelors1.others}</dd>
                                </p>
                            </div>
                        )}

                        {details.bachelors2.name && (
                            <div>
                                <h4>BSc/BA/BCom/BCA/BBA degree</h4>
                                <p>
                                    <dt>Degree Name</dt> <dd>{details.bachelors2.name}</dd>
                                </p>
                                <p>
                                    <dt>Discipline</dt> <dd>{details.bachelors2.discipline}</dd>
                                </p>
                                <p>
                                    <dt>University</dt> <dd>{details.bachelors2.university}</dd>
                                </p>
                                <p>
                                    <dt>Start Date</dt> <dd>{details.bachelors2.startdate}</dd>
                                </p>
                                <p>
                                    <dt>End Date</dt> <dd>{details.bachelors2.enddate}</dd>
                                </p>
                                <p>
                                    <dt>Division/Awarded</dt> <dd>{details.bachelors2.division}</dd>
                                </p>
                                <p>
                                    <dt>System of Awarding Marks</dt> <dd>{details.bachelors2.system}</dd>
                                </p>
                                <p>
                                    <dt>% Marks/Grade</dt> <dd>{details.bachelors2.marks}</dd>
                                </p>
                                <p>
                                    <dt>College</dt> <dd>{details.bachelors2.college}</dd>
                                </p>
                                <p>
                                    <dt>Others</dt> <dd>{details.bachelors2.others}</dd>
                                </p>
                            </div>
                        )}

                        {details.other.name && (
                            <div>
                                <h4>Any other degree (if relevant, & not covered above)</h4>
                                <p>
                                    <dt>Degree Name</dt> <dd>{details.other.name}</dd>
                                </p>
                                <p>
                                    <dt>Discipline</dt> <dd>{details.other.discipline}</dd>
                                </p>
                                <p>
                                    <dt>University</dt> <dd>{details.other.university}</dd>
                                </p>
                                <p>
                                    <dt>Start Date</dt> <dd>{details.other.startdate}</dd>
                                </p>
                                <p>
                                    <dt>End Date</dt> <dd>{details.other.enddate}</dd>
                                </p>
                                <p>
                                    <dt>Division/Awarded</dt> <dd>{details.other.division}</dd>
                                </p>
                                <p>
                                    <dt>System of Awarding Marks</dt> <dd>{details.other.system}</dd>
                                </p>
                                <p>
                                    <dt>% Marks/Grade</dt> <dd>{details.other.marks}</dd>
                                </p>
                                <p>
                                    <dt>College</dt> <dd>{details.other.college}</dd>
                                </p>
                                <p>
                                    <dt>Others</dt> <dd>{details.other.others}</dd>
                                </p>
                            </div>
                        )}
                    </dl>

                    <dl className="review-section">
                        <h3 className="text-3xl text-secondary">Employment</h3>
                        {details.postphd.length !== 0 && (<h4>
                            Post-PhD employment details (from date thesis is approved till today in chronological order)
                        </h4>)}
        
                        {details.postphd.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 my-6 rounded-md">
                                <div className="px-2.5 w-full bg-gray-100 flex">
                                <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Sl.No
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Employer
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Department/Division
                                    </div>

                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Position held
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Nature of Work
                                    </div>
                                    <div className="w-1/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Start Date
                                    </div>
                                    <div className="w-1/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        End Date
                                    </div>
                                </div>
                                <div className="px-2.5 w-full bg-gray-50 divide-y divide-gray-200">
                                    {details.postphd.map((item) => (
                                        <div key={item.id} className="flex">
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.id}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.employer}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.department}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.position}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.nature}
                                            </div>
                                            <div className="w-1/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.startdate}
                                            </div>
                                            <div className="w-1/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.enddate}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}

                        {details.prephd.length !== 0 && (<h4>Pre-PhD employment details (Post-BTech/BE/MTech/ME/M.Com/MBA/Msc./MCA till date of joining PhD Programme)</h4>)}
                        {details.prephd.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 my-6 rounded-md">
                                <div className="px-2.5 w-full bg-gray-100 flex">
                                <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Sl.No
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Employer
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Department/Division
                                    </div>

                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Position held
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Nature of Work
                                    </div>
                                    <div className="w-1/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Start Date
                                    </div>
                                    <div className="w-1/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        End Date
                                    </div>
                                </div>
                                <div className="px-2.5 w-full bg-gray-50 divide-y divide-gray-200">
                                    {details.prephd.map((item) => (
                                        <div key={item.id} className="flex">
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.id}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.employer}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.department}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.position}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.nature}
                                            </div>
                                            <div className="w-1/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.startdate}
                                            </div>
                                            <div className="w-1/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.enddate}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                        
                    </dl>

                    <dl className="review-section">
                        <h3 className="text-3xl text-secondary">Awards, Thesis & R&D</h3>
                        <hr className="mt-3 mb-4" />
                        {details.awards.length !== 0 && (<h4>Honours, Awards etc.</h4>)}
                        {details.awards.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 my-6 rounded-md">
                                <div className="px-2.5 w-full bg-gray-100 flex">
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Sl.No
                                    </div>
                                    <div className="w-5/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Award Title
                                    </div>
                                    <div className="w-5/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Organization
                                    </div>

                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Year
                                    </div>
                                </div>
                                <div className="px-2.5 w-full bg-gray-50 divide-y divide-gray-200">
                                    {details.awards.map((item) => (
                                        <div key={item.id} className="flex">
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.id}
                                            </div>
                                            <div className="w-5/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.title}
                                            </div>
                                            <div className="w-5/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.org}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.year}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}

                        <h4>Details of PhD/MTech/MPhil thesis supervised</h4>
                        <h5>Details of PhD thesis supervised (completed only)</h5>
                        <p>
                            <dt>No. of PhD thesis supervised singly (defended successfully)</dt>
                            <dd>{details.singlySupervisedThesis}</dd>
                        </p>
                        <p>
                            <dt>No. of PhD thesis supervised jointly (defended successfully)</dt>
                            <dd>{details.jointlySupervisedThesis}</dd>
                        </p>
                        {details.thesis.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 my-6 rounded-md">
                                <div className="px-2.5 w-full bg-gray-100 flex">
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Sl.No
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Student Name
                                    </div>
                                    <div className="w-4/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Thesis Title
                                    </div>

                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Supervisor
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Year Successfully Defended
                                    </div>
                                </div>
                                <div className="px-2.5 w-full bg-gray-50 divide-y divide-gray-200">
                                    {details.thesis.map((item) => (
                                        <div key={item.id} className="flex">
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.id}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.studentname}
                                            </div>
                                            <div className="w-4/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.title}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.supervisor}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.year}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}

                        <h5>M.Tech, MPhil, MTech, MBA thesis supervised (completed only)</h5>
                        <p>
                            <dt>No. of MTech/M.Phil/ MBA thesis supervised (completed and defended successfully)</dt>
                            <dd>{details.thesisSupervised}</dd>
                        </p>

                        <h4>
                            Details of Industry or Government Sponsored R&D/Consulting projects (Please provide these
                            details if it is relevant to you)
                        </h4>
                        <h5>Details of sponsored R&D projects (completed, and as Principal Investigator)</h5>
                        <p>
                            <dt>
                                No. of sponsored R&D projects (completed), with you as "Principal Investigator"(where
                                each project is over <i>₹2 lakhs</i>)
                            </dt>
                            <dd>{details.sponsoredRD1}</dd>
                        </p>
                        {details.projects1.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 my-6 rounded-md">
                                <div className="px-2.5 w-full bg-gray-100 flex">
                                <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Sl.No
                                    </div>
                                    <div className="w-4/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Title
                                    </div>
                                    <div className="w-4/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Sponsor
                                    </div>

                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Duration
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Grant Amount
                                    </div>
                                </div>
                                <div className="px-2.5 w-full bg-gray-50 divide-y divide-gray-200">
                                    {details.projects1.map((item) => (
                                        <div key={item.id} className="flex">
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.id}
                                            </div>
                                            <div className="w-4/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.title}
                                            </div>
                                            <div className="w-4/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.sponsor}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.years}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.amount}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}

                        <h5>Details of sponsored R&D projects (in-progress and as Principal Investigator)</h5>
                        <p>
                            <dt>
                                No. of sponsored R&D projects(in-progress), with you as "Principal Investigator"(where
                                each project is over <i>₹2 lakhs</i>)
                            </dt>
                            <dd>{details.sponsoredRD2}</dd>
                        </p>
                        {details.projects2.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 my-6 rounded-md">
                                <div className="px-2.5 w-full bg-gray-100 flex">
                                <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Sl.No
                                    </div>
                                    <div className="w-4/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Title
                                    </div>
                                    <div className="w-4/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Sponsor
                                    </div>

                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Duration
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Grant Amount
                                    </div>
                                </div>
                                <div className="px-2.5 w-full bg-gray-50 divide-y divide-gray-200">
                                    {details.projects2.map((item) => (
                                        <div key={item.id} className="flex">
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.id}
                                            </div>
                                            <div className="w-4/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.title}
                                            </div>
                                            <div className="w-4/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.sponsor}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.years}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.amount}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}

                        <h5>Details of sponsored R&D projects (Completed and as Co-Principal Investigator)</h5>
                        <p>
                            <dt>
                                No. of sponsored R&D projects (completed), with you as "Co-Principal Investigator"(where
                                each project isover <i>₹2 lakhs</i>)
                            </dt>
                            <dd>{details.sponsoredRD3}</dd>
                        </p>
                        {details.projects3.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 my-6 rounded-md">
                                <div className="px-2.5 w-full bg-gray-100 flex">
                                <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Sl.No
                                    </div>
                                    <div className="w-4/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Title
                                    </div>
                                    <div className="w-4/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Sponsor
                                    </div>

                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Duration
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Grant Amount
                                    </div>
                                </div>
                                <div className="px-2.5 w-full bg-gray-50 divide-y divide-gray-200">
                                    {details.projects3.map((item) => (
                                        <div key={item.id} className="flex">
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.id}
                                            </div>
                                            <div className="w-4/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.title}
                                            </div>
                                            <div className="w-4/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.sponsor}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.years}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.amount}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}

                        <h5>Details of sponsored R&D projects (in-progress and as Co-Principal Investigator)</h5>
                        <p>
                            <dt>
                                No. of sponsored R&D projects (in-progress), with you as"Co-Principal Investigator"
                                (where each project is over <i>₹2 lakhs</i>)
                            </dt>
                            <dd>{details.sponsoredRD4}</dd>
                        </p>
                        {details.projects4.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 my-6 rounded-md">
                                <div className="px-2.5 w-full bg-gray-100 flex">
                                <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Sl.No
                                    </div>
                                    <div className="w-4/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Title
                                    </div>
                                    <div className="w-4/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Sponsor
                                    </div>

                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Duration
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Grant Amount
                                    </div>
                                </div>
                                <div className="px-2.5 w-full bg-gray-50 divide-y divide-gray-200">
                                    {details.projects4.map((item) => (
                                        <div key={item.id} className="flex">
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.id}
                                            </div>
                                            <div className="w-4/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.title}
                                            </div>
                                            <div className="w-4/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.sponsor}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.years}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.amount}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}

                        <h5>Details of industry or government-sponsored consulting assignments completed</h5>
                        <p>
                            <dt>
                                No. of sponsored consulting projects completed, with you as "Chief Investigator" (where
                                each project is over <i>₹50,000</i>)
                            </dt>
                            <dd>{details.sponsoredRD5}</dd>
                        </p>
                        {details.projects5.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 my-6 rounded-md">
                                <div className="px-2.5 w-full bg-gray-100 flex">
                                <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Sl.No
                                    </div>
                                    <div className="w-4/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Title
                                    </div>
                                    <div className="w-4/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Sponsor
                                    </div>

                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Duration
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Grant Amount
                                    </div>
                                </div>
                                <div className="px-2.5 w-full bg-gray-50 divide-y divide-gray-200">
                                    {details.projects5.map((item) => (
                                        <div key={item.id} className="flex">
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.id}
                                            </div>
                                            <div className="w-4/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.title}
                                            </div>
                                            <div className="w-4/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.sponsor}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.years}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.amount}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </dl>

                    <dl className="review-section">
                        <h3 className="text-3xl text-secondary">Books and Publications</h3>
                        <hr className="mt-3 mb-4" />
                        {/* <h4>Publications</h4> */}
                        <h4>Books</h4>
                        <p>
                            <dt>No. of books published as author or co-author</dt>
                            <dd>{details.noBooks}</dd>
                        </p>
                        {details.books.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 my-6 rounded-md">
                                <div className="px-2.5 w-full bg-gray-100 flex">
                                <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Sl.No
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Title
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Co-authors
                                    </div>

                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Publisher
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Date
                                    </div>
                                    <div className="w-1/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Edition
                                    </div>
                                </div>
                                <div className="px-2.5 w-full bg-gray-50 divide-y divide-gray-200">
                                    {details.books.map((item) => (
                                        <div key={item.id} className="flex">
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.id}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.title}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.coauthors}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.publisher}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.date}
                                            </div>
                                            <div className="w-1/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.edition}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}

                        <h4>Publications (chapters in books)</h4>
                        <p>
                            <dt>No. of papers published as a chapter in a book</dt>
                            <dd>{details.noPublished1}</dd>
                        </p>
                        {details.publications1.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 my-6 rounded-md">
                                <div className="px-2.5 w-full bg-gray-100 flex">
                                <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Sl.No
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Title
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Co-authors
                                    </div>

                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Publisher
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Date
                                    </div>
                                    <div className="w-1/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Edition
                                    </div>
                                </div>
                                <div className="px-2.5 w-full bg-gray-50 divide-y divide-gray-200">
                                    {details.publications1.map((item) => (
                                        <div key={item.id} className="flex">
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.id}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.title}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.coauthors}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.publisher}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.date}
                                            </div>
                                            <div className="w-1/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.edition}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}

                        <h4>Publications (in international journals)</h4>
                        <p>
                            <dt>No. of papers published or accepted for publication in international journals</dt>
                            <dd>{details.noPublished2}</dd>
                        </p>
                        {details.publications2.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 my-6 rounded-md">
                                <div className="px-2.5 w-full bg-gray-100 flex">
                                <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Sl.No
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Title
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Co-authors
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Journal Name
                                    </div>

                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Publisher
                                    </div>
                                    <div className="w-1/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Volume
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Date
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Indexed In
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Impact Factor
                                    </div>
                                    <div className="w-1/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Pages
                                    </div>
                                </div>
                                <div className="px-2.5 w-full bg-gray-50 divide-y divide-gray-200">
                                    {details.publications2.map((item) => (
                                        <div key={item.id} className="flex">
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.id}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.title}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.coauthors}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.journalname}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.publisher}
                                            </div>
                                            <div className="w-1/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.volumeno}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.date}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.indexedin}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.impactFactor}
                                            </div>
                                            <div className="w-1/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.pages}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}

                        <h4>Publications (in Indian journals)</h4>
                        <p>
                            <dt>No. of papers published or accepted for publication in Indian journals</dt>
                            <dd>{details.noPublished3}</dd>
                        </p>
                        {details.publications3.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 my-6 rounded-md">
                                <div className="px-2.5 w-full bg-gray-100 flex">
                                <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Sl.No
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Title
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Co-authors
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Journal Name
                                    </div>

                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Publisher
                                    </div>
                                    <div className="w-1/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Volume
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Date
                                    </div>
                                    <div className="w-1/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Pages
                                    </div>
                                </div>
                                <div className="px-2.5 w-full bg-gray-50 divide-y divide-gray-200">
                                    {details.publications3.map((item) => (
                                        <div key={item.id} className="flex">
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.id}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.title}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.coauthors}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.journalname}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.publisher}
                                            </div>
                                            <div className="w-1/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.volumeno}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.date}
                                            </div>
                                            <div className="w-1/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.pages}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}

                        <h4>Publications (in peer-reviewed conferences held abroad)</h4>
                        <p>
                            <dt>
                                No. of papers published or accepted for publication in refereed conferences held abroad
                            </dt>
                            <dd>{details.noPublished4}</dd>
                        </p>
                        {details.publications4.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 my-6 rounded-md">
                                <div className="px-2.5 w-full bg-gray-100 flex">
                                <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Sl.No
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Title
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Co-authors
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Conference Name
                                    </div>

                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Location
                                    </div>

                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Year & Month
                                    </div>
                                    <div className="w-1/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Pages
                                    </div>
                                </div>
                                <div className="px-2.5 w-full bg-gray-50 divide-y divide-gray-200">
                                    {details.publications4.map((item) => (
                                        <div key={item.id} className="flex">
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.id}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.title}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.coauthors}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.conferencename}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.location}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.month}
                                            </div>
                                            <div className="w-1/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.pages}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}

                        <h4>Publications/Presentation (in peer-reviewed conferences held in India)</h4>
                        <p>
                            <dt>
                                No. of papers published or accepted for publication or presented in refereed conferences
                            </dt>
                            <dd>{details.noPublished5}</dd>
                        </p>
                        {details.publications5.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 my-6 rounded-md">
                                <div className="px-2.5 w-full bg-gray-100 flex">
                                <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Sl.No
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Title
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Co-authors
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Conference Name
                                    </div>

                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Location
                                    </div>

                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Year & Month
                                    </div>
                                    <div className="w-1/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Pages
                                    </div>
                                </div>
                                <div className="px-2.5 w-full bg-gray-50 divide-y divide-gray-200">
                                    {details.publications5.map((item) => (
                                        <div key={item.id} className="flex">
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.id}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.title}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.coauthors}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.conferencename}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.location}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.month}
                                            </div>
                                            <div className="w-1/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.pages}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </dl>

                    <dl className="review-section">
                        <h3 className="text-3xl text-secondary">Patents</h3>
                        <hr className="mt-3 mb-4" />
                        <h4>Patents Awarded</h4>
                        <p>
                            <dt>No. of international/Indian patents issued</dt>
                            <dd>{details.noPatents}</dd>
                        </p>
                        {details.patents.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 my-6 rounded-md">
                                <div className="px-2.5 w-full bg-gray-100 flex">
                                <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Sl.No
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Title
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Co-Inventors
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Patent No.
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Patent Authority
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Organization
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Date
                                    </div>
                                </div>
                                <div className="px-2.5 w-full bg-gray-50 divide-y divide-gray-200">
                                    {details.patents.map((item) => (
                                        <div key={item.id} className="flex">
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.id}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.title}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.coInventors}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.patentNumber}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.patentAuthority}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.organizationAssignedTo}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.datePublished}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}

                        <h4>Patents Filed</h4>
                        <p>
                            <dt>No. of international/Indian patents filed</dt>
                            <dd>{details.noFiledPatents}</dd>
                        </p>
                        {details.filedPatents.length !== 0 ? (
                            <div className="overflow-auto divide-y divide-gray-200 my-6 rounded-md">
                                <div className="px-2.5 w-full bg-gray-100 flex">
                                <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Sl.No
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Title
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Co-Inventors
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Patent No.
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Patent Authority
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Organization
                                    </div>
                                    <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Date
                                    </div>
                                </div>
                                <div className="px-2.5 w-full bg-gray-50 divide-y divide-gray-200">
                                    {details.filedPatents.map((item) => (
                                        <div key={item.id} className="flex">
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.id}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.title}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.coInventors}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.patentNumber}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.patentAuthority}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.organizationAssignedTo}
                                            </div>
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.datePublished}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </dl>

                    {details.referee.length !== 0 ? (
                        <dl className="review-section">
                            <h3 className="text-3xl text-secondary">Referees</h3>
                            <hr className="mt-3 mb-4" />
                            <div className="overflow-auto divide-y divide-gray-200 my-6 rounded-md">
                                <div className="px-2.5 w-full bg-gray-100 flex">
                                <div className="w-2/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Sl.No
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Name
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Designation
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Organization
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Email Address
                                    </div>
                                    <div className="w-4/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Postal Address
                                    </div>
                                    <div className="w-3/12 px-1.5 py-3 text-left text-xs font-medium text-gray-600">
                                        Phone No.
                                    </div>
                                </div>
                                <div className="px-2.5 w-full bg-gray-50 divide-y divide-gray-200">
                                    {details.referee.map((item) => (
                                        <div key={item.id} className="flex">
                                            <div className="w-2/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.id}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.name}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.designation}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.organization}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.email}
                                            </div>
                                            <div className="w-4/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.postaladdress}
                                            </div>
                                            <div className="w-3/12 px-1.5 py-4 overflow-hidden overflow-ellipsis break-all text-sm text-gray-800">
                                                {item.phoneno}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </dl>
                    ) : (
                        <></>
                    )}
                </PDFExport>

                <div className="form-field mt-4 ml-10 sm:mr-2.5 rounded-;g">
                    <input
                        type="checkbox"
                        id="check"
                        name="check"
                        // className={checkError?"ring-red-600 ring-2 rounded":""}
                        defaultChecked={true}
                        checked={true}
                    />
                    <label htmlFor="check" className="ml-3 font-medium text-gray-600">
                    I confirm that the information provided by me in this application form is complete and accurate.
                    </label>
                </div>
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

export default GeneratePDFAdmin;
