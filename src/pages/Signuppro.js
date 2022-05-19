import {useNavigate} from "react-router-dom";
import signup from "../images/signup.svg";

function Signuppro() {
    let navigate = useNavigate();
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
                    <img src={signup} alt="signupro" className="opacity-1 w-full h-full mb-0 object-contain relative"/>
                </div>
                <div className="my-auto mx-5">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Téléphone</span>
                        </label>
                        <input type="text" placeholder="Téléphone" className="input input-bordered"/>
                        <div className="grid grid-cols-2 divide-x w-full divide-none">
                            <div className="">
                                <label className="label">
                                    <span className="label-text">Nom</span>
                                </label>
                                <input type="text" placeholder="Nom" className="input input-bordered w-11/12"/>
                            </div>
                            <div className="">
                                <label
                                    className="label">
                                    <span className="label-text">Prénom</span>
                                </label>
                                <input type="text" placeholder="Prénom" className="input input-bordered w-full"/>
                            </div>
                        </div>
                        <div className=" flex justify-between mt-3 w-1/2">
                            <input type="radio" name="gender" value="male" className="radio checked:bg-green-ish ml-3"/>
                            <span>Male</span>
                            <input type="radio" name="gender" value="female"
                                   className="radio checked:bg-green-ish ml-3"/><span>Female</span>
                        </div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Email" className="input input-bordered"/>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Mot de passe</span>
                        </label>
                        <input type="password" placeholder="Mot de passe" className="input input-bordered"/>
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
    );
}

export default Signuppro;