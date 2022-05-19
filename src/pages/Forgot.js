import signin from "../images/signin.svg";
import {useNavigate} from "react-router-dom";
function Forgot() {
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
                            navigate("/Signin")
                        }}>
                            <i className="iconly-Arrow-Left text-eerie-black text-3xl"></i>
                        </a>
                    </div>
                    <img src={signin} alt="signup" className="opacity-1 w-full h-full mb-0 object-contain relative"/>
                </div>
                <div className="my-auto mx-5">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered"/>
                    </div>
                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <button
                                className="btn text-white mt-5 bg-coral border-none hover:-translate-y-1 hover:scale-110 hover:bg-green-ish duration-300 normal-case ">Récuperer
                                mon compte
                            </button>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};
export default Forgot;