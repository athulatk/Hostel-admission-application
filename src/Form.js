import React, { useEffect, useState } from "react";
import "./App.css";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import GeneratePDF from "./GeneratePDF";
import { db } from "./firebase_config";
import { ref, set, onValue } from "firebase/database";
import AlreadySubmitted from "./AlreadySubmitted";
import ApplicationClosed from "./ApplicationClosed";

export default function Form({ user, logout }) {
    const personal = {
        fullname: "",
        admno:"",
        dob: "",
        gender:"",
        course: "",
        courseother:"",
        programme:"",
        dept: "",
        sem: "",
        mob: "",
        pemail: "",
        address: "",
        category:"",
        bpl:"No",
        goi:"No",
        differentlyabled:"No",
        cgpa:"",
        examrank:"",
        aincome:"",
        parentname:"",
        parentmob:"",
        parentaddress:"",
        declaration:false

    };

 
    //final state
    const [details, setDetails] = useState({
        ...personal,
        formSubmitted: false,
        formno: 1,
    });


    const [formno, setformno] = useState(0);

    const [applicationOpen, setApplicationOpen] = useState(null)
    const [enableEdit, setEnableEdit] = useState(null)

	useEffect(() => {
        var dbRef = ref(db, "user/" + user.uid);

        onValue(dbRef, (snapshot) => {
            if (snapshot.exists()) {
               

                // console.log(arrayObj)

                setDetails({
                    ...snapshot.val(),
                });

                console.log(snapshot.val().formno);
                setformno(snapshot.val().formno);
                // console.log({
                //     ...snapshot.val(),
                //     ...arrayObj,
                // });
            } else {
                setformno(1);
            }
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        var dbRef = ref(db, "application/applicationOpen");

        onValue(dbRef, (snapshot) => {
            if (snapshot.exists()) {
                console.log("open = ",snapshot.val())
                setApplicationOpen(snapshot.val().applicationOpen)
            }
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        var dbRef = ref(db, "application/enableEdit");

        onValue(dbRef, (snapshot) => {
            if (snapshot.exists()) {
                console.log("open = ",snapshot.val())
                setEnableEdit(snapshot.val().enableEdit)
            } 
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    // useEffect(() => {
    //     setDetails({
    //         ...details,
    //         formno:formno
    //     })
    // }, [formno])

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const saveInfo = (e) => {
        e.preventDefault();
        set(ref(db, "users/" + user.uid), {
            ...details,
        })
        .then(() => {
            alert("Saved successfully");
        })
        .catch(() => {
            alert("Couldnt save data!");
        });
    };

    const nextform = (e) => {
        e.preventDefault();

        setformno(formno + 1);

        set(ref(db, "users/" + user.uid), {
            ...details,
            formno: formno + 1,
        });
        scrollTop();
    };
    const prevform = () => {
        setformno(formno - 1);

        set(ref(db, "users/" + user.uid), {
            ...details,
            formno: formno - 1,
        });
        scrollTop();
    };

    return (
        <>
            {/* {details.formSubmitted==true||applicationOpen==false? (
                applicationOpen==false?<ApplicationClosed/>:<AlreadySubmitted />
            ) : ( */}
                {applicationOpen===false&&enableEdit===false&&(<ApplicationClosed/>)}
                {details.formSubmitted===true&&enableEdit===false&&(<AlreadySubmitted/>)}
                {((details.formSubmitted===false&&applicationOpen===true)||(enableEdit===true))&&(<>
                    {formno === 0 || formno === 4 ? (
                        <></>
                    ) : (
                        <>
                            <h1 className="text-4xl text-tertiary font-light mt-8 text-center">
                            Application for Hostel Admission 
                            </h1>
                            {/* <div className="strip">
                                <div className={formno === 1 ? "text-gray-600" : "text-gray-400"}>
                                    <span>1</span>
                                    <span>Personal Details</span>
                                </div>
                                <div className={formno === 2 ? "text-gray-600" : "text-gray-400"}>
                                    <span>2</span>
                                    <span>Education</span>
                                </div>
                                <div className={formno === 3 ? "text-gray-600" : "text-gray-400"}>
                                    <span>3</span>
                                    <span>Employment</span>
                                </div>
                                <div className={formno === 4 ? "text-gray-600" : "text-gray-400"}>
                                    <span>4</span>
                                    <span>Achievements</span>
                                </div>
                                <div className={formno === 5 ? "text-gray-600" : "text-gray-400"}>
                                    <span>5</span>
                                    <span>Publications</span>
                                </div>
                                <div className={formno === 6 ? "text-gray-600" : "text-gray-400"}>
                                    <span>6</span>
                                    <span>Patents</span>
                                </div>
                                <div className={formno === 7 ? "text-gray-600" : "text-gray-400"}>
                                    <span>7</span>
                                    <span>Referees</span>
                                </div>
                            </div> */}
                        </>
                    )}
                    {formno === 0 && (
                        <div className="flex-75 flex justify-center items-center">
                            <div className="flex-75 flex justify-center items-center">
                                <div className="text-center h-fit">
                                    <div className="spinner-border" />
                                </div>
                            </div>
                        </div>
                    )}
                    {formno === 1 && (
                        <PersonalDetails
                            nextform={nextform}
                            details={details}
                            setDetails={setDetails}
                            saveInfo={saveInfo}
                        />
                    )}
                    {formno === 2 && (
                        <Education
                            nextform={nextform}
                            prevform={prevform}
                            details={details}
                            setDetails={setDetails}
                            saveInfo={saveInfo}
                        />
                    )}

                    {formno === 3 && (
                        <GeneratePDF details={details} setDetails={setDetails} scrollTop={scrollTop} setformno={setformno} user={user} />
                    )}
                </>)}
            {/* )} */}
        </>
    );
}
