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

        <form className="mt-7 mb-4 w-12/12" onSubmit={saveInfoNext}>
            <div className="w-12/12">
                <div className="form-card rounded-xl sm:rounded-none" style={{width:'100%'}}>
                <div className="sm:flex items-end">
                    <div className="form-field sm:w-8/12 lg:w-6/12">
                        <label className="form-label mb-1" htmlFor="fullname">
                            Category (Select applicables)
                        </label>
                        <select required name="category" id="category" value={details.category} onChange={updatePersonal} className="form-control w-full">
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
                            <input type="radio" id="bplyes" name="bpl" value="Yes" checked={details.bpl==="Yes"} className="ml-2" onChange={()=>{setDetails(d=>({...d,bpl:"Yes"}))}}/>
                            <label htmlFor=""> Yes</label>
                            <input type="radio" id="bplno" name="bpl" value="No" checked={details.bpl==="No"} className="ml-2" onChange={()=>{setDetails(d=>({...d,bpl:"No"}))}}/>
                            <label htmlFor=""> No</label>
                            </div>
                           
                                <label for="vehicle1"> Differently Abled: </label>
                                <div>
                                <input type="radio" id="diffyes" name="diff" value="Yes" className="ml-2" checked={details.differentlyabled==="Yes"} onChange={()=>{setDetails(d=>({...d,differentlyabled:"Yes"}))}}/>
                                <label htmlFor=""> Yes</label>
                                <input type="radio" id="diffno" name="diff" valur="No" className="ml-2" checked={details.differentlyabled==="No"} onChange={()=>{setDetails(d=>({...d,differentlyabled:"No"}))}}/>
                                <label htmlFor=""> No</label>
                            </div>
                            
                                <label for="vehicle1"> Government Of India Nominee: </label>
                                <div>
                                <input type="radio" id="goiyes" name="goi" value="Yes" className="ml-2" checked={details.goi==="Yes"} onChange={()=>{setDetails(d=>({...d,goi:"Yes"}))}}/>
                                <label htmlFor=""> Yes</label>
                                <input type="radio" id="goino" name="goi" value="No" className="ml-2" checked={details.goi==="No"} onChange={()=>{setDetails(d=>({...d,goi:"No"}))}}/>
                                <label htmlFor=""> No</label>
                            </div>
                            
                        </div>

                    </div>
                    </div>
                    {(details.goi==="Yes"||details.bpl==="Yes"||details.differentlyabled==="Yes"||details.category==="st"||details.category==="sc")?"":
                    <div className="sm:flex items-end">
                        {(details.sem!=="S1"&&details.sem!=="S2")?(<div className="form-field sm:w-4/12 mt-4 sm:mr-2.5">
                            <label className="form-label mb-1" htmlFor="cgpa">
                                CGPA (Based on the latest university result)
                            </label>
                            <input
                                required
                                className="form-control w-full"
                                id="cgpa"
                                name="cgpa"
                                type="number"
                                step={0.01}
                                max={10.00}
                                min={0.00}
                                value={details.cgpa}
                                onChange={updatePersonal}
                            />
                        </div>):
                        (<div className="form-field sm:w-4/12 mt-4 sm:mr-2.5">
                            <label className="form-label mb-1" htmlFor="cgpa">
                                Entrance Exam Rank
                            </label>
                            <input
                                required
                                className="form-control w-full"
                                id="examrank"
                                name="examrank"
                                type="examrank"
                                value={details.examrank}
                                onChange={updatePersonal}
                            />
                        </div>)}
                        <div className="form-field sm:w-4/12 mt-4 sm:mr-2.5">
                            <label className="form-label mb-1" htmlFor="cgpa">
                                Yearly Family Income (in rupees)
                            </label>
                            <input
                                required
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
                                    required
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
                                    required
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
                                required
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
                        <input type="submit" value="Next" className="btn-secondary" />
                    </div>
                </div>
        </form>
    </div>
    );
}

export default Education;
