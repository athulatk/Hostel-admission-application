import React,{useState,useEffect} from "react";

function PersonalDetails({ nextform, details, setDetails, saveInfo }) {
    function updatePersonal(e) {
        var newPersonal = { ...details };
        newPersonal[e.target.name] = e.target.value;
        setDetails(newPersonal);
    }

    function saveInfoNext(e) {
        e.preventDefault();
        // var newDetails={...fullDetails,...personal}
        // setFullDetails(newDetails)
        nextform(e);
    }

    const [courses,setCourses]=useState([{value:"",display:"Select one"}])
    const [displayinput,setDisplayInput]=useState(false)


    useEffect(() => {
        if(details.programme==="ug"){
            setCourses(ugcourses)
        }
        if(details.programme==="pg"){
            setCourses(pgcourses)
        }
        if(details.programme==="phd"){
            setCourses([{value:"phd",display:"Ph.D"}])
        }
        if(details.course==="MTech"){
            setDisplayInput(true)
        }
        else{
            setDisplayInput(false)
        }
    }, [details.course, details.programme])
    
    
    const ugcourses=[
        {
            value:"Civil Engineeringvil",
            display:"Civil Engineering"
        },
        {
            value:"Computer Science and Engineeringe",
            display:"Computer Science and Engineering"
        },
        {
            value:"Electronics and Communication Engineeringe",
            display:"Electronics and Communication Engineering"
        },
        {
            value:"Applied Electronics and Instrumentationi",
            display:"Applied Electronics and Instrumentation"
        },
        {
            value:"Electrical and Electronics Engineeringe",
            display:"Electrical and Electronics Engineering"
        },
        {
            value:"Mechanical Engineering",
            display:"Mechanical Engineering"
        },
        {
            value:"Industrial Engineering",
            display:"Industrial Engineering"
        },
        {
            value:"Architecture",
            display:"Architecture"
        }
        
    ]

    const pgcourses=[
        {
            value:"mba",
            display:"MBA"
        },
        {
            value:"mca",
            display:"MCA"
        },
        
        {
            value:"MTech",
            display:"MTech"
        },
        {
            value:"MArch",
            display:"MArch"
        },
        {
            value:"MPlan",
            display:"Mplan"
        }
    ]

    return (
        <div className="w-11/12 md:w-9/12 mx-auto my-6">
            <hr className="my-4" />

            <form className="mt-7 mb-4 w-12/12">
                <div className="w-12/12">
                    <div className="form-card rounded-xl sm:rounded-none" style={{width:'100%'}}>
                    <h3 className="section-label pr-2">Primary Details</h3>
                    <div className="sm:flex items-end">
                        <div className="form-field sm:w-8/12 lg:w-6/12">
                            <label className="form-label mb-1" htmlFor="fullname">
                                Full Name
                            </label>
                            <input
                                className="form-control sm:w-96"
                                id="fullname"
                                name="fullname"
                                type="text"
                                value={details.fullname}
                                onChange={updatePersonal}
                            />
                            <div className="form-field sm:w-8/12 lg:w-6/12">
                            <label className="form-label mb-1" htmlFor="fullname">
                                Gender
                            </label>
                            <select name="gender" id="" value={details.gender} onChange={updatePersonal} className="form-control">
                                <option value="">Select an option</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                            </div>
                        </div>
                        <div className="form-field sm:w-8/12 lg:w-6/12 mt-4 sm:ml-2.5">
                                <label className="form-label mb-1" htmlFor="pob">
                                    Admission No.
                                </label>
                                <input
                                    className="form-control w-full"
                                    id="admno"
                                    type="text"
                                    name="admno"
                                    value={details.admno}
                                    onChange={updatePersonal}
                                />
                            </div>
                        </div>
                        <div className="sm:flex items-end">
                            <div className="form-field sm:w-4/12 mt-4 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="dob">
                                    Date of Birth
                                </label>
                                <input
                                    className="form-control sm:w-full"
                                    id="dob"
                                    name="dob"
                                    type="date"
                                    value={details.dob}
                                    onChange={updatePersonal}
                                />
                            </div>
 
                        </div>
                        <div className="form-field mt-4">
                            <label className="form-label mb-1" htmlFor="nation">
                                Programme
                            </label>
                            <select className="form-control w-64"
                                type="text"
                                id="programme"
                                name="programme"
                                value={details.programme}
                                onChange={updatePersonal}>
                                <option value="">Select an option</option>
                                <option value="ug">UG</option>
                                <option value="pg">PG</option>
                                <option value="phd">Ph.D</option>
                            </select>
                        </div>
                        <div className="form-field mt-4">
                            <label className="form-label mb-1" htmlFor="nation">
                                Department
                            </label>
                            <select className="form-control w-12/12"
                                type="text"
                                id="dept"
                                name="dept"
                                value={details.dept}
                                onChange={updatePersonal}>
                                <option value="">Select an option</option>
                                <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                                <option value="Civil Engineering">Civil Engineering</option>
                                <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                                <option value="Electrical and Electronics Engineering">Electrical and Electronics Engineering</option>
                                <option value="Mechanical Engineering">Mechanical Engineering</option>
                                <option value="Architecture">Architecture</option>
                                <option value="MBA">MBA</option>
                                <option value="MCA">MCA</option>
                            </select>
                        </div>
                        <div className="form-field mt-4">
                            <label className="form-label mb-1" htmlFor="nation">
                                Course
                            </label>
                            <select className="form-control w-12/12"
                                type="text"
                                id="course"
                                name="course"
                                value={details.course}
                                onChange={updatePersonal}>
                                {courses.map(item=>{
                                    return(
                                        <>
                                            <option value={item.value}>{item.display}</option>
                                        </>
                                    )
                                })}
                            </select>
                        </div>
                        {displayinput?(<div className="form-field mt-4">
                            <input className="form-control w-12/12"
                                type="text"
                                placeholder="Enter the course"
                                id="courseother"
                                name="courseother"
                                value={details.courseother}
                                onChange={updatePersonal}>
                            </input>
                        </div>):""}
                        <div className="sm:flex">
                            <div className="form-field mt-4 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="gender">
                                    Semester
                                </label>
                                <select className="form-control" name="sem" id="sem" value={details.sem} onChange={updatePersonal}>
                                    <option value="">Select an option</option>
                                    <option value="S1">S1</option>
                                    <option value="S2">S2</option>
                                    <option value="S3">S3</option>
                                    <option value="S4">S4</option>
                                    <option value="S5">S5</option>
                                    <option value="S6">S6</option>
                                    <option value="S7">S7</option>
                                    <option value="S8">S8</option>
                                    <option value="S9">S9</option>
                                    <option value="S10">S10</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sm:flex justify-between">
                    <div className="form-card rounded-xl sm:rounded-none" style={{width:'100%'}}>
                    <h3 className="section-label pr-2">Current Contact Information</h3>
                        <div className="sm:flex items-end">
                            <div className="form-field flex-1 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="mob">
                                    Mobile/Phone Number
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="tel"
                                    id="mob"
                                    name="mob"
                                    value={details.mob}
                                    onChange={updatePersonal}
                                />
                            </div>
                            <div className="form-field mt-4 flex-1 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="pemail">
                                    Primary Email Address
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="email"
                                    id="pemail"
                                    name="pemail"
                                    value={details.pemail}
                                    onChange={updatePersonal}
                                />
                            </div>
                        </div>
                        <div className="form-field mt-4">
                            <label className="form-label mb-1" htmlFor="address">
                                Residential Address
                            </label>
                            <input
                                className="form-control w-full"
                                type="textarea"
                                id="address"
                                name="address"
                                value={details.address}
                                onChange={updatePersonal}
                            />
                        </div>
                    </div>
                </div>
        
                <div className="text-right mt-8 space-x-6">
                    <button className="btn-outline" onClick={saveInfo}>
                        Save
                    </button>
                    <button className="btn-secondary" onClick={saveInfoNext}>
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
}

export default PersonalDetails;
