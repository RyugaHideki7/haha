import {useNavigate} from "react-router-dom";
import signin from "../images/signin.svg";
import TextField from "@mui/material/TextField";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import GoogleMaps from "./GoogleMaps";
import * as React from "react";

function Signup() {
    const [value, setValue] = React.useState(null);
    let navigate = useNavigate();
    return (
        <div data-aos="fade-left" className="flex w-screen h-screen justify-center  bg-gradient-to-r from-cyan-500 to-blue-500 items-center">
            <div className="w-3/4 h-[87.5%] rounded-lg shadow-2xl bg-white flex flex-row">
                <div className="w-full h-full">
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
                                navigate("/Signin")
                            }}>
                                <i className="iconly-Arrow-Left text-eerie-black text-3xl"></i>
                            </a>
                        </div>
                        <img src={signin} alt="signup" className="opacity-1 w-full h-full mb-0 relative"/>
                    </div>
                </div>
                <div id="doctor" className="w-full h-full p-1 items-stretch overflow-scroll">
                    <div className="mt-5">
                        <TextField inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                                   className="w-full rounded-[10px]"
                                   label="Téléphone" variant="outlined" required/>
                    </div>
                    <div className="flex flex-row justify-between w-full mt-5">
                        <div className="">
                            <TextField label="Nom" variant="outlined" required/>
                        </div>
                        <div className="">
                            <TextField label="Prénom" variant="outlined" required/>
                        </div>
                    </div>
                    <div className=" flex justify-between mt-3 w-1/2">
                        <input type="radio" name="gender" value="male" className="radio checked:bg-green-ish ml-3"/>
                        <span>Male</span>
                        <input type="radio" name="gender" value="female"
                               className="radio checked:bg-green-ish ml-3"/><span>Female</span>
                    </div>
                    <div className="mt-5">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Date de naissance"
                                value={value}
                                maxDate={new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField className="w-full active:border-4" {...params} required />}
                             />
                        </LocalizationProvider>
                    </div>
                    <div className="mt-5">
                        <GoogleMaps/>
                    </div>
                    <div className="mt-5">

                        <TextField className="w-full" label="Email" variant="outlined" required/>

                    </div>
                    <div className="mt-5">

                        <TextField className="w-full" label="Nom d'utilisateur" variant="outlined" required/>

                    </div>
                    <div className="mt-5">

                        <TextField type="password" className="w-full" label="Mot de passe" variant="outlined" required/>

                    </div>
                    <div className="mt-5">

                        <TextField type="password" className="w-full" label="Confirmer le mot de passe"
                                   variant="outlined" required/>

                    </div>
                    <div className="flex w-full mt-3 mb-3">
                        <div className="grid h-20 flex-grow card rounded-box place-items-center ">
                            <a
                                className="btn bg-coral w-3/4 h-3/4 border-none hover:-translate-y-1 hover:scale-110 hover:bg-green-ish duration-300">Inscrivez-vous
                            </a>
                        </div>
                        <div className="divider divider-horizontal">OU</div>
                        <div className="grid h-20 flex-grow card rounded-box place-items-center">
                            <a
                                className="btn btn-outline border-green-ish text-green-ish hover:border-green-ish w-3/4 h-3/4 hover:-translate-y-1 hover:scale-110 hover:bg-green-ish duration-300"
                                onClick={() => {
                                    navigate("/Signin")
                                }}>Se
                                connecter
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

export default Signup;