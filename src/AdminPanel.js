import React, { useEffect, useState } from "react";
import "./App.css";
import TitleSVG from "./TitleSVG";
import { auth } from "./firebase_config";
import LoginAdmin from "./LoginAdmin";
import AdminHome from "./AdminHome";
import { ref, onValue } from "firebase/database";
import { db } from "./firebase_config";
import AdminMain from "./AdminMain";

function AdminPanel() {
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false)
    
    const logout = () => {
        auth.signOut().then(() => {
            setUser(null);
        });
    };

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            console.log("authChange : ",user)
            if (user) {
                setUser(user);

                const adminRef = ref(db, `admin/${user.uid}`);
                onValue(adminRef, (snapshot) => {
                    const data = snapshot.val();
                    if(snapshot.exists())
                    {
                        // console.log(data)
                        setIsAdmin(data.admin)
                        if(data.admin===false)
                            logout()
                    }

                });
            } else {
                setUser(null);
            }
        });
    }, []);

    return (
        <div className="App bg-gray-100 min-h-screen flex flex-col">
                    <header className="bg-white shadow-md py-4">
                        <div className="w-11/12 md:w-9/12 m-auto flex justify-between items-center">
                            <div className="w-64">
                                <TitleSVG />
                            </div>
                            {user && isAdmin &&(
                                <button
                                    className="btn"
                                    onClick={() => {
                                        logout();
                                    }}
                                >
                                    Logout
                                </button>
                            )}
                        </div>
                    </header>
                    {/* <Form user={user} logout={logout} /> */}
                    {user && isAdmin ? (
                        // <Form user={user} logout={logout} />
                        // <AdminHome />
                        <AdminMain logout={logout}/>
                    ) : (
                        <LoginAdmin
                            setUser={setUser}
                        />
                    )}
                </div>
    )
}

export default AdminPanel
