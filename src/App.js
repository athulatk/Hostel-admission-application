import React, { useEffect, useState } from "react";
import "./App.css";
import TitleSVG from "./TitleSVG";
import Form from "./Form";
import Login from "./Login";
import AdminPanel from "./AdminPanel"
import { auth } from "./firebase_config";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import GeneratePDFAdmin from "./GeneratePdfAdmin";
import AdminHome from "./AdminHome";

export default function App() {
    const [onBoarding, setOnBoarding] = useState(true);

    const [hasAccount, setHasAccount] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        
    }, []);

    const logout = () => {
        auth.signOut().then(() => {
            setUser(null);
        });
    };

    

    return (
            <BrowserRouter>
            <Routes>
                <Route exact path="/" element={
                <div className="App bg-gray-100 min-h-screen flex flex-col ">
                    <header className="bg-white shadow-md py-4">
                        <div className="w-11/12 md:w-9/12 m-auto flex justify-between items-center">
                            <div className="w-64">
                                <TitleSVG />
                            </div>
                            {onBoarding && !user ? (
                                <div className="whitespace-nowrap space-x-4">
                                    <button
                                        onClick={() => {
                                            setOnBoarding(!onBoarding);
                                            setHasAccount(true);
                                        }}
                                        className="py-2 px-4 rounded-md cursor-pointer hover:bg-gray-100 focus:ring-2 focus:ring-gray-100 transition"
                                    >
                                        Log in
                                    </button>
                                    <button
                                        onClick={() => {
                                            setOnBoarding(!onBoarding);
                                            setHasAccount(false);
                                        }}
                                        className="btn"
                                    >
                                        Sign up
                                    </button>
                                </div>
                            ) : user ? (
                                <button
                                    className="btn"
                                    onClick={() => {
                                        logout();
                                    }}
                                >
                                    Logout
                                </button>
                            ) : (
                                <></>
                            )}
                        </div>
                    </header>
                    {user ? (
                        <Form user={user} logout={logout} />
                    ) : (
                        <Login
                            setUser={setUser}
                            onBoarding={onBoarding}
                            setOnBoarding={setOnBoarding}
                            hasAccount={hasAccount}
                            setHasAccount={setHasAccount}
                        />
                    )}
                    {/* <div className="flex flex-col mt-24 justify-center items-center">
                        <h1 className="text-3xl font-semibold text-tertiary mb-8">Application for the post of Director, CET School of Management</h1>
                        <h2 className="text-3xl font-light text-gray-500 mb-2">Submission Closed</h2>
                    </div> */}
                </div>
                }/>
            
                <Route exact path="/admin" element={<AdminPanel/>}/>
                {/* <Route exact path="/admin/home" element={<AdminHome/>}/> */}
                <Route exact path="/admin/userpdf" element={<GeneratePDFAdmin/>}/>
            </Routes>
            </BrowserRouter>
    );
}
