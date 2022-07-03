import React, { useState } from "react";
import { auth, db } from "./firebase_config";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { get, ref, set } from "firebase/database";

function Login({ setUser, onBoarding, setOnBoarding, hasAccount, setHasAccount }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [admNo, setAdmNo] = useState("")
    const [error, setError] = useState("");

    const login = () => {
        if(email.includes("@")) //sign in with email
        {
            signInWithEmailAndPassword(auth, email, password).then((userData=>{
                
            })).catch((err) => {
                setError(err.message);
            });
        }
        else //sign in wih admission number
        {
            var dbRef = ref(db, "uidSignInDetails/");
            var admNoFound=0
            get(dbRef).then(snapshot=>{
                console.log(snapshot.val())

                var data={...snapshot.val()}
                for(var uid in data)
                {
                    if(data[uid].admNo===email)
                    {
                        admNoFound=1
                        signInWithEmailAndPassword(auth, data[uid].email, password).then((userData=>{
                
                        })).catch((err) => {
                            setError(err.message);
                        });
                        break
                    }
                }

                if(admNoFound===0)
                    setError("User with admission number not found")
            })
        }
    };

    const signup = () => {
        var dbRef = ref(db, "uidSignInDetails/");
        var admNoFound=0
        get(dbRef).then(snapshot=>{
            console.log(snapshot.val())

            var data={...snapshot.val()}
            for(var uid in data)
            {
                if(data[uid].admNo===admNo)
                {
                    admNoFound=1
                    setError("User with admission number already registered")
                    break
                }
            }

            if(admNoFound===0)
            {
                createUserWithEmailAndPassword(auth, email, password).then((userData)=>{
                    console.log(userData.user.uid)
                    
                    set(ref(db, "uidSignInDetails/" + userData.user.uid), {
                        admNo:admNo,
                        email:email
                    });
                }).catch((err) => {
                    setError(err.message);
                });
            }
        })

    };

    return (
        <div className="flex-75 flex justify-center items-center">
            {onBoarding ? (
                <div className="flex-75 flex justify-center items-center">
                    <div className="text-center h-fit">
                        <h2 className="text-3xl font-light text-gray-500 mb-2">College of Engineering Trivandrum</h2>
                        <h1 className="text-5xl font-semibold text-tertiary mb-8">Application for Hostel Admission </h1>
                        <button className="btn-lg" onClick={() => setOnBoarding(!onBoarding)}>
                            Apply Now
                        </button>
                    </div>
                </div>
            ) : (
                <div className="bg-white shadow-md text-center h-fit w-96 p-8 rounded-xl my-6">
                    {hasAccount ? (
                        <h2 className="text-2xl font-extrabold text-gray-500 pb-4">Log in to your account</h2>
                    ) : (
                        <h2 className="text-2xl font-extrabold text-gray-500 pb-4">Sign up to apply</h2>
                    )}
                    <label className="form-label mb-1" htmlFor="email">
                        Email address {hasAccount&&"/ Admission No"}
                    </label>
                    <input
                        className="form-control block w-full mb-3"
                        type="text"
                        required
                        value={email}
                        onChange={(e) => {
                            setError("")
                            setEmail(e.target.value);
                        }}
                    />

                   {!hasAccount&&(<>
                        <label className="form-label mb-1" htmlFor="email">
                            Admission No
                        </label>
                        <input
                            className="form-control block w-full mb-3"
                            type="text"
                            required
                            value={admNo}
                            onChange={(e) => {
                                setError("")
                                setAdmNo(e.target.value);
                            }}
                        />
                    </>)}

                    <label className="form-label mb-1" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="form-control block w-full mb-3"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => {
                            setError("")
                            setPassword(e.target.value);
                        }}
                    />
                    {error && <div className="text-red-600">{error}</div>}
                    {hasAccount ? (
                        <div>
                            <button className="btn w-full mt-3" onClick={login}>
                                Log In
                            </button>
                            <hr className="mt-6 mb-5" />
                            <p>
                                Dont have an account?{" "}
                                <span
                                    className="cursor-pointer text-primary hover:underline hover:text-primary-dark transition"
                                    onClick={() => {
                                        setHasAccount(!hasAccount);
                                    }}
                                >
                                    Sign up
                                </span>
                            </p>
                        </div>
                    ) : (
                        <div>
                            <button className="btn w-full mt-3" onClick={signup}>
                                Sign Up
                            </button>
                            <hr className="mt-6 mb-5" />
                            <p>
                                Already have an account?{" "}
                                <span
                                    className="cursor-pointer text-primary hover:underline hover:text-primary-dark transition"
                                    onClick={() => {
                                        setHasAccount(!hasAccount);
                                    }}
                                >
                                    Log In
                                </span>
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Login;
