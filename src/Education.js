import React from "react";

function Education({ nextform, prevform, details, setDetails, saveInfo }) {
    function updatePersonal(e) {
        var newDetails = { ...details };
        newDetails[e.target.name] = e.target.value;
        setDetails(newDetails);
    }

    const saveInfoNext = (e) => {
        e.preventDefault();
        nextform(e);
    };

    const goPrev = (e) => {
        e.preventDefault();
        prevform(e);
    };
    return (
        <div className="w-11/12 md:w-9/12 mx-auto my-6">
        <hr className="my-4" />

        <form className="mt-7 mb-4 w-12/12">
            <div className="w-12/12">
                <div className="form-card rounded-xl sm:rounded-none" style={{width:'100%'}}>
                <div className="sm:flex items-end">
                    <div className="form-field sm:w-8/12 lg:w-6/12">
                        <label className="form-label mb-1" htmlFor="fullname">
                            Category (Select applicables)
                        </label>
                        <select name="" id="" className="form-control w-full">
                            <option value="">Select an option</option>
                            <option value="general">General</option>
                            <option value="obc">OBC</option>
                            <option value="oec">OEC</option>
                            <option value="obch">OBC(H)</option>
                            <option value="sc">SC</option>
                            <option value="st">ST</option>
                        </select>
                        <div className="grid grid-cols-2 gap-y-2 mt-4">
                            <label for="vehicle1"> BPL: </label>
                            <div>
                            <input type="radio" id="bplyes" name="bpl" className="ml-2" value={details.goi} onChange={()=>{setDetails(d=>({...d,goi:!d.goi}))}}/>
                            <label htmlFor=""> Yes</label>
                            <input type="radio" id="bplno" name="bpl" className="ml-2" value={details.goi} onChange={()=>{setDetails(d=>({...d,goi:!d.goi}))}}/>
                            <label htmlFor=""> No</label>
                            </div>
                           
                                <label for="vehicle1"> Differently Abled: </label>
                                <div>
                                <input type="radio" id="diffyes" name="diff" className="ml-2" value={details.goi} onChange={()=>{setDetails(d=>({...d,goi:!d.goi}))}}/>
                                <label htmlFor=""> Yes</label>
                                <input type="radio" id="diffno" name="diff" className="ml-2" value={details.goi} onChange={()=>{setDetails(d=>({...d,goi:!d.goi}))}}/>
                                <label htmlFor=""> No</label>
                            </div>
                            
                                <label for="vehicle1"> Government Of India Nominee: </label>
                                <div>
                                <input type="radio" id="goiyes" name="goi" className="ml-2" value={details.goi} onChange={()=>{setDetails(d=>({...d,goi:!d.goi}))}}/>
                                <label htmlFor=""> Yes</label>
                                <input type="radio" id="goino" name="goi" className="ml-2" value={details.goi} onChange={()=>{setDetails(d=>({...d,goi:!d.goi}))}}/>
                                <label htmlFor=""> No</label>
                            </div>
                            
                        </div>

                    </div>
                    </div>
                    {(details.goi||details.sc||details.st||details.bpl||details.differentlyabled)?"":
                    <div className="sm:flex items-end">
                        <div className="form-field sm:w-4/12 mt-4 sm:mr-2.5">
                            <label className="form-label mb-1" htmlFor="cgpa">
                                CGPA (Based on the latest university result)
                            </label>
                            <input
                                className="form-control w-full"
                                id="cgpa"
                                name="cgpa"
                                type="number"
                                value={details.cgpa}
                                onChange={updatePersonal}
                            />
                        </div>
                        <div className="form-field sm:w-4/12 mt-4 sm:mr-2.5">
                            <label className="form-label mb-1" htmlFor="cgpa">
                                Entrance Exam Rank
                            </label>
                            <input
                                className="form-control w-full"
                                id="examrank"
                                name="examrank"
                                type="examrank"
                                value={details.examrank}
                                onChange={updatePersonal}
                            />
                        </div>
                        <div className="form-field sm:w-4/12 mt-4 sm:mr-2.5">
                            <label className="form-label mb-1" htmlFor="cgpa">
                                Yearly Family Income
                            </label>
                            <input
                                className="form-control w-full"
                                id="famincome"
                                name="aincome"
                                type="aincome"
                                value={details.aincome}
                                onChange={updatePersonal}
                            />
                        </div>

                    </div>}
                    <h3 className="section-label pr-2">Parent/Guardian Details</h3>
                        <div className="sm:flex items-end">
                        <div className="form-field mt-4 flex-1 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="pemail">
                                    Parent/Guardian Name
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="text"
                                    id="parentname"
                                    name="parentname"
                                    value={details.parentname}
                                    onChange={updatePersonal}
                                />
                            </div>
                            <div className="form-field flex-1 sm:mr-2.5">
                                <label className="form-label mb-1" htmlFor="mob">
                                    Parent/Guardian Mobile Number
                                </label>
                                <input
                                    className="form-control w-full"
                                    type="tel"
                                    id="parentmob"
                                    name="parentmob"
                                    value={details.parentmob}
                                    onChange={updatePersonal}
                                />
                            </div>
 
                        </div>
                        <div className="form-field mt-4">
                            <label className="form-label mb-1" htmlFor="address">
                                Parent/Guardian Address
                            </label>
                            <input
                                className="form-control w-full"
                                type="textarea"
                                id="parentaddr"
                                name="parentaddr"
                                value={details.parentaddr}
                                onChange={updatePersonal}
                            />
                    
                </div>
            </div>
            </div>
    
            <div className="flex items-center justify-between mt-8">
                    <button onClick={goPrev} className="btn">
                        Prev
                    </button>
                    <div className="space-x-6">
                        <button className="btn-outline" onClick={saveInfo}>
                            Save
                        </button>
                        <button onClick={saveInfoNext} className="btn-secondary">
                            Next
                        </button>
                    </div>
                </div>
        </form>
    </div>
    );
}

export default Education;