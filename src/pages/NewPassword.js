import React from 'react';
import signin from "../images/signin.svg";
import TextField from "@mui/material/TextField";
import {useNavigate} from "react-router-dom";

const NewPassword =(props)=> {
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();}
    return (
        <div data-aos="fade-left" className="grid place-items-center w-screen h-screen">
            <div className="w-3/4 shadow-2xl rounded-xl grid grid-cols-2 divide-x divide-none">
                <div
                    className="absolute top-40 left-60 h-72 w-72 bg-blue-bell rounded-full filter blur-2xl mix-blend-multiply opacity-70 animate-blob">
                </div>
                <div
                    className="absolute top-60 left-72 h-72 w-72 bg-coral rounded-full filter blur-2xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000">
                </div>
                <div className="grid area-fluid">
                    <div
                        className="w-10 h-10 rounded-full grid place-items-center mb-0 hover:-translate-y-1 hover:scale-110 duration-300">
                        <a href="#" onClick={() => {
                            navigate("/")
                        }}>
                            <i className="iconly-Arrow-Left text-eerie-black text-3xl"></i>
                        </a>
                    </div>
                    <img src={signin} alt="signup" className="opacity-1 w-full h-full mb-0 object-contain relative"/>
                </div>
                <form onSubmit={handleSubmit} className="my-auto mx-5">
                    <div className="mt-5">

                        <TextField type="password" className="w-full" label="Nouveau mot de passe" variant="outlined" required/>
                        <TextField sx={{mt: 2.5,}} type="password" className="w-full mt-5" label="Confirmer le mot de passe" variant="outlined" required/>

                    </div>
                    <div className="menu w-full menu-horizontal p-0">

                        <button
                            className="btn w-full text-white text-xl font-light mt-5 bg-coral border-none hover:-translate-y-1 hover:scale-105 hover:bg-green-ish duration-300 normal-case ">Valider
                        </button>

                    </div>

                </form>
            </div>
        </div>
    );
}

export default NewPassword;