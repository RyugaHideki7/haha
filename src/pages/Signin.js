import Select from "../components/Select";
import calendar from "../images/Calendar.svg";
import {useNavigate} from "react-router-dom";
import signin from "../images/signin.svg";
import axios from "../Api/axios";
import {useRef, useState, useEffect, useContext} from 'react';
import AuthContext from "../Context/AuthProvider";
import TextField from "@mui/material/TextField";
import * as React from "react";

const LOGIN_URL = 'http://localhost:8080/api/authenticate';

const Signin =() => {
    const {setAuth} = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ username, password }),
                {
                    headers: { 'Content-Type': 'application/json',
                        'Authorization': 'Basic Y2xpZW50OnNlY3JldA==',
                    },
                    withCredentials: true
                }
            );

            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response.data.roles;
            setAuth({username, password, roles, accessToken});
            setUsername('');
            setPassword('');
            setSuccess(true);


        } catch (err) {
            if (!err.response) {
                setErrMsg('No Server Response');

            } else if (err.response.status === 400) {
                setErrMsg('Missing Username or Password');

            } else if (err.response.status === 401) {
                setErrMsg('Unauthorized');

            } else if (err.response.status === 404) {
                setErrMsg('NOT FOUND');

            } else {
                setErrMsg('Login Failed');

            }
            errRef.current.focus();

        }
    }
    let navigate = useNavigate();
    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br/>
                    <p>
                        <a href="/">Go to Home</a>
                    </p>
                </section>
            ) : (
                <div data-aos="fade-left" className="grid place-items-center  bg-gradient-to-r from-cyan-500 to-blue-500 w-screen h-screen">
                    <div className="w-3/4 shadow-2xl rounded-xl grid grid-cols-2 bg-white divide-x divide-none">
                        <div
                            className="absolute top-40 left-60 h-72 w-72 bg-blue-bell rounded-full filter blur-2xl mix-blend-multiply opacity-70 animate-blob">
                        </div>
                        <div
                            className="absolute top-60 left-72 h-72 w-72 bg-coral rounded-full filter blur-2xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000">
                        </div>
                        <div className="grid area-fluid">
                            <div
                                className="w-10 h-10 rounded-full grid place-items-center mb-0 hover:-translate-y-1 hover:scale-110 duration-300">
                                <a onClick={() => {
                                    navigate("/")
                                }}>
                                    <i className="iconly-Arrow-Left text-eerie-black text-3xl"></i>
                                </a>
                            </div>
                            <img src={signin} alt="signup"
                                 className="opacity-1 w-full h-full mb-0 object-contain relative"/>
                        </div>
                        <form onSubmit={handleSubmit} className="my-auto mx-5">
                            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}
                               aria-live="assertive">{errMsg}</p>
                            <div className="mt-5">

                                <TextField type="text"
                                           id="email"
                                           ref={userRef}
                                           autoComplete="off"
                                           onChange={(e) => setUsername(e.target.value)}
                                           value={username}
                                           required
                                           className="w-full"
                                           label="Nom d'utilisateur"
                                           variant="outlined"/>

                            </div>
                            <div className="mt-5">

                                <TextField id="password"
                                           onChange={(e) => setPassword(e.target.value)}
                                           value={password}
                                           required
                                           type="password"
                                           className="w-full"
                                           label="Mot de passe"
                                           variant="outlined"/>

                            </div>
                            <div className="form-control">
                                <label className="label block">
                                    <a href="#" onClick={() => {
                                        navigate("/Forgotpassword")
                                    }} className="label-text-alt link link-hover">Mot de passe oublié?</a>
                                </label>
                                <div className="form-control">
                                    <label className="cursor-pointer label">
                                        <span className="label-text-alt">Se souvenir de moi</span>
                                        <input type="checkbox"
                                               className="checkbox checkbox-accent"/>
                                    </label>
                                </div>
                            </div>
                            <div className="flex w-full">
                                <div className="grid h-20 flex-grow card rounded-box place-items-center ">
                                    <button
                                        className="btn bg-coral w-3/4 h-3/4 border-none hover:-translate-y-1 hover:scale-110 hover:bg-green-ish duration-300">Se
                                        connecter
                                    </button>
                                </div>
                                <div className="divider divider-horizontal">OU</div>
                                <div className="grid h-20 flex-grow card rounded-box place-items-center">
                                    <a
                                        className="btn btn-outline border-green-ish text-green-ish hover:border-green-ish w-3/4 h-3/4 hover:text-white hover:-translate-y-1 hover:scale-110 hover:bg-green-ish duration-300 "
                                        onClick={() => {
                                            navigate("/Signup")
                                        }}>Inscrivez-vous
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default Signin;