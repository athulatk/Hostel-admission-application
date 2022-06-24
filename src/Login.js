import React, { useState } from "react";
import { auth } from "./firebase_config";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

function Login({ setUser, onBoarding, setOnBoarding, hasAccount, setHasAccount }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const login = () => {
        signInWithEmailAndPassword(auth, email, password).catch((err) => {
            setError(err.message);
        });
    };

    const signup = () => {
        createUserWithEmailAndPassword(auth, email, password).catch((err) => {
            setError(err.message);
        });
    };

    return (
        <div className="flex-75 flex justify-center items-center">
            {onBoarding ? (
                <div className="flex-75 flex justify-center items-center">
                    <div className="text-center h-fit">
                        <h2 className="text-3xl font-light text-gray-500 mb-2">College of Engineering Trivandrum</h2>
                        <h1 className="text-5xl font-semibold text-tertiary mb-8">Hostel Admission Application</h1>
                        <button className="btn-lg" onClick={() => setOnBoarding(!onBoarding)}>
                            Apply Now
                        </button>
                    </div>
                </div>
            ) : (
                <div className="bg-white shadow-md text-center h-fit w-96 p-8 rounded-xl">
                    {hasAccount ? (
                        <h2 class="text-2xl font-extrabold text-gray-500 pb-4">Log in to your account</h2>
                    ) : (
                        <h2 class="text-2xl font-extrabold text-gray-500 pb-4">Sign up to apply</h2>
                    )}
                    <label className="form-label mb-1" htmlFor="email">
                        Email address
                    </label>
                    <input
                        className="form-control block w-full mb-3"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />

                    <label className="form-label mb-1" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="form-control block w-full mb-3"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => {
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
