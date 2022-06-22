import Four from "../images/Four.png"
import Night from "./Night";
import {useNavigate} from "react-router-dom";
import Three from "../images/Three.png";
import potato from "../images/potato.png";

function Navbar() {
    let navigate = useNavigate();
    return (
        <div className="navbar flex flex-row bg-gradient-to-r from-cyan-500 to-blue-500 justify-between text-xl z-1">
            <div className="flex-auto text-eerie-black font-bold w-full  ml-3">
                <a className="inline-flex normal-case text-3xl text-white" href='/'><img className="mr-2 object-contain relative" src={Three} alt='logo'
                                                                             height={40} width={40}/>dawini</a>
            </div>
            <div className="navigation w-full flex text-white  justify-center ">
                <ul>
                    <li>
                        <a href="#" className="hover:border-b-[3px] border-green-ish hover:text-green-ish font-bold text-[0.8em]">Découvrir </a>
                    </li>
                    <li>
                        <a href="#" className="hover:border-b-[3px] border-green-ish hover:text-green-ish font-bold text-[0.8em]">Services</a>
                    </li>
                    <li>
                        <a href="#" className="hover:border-b-[3px] border-green-ish hover:text-green-ish font-bold text-[0.8em]">à propos</a>
                    </li>
                </ul>
            </div>
            <div
                className="w-full  flex justify-end ">

                <a className="btn text-[0.7em] text-dark-blue btn-outline border-dark-blue hover:-translate-y-1 hover:scale-105 hover:bg-green-ish duration-300 gap-2 hover:border-none cursor-pointer p-2 mr-4 hover:border-b-4 border-green-ish" onClick={() => {
                    navigate("/Signuppro")
                }}>S'inscrire</a>


                <div className="menu menu-horizontal p-0">
                    <a onClick={() => {
                        navigate("/Signin")
                    }}
                           className="btn mr-3 border-none rounded-[30px] text-white transition ease-in-out delay-150 bg-dark-blue hover:-translate-y-1 hover:scale-105 hover:bg-green-ish duration-300">Se
                        connecter</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;