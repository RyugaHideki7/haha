import Four from "../images/Four.png"
import Night from "./Night";
import {useNavigate} from "react-router-dom";
import Three from "../images/Three.png";

function Navbar() {
    let navigate = useNavigate();
    return (
        <div className="navbar text-xl">
            <div className="flex-auto text-eerie-black font-bold ml-3">
                <img src={Three} alt="Logo" height={32} width={32}/>
                <a href="/" className="pl-2">dawini</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><a onClick={() => {
                        navigate("/Signin")
                    }}
                           className="btn normal-case mr-3 pt-0 pb-0 text-white border-none transition ease-in-out delay-150 bg-green-ish hover:-translate-y-1 hover:scale-110 hover:bg-green-ish duration-300">Se
                        connecter</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;