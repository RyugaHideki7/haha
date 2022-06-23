import signin from "../images/signin.svg";
import {useNavigate} from "react-router-dom";
import TextField from "@mui/material/TextField";
import * as React from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import axios from "../Api/axios";
//import { values } from "lodash";


const Forgot =()=> {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Adresse email invalide').required('Required'),
        }),
        onSubmit: values => {
            console.log(values.email);
            alert(JSON.stringify(values, null, 2));

        },
    });


    axios.post(`http://localhost:8080/api/account/reset-password/init?email=${formik.values.email}`,
    )
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    let navigate = useNavigate();
    return (

        <div data-aos="fade-left" className="grid place-items-center bg-gradient-to-r from-cyan-500 to-blue-500 w-screen h-screen">
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
                        <a href="/" onClick={() => {
                            navigate("/Signin")
                        }}>
                            <i className="iconly-Arrow-Left text-eerie-black text-3xl"></i>
                        </a>
                    </div>
                    <img src={signin} alt="signup" className="opacity-1 w-full h-full mb-0 object-contain relative"/>
                </div>
                <form onSubmit={formik.handleSubmit} className="my-auto mx-5">
                    <div className="mt-5">

                        <TextField className="w-full" label="Email"
                                   name="email"
                                   type="email"
                                   onChange={formik.handleChange}
                                   value={formik.values.email}
                                   variant="outlined" {...formik.getFieldProps('email')}
                                   error={formik.touched.email && Boolean(formik.errors.email)}
                                   helperText={formik.touched.email && formik.errors.email}
                                   required/>
                    </div>
                    <div className="menu w-full menu-horizontal p-0">

                        <button
                            type="submit"
                            className="btn w-full text-white text-xl font-light mt-5 bg-coral border-none hover:-translate-y-1 hover:scale-105 hover:bg-green-ish duration-300 normal-case ">Récuperer
                            mon compte
                        </button>

                    </div>

                </form>
            </div>
        </div>
    );
};
export default Forgot;