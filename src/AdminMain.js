import { onValue, ref, set } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import AdminHome from './AdminHome';
import { db } from './firebase_config';

function AdminMain({logout}) {

    const navigate=useNavigate();
    const [list, setList] = useState(null)
    const [applicationOpen, setApplicationOpen] = useState(false)
    const [enableEdit, setEnableEdit] = useState(false)

    useEffect(() => {
        var dbRef = ref(db, "application/");

        onValue(dbRef, (snapshot) => {
            console.log("called")
            if (snapshot.exists()) {
                console.log("open = ",snapshot.val())
                console.log(snapshot.val())
                setApplicationOpen(snapshot.val().applicationOpen.applicationOpen)
                setEnableEdit(snapshot.val().enableEdit.enableEdit)
            }
        });

        setList(null)
    }, [])

    const openApplications=()=>{
        set(ref(db, "application/applicationOpen"), {
            "applicationOpen":!applicationOpen
        })
            .then(() => {
                alert("Saved successfully");
            })
            .catch((e) => {
                alert("Couldnt save data!",e);
                console.log(e)
            });
    }

    const enableEditFn=()=>{
        set(ref(db, "application/enableEdit"), {
            "enableEdit":!enableEdit
        })
            .then(() => {
                alert("Saved successfully");
            })
            .catch((e) => {
                alert("Couldnt save data!",e);
                console.log(e)
            });
    }

    return (
        <div className="App bg-gray-100 flex flex-col justify-center items-center space-y-8">

            {!list &&(<div className="flex w-ful mt-20 flex-row justify-center items-center space-x-6">
                    <button 
                        className="btn"
                        onClick={()=>{
                            // navigate(
                            //     "/admin/home",  
                            //     {
                            //         state:{
                            //             submitted:true
                            //             // logout:logout
                            //         }
                            //     }
                            // );
                            setList(<AdminHome submitted={true}/>)
                        }}
                    >
                        Submitted
                    </button>

                    <button 
                        className="btn"
                        onClick={()=>{
                            // navigate(
                            //     "/admin/home",  
                            //     {
                            //         state:{
                            //             submitted:false
                            //             // logout:logout
                            //         }
                            //     }
                            // );
                            setList(<AdminHome submitted={false}/>)
                        }}
                    >
                        Not Submitted
                    </button>
                </div>)}

                {!list&&(
                <div>
                    <button 
                    className="btn"
                    onClick={()=>{
                        openApplications()
                    }}
                    >
                        {applicationOpen?"Close Application":"Open Applications"}
                    </button>

                    <button 
                    className="btn"
                    onClick={()=>{
                        enableEditFn()
                    }}
                    >
                        {enableEdit?"Disable Editing":"Enable Editing"}
                    </button>
                </div>
                )}
                
                {list&&
                    <div className="flex flex-row justify-start w-10/12">
                        <div className="p-2 bg-primary font-bold text-xl ml-12 mt-4 rounded-xl cursor-pointer hover:shadow-3xl" onClick={()=>{setList(null)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                            </svg>
                        </div>
                    </div>
                }
                {list&&list}
        </div>
    )
}

export default AdminMain
