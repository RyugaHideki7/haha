import Select from "./Select";
import anime from 'animejs/lib/anime.es.js';
import health from '../images/health.svg'
import pandemic from '../images/pandemic.svg'
import gps from '../images/Location.svg'
import calendar from '../images/Calendar.svg'
import folder from '../images/Folder.svg'
import doctor from '../images/doctor.svg'
import doc from '../images/doc.svg'
import User from "../images/3 User.svg"
import Chart from "../images/Chart.svg"
import Bag from "../images/Bag.svg"
import Document from "../images/Document.svg"
import Heart from "../images/Heart.svg"
import {ReactComponent as logo} from "../images/needle.svg";
import Three from "../images/Three.png";
import Navbar from "./Navbar";
import LateFooter from "./LateFooter";
import {useNavigate} from "react-router-dom";

anime({
    targets: '',
    translateX: 250,
    rotate: '1turn',
    backgroundColor: '#FFF',
    duration: 800
});

function Hero() {
    let navigate = useNavigate();
    return (
        <div>
            <Navbar/>
            <div className="grid grid-cols-2 divide-x w-full divide-none">

                <div data-aos="fade-right"
                     className="text-eerie-black text-4xl p-5 grid place-items-center place-content-center h-screen">
                    <h1 className="relative">
                        Réservez une consultation physique chez un professionnel de santé
                    </h1>
                    <h2 className="relative text-purple-cadet text-xl w-full font-light p-0 ml-0 mt-5 ">
                        Avec quelques cliques vous pouvez trouver votre medecin n'importe qu'il est
                    </h2>
                    <Select/>
                </div>
                <div data-aos="fade-left" className="relative h-full hero min-h-screen md:min-h-screen">
                    <div
                        className="absolute top-15 -left-4 h-72 w-72 bg-blue-bell rounded-full filter blur-2xl mix-blend-multiply opacity-70 animate-blob">
                    </div>
                    <div
                        className="absolute top-15 right-12 h-72 w-72 bg-coral rounded-full filter blur-2xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000">
                    </div>
                    <div
                        className="absolute bottom-10 h-72 w-72 bg-azure rounded-full filter blur-2xl mix-blend-multiply opacity-70 animate-blob">
                    </div>
                    <div
                        className="absolute top-10 h-72 w-72 bg-green-ish rounded-full filter blur-2xl mix-blend-multiply opacity-70 animate-blob animation-delay-4000">
                    </div>

                    <img src={pandemic} alt="doctor" className="opacity-1 w-full h-full relative"/>
                </div>
            </div>
            <div className="grid grid-cols-3 divide-x divide-none place-content-center pt-48 mt-10">
                <div data-aos="fade-up-right" className="grid-cols-1 divide-y divide-none place-items-center">
                    <div className="relative h-1/4">
                        <div className="absolute h-full hero min-h-screen md:min-h-screen">
                            <div
                                className="absolute top-10 -left-4 h-72 w-72 bg-blue-bell rounded-full filter blur-2xl mix-blend-multiply opacity-20 animate-blob">

                            </div>
                            <div
                                className="absolute top-10 right-12 h-72 w-72 bg-coral rounded-full filter blur-2xl mix-blend-multiply opacity-20 animate-blob animation-delay-2000">

                            </div>
                        </div>
                        <img src={folder} alt="health" className="opacity-1 p-5 w-full h-full relative"/>
                    </div>
                    <div className="relative text-purple-cadet text-xl text-center font-light p-5 ml-0 ">
                        <strong>Gérez,consultez et partagez</strong> vos <strong>documents de santé</strong> avec vos
                        professionnels de santé.
                    </div>
                </div>
                <div className=" grid-cols-1 divide-y divide-none place-items-center mb-0  ">
                    <div className="relative h-1/4">
                        <div className="absolute h-full hero min-h-screen md:min-h-screen">
                            <div
                                className="absolute top-10 -left-4 h-72 w-72 bg-green-ish rounded-full filter blur-2xl mix-blend-multiply opacity-20 animate-blob">

                            </div>
                            <div
                                className="absolute top-10 right-12 h-72 w-72 bg-coral rounded-full filter blur-2xl mix-blend-multiply opacity-20 animate-blob animation-delay-2000">

                            </div>
                        </div>
                        <img src={gps} alt="location" className="animate-bounce opacity-1 p-5 w-full h-full relative"/>
                    </div>
                    <div className="relative text-purple-cadet text-xl text-center font-light p-5 ml-0 ">
                        <strong>Trouvez</strong> et <strong>localisez
                        facilement</strong> et <strong>rapidement</strong> votre professionnel de santé.
                    </div>
                </div>
                <div data-aos="fade-up-left" className="grid-cols-1 divide-y divide-none place-items-center mb-0 ">
                    <div className="relative h-1/4">
                        <div className="absolute h-full hero min-h-screen md:min-h-screen">
                            <div
                                className="absolute top-10 -left-4 h-72 w-72 bg-blue-bell rounded-full filter blur-2xl mix-blend-multiply opacity-20 animate-blob">

                            </div>
                            <div
                                className="absolute top-10 right-12 h-72 w-72 bg-green-ish rounded-full filter blur-2xl mix-blend-multiply opacity-20 animate-blob animation-delay-2000">

                            </div>
                        </div>
                        <img src={calendar} alt="needle" className="opacity-1 p-5 w-full h-full relative"/>
                    </div>
                    <div className="relative text-purple-cadet text-xl text-center font-light p-5 ml-0 h-3/4">
                        Vérifiez la disponibité de votre professionnel de santé, prenez <strong>rendez-vous</strong> et
                        gagnez du temps.
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 divide-x w-full divide-none">

                <div className="text-eerie-black text-4xl p-5 grid place-items-center place-content-center h-screen">
                    <h1 className="relative">
                        Vous êtes un professionnel de santé?
                    </h1>
                    <h2 className="relative text-purple-cadet text-xl w-full font-light p-0 ml-0 mt-5 ">
                        Rejoignez notre plateforme pour gagner en confort de travail.
                    </h2>
                    <div data-aos="flip-left" className="w-full mt-10">
                        <div className="flex justify-start px-4 py-2 text-eerie-black text-xl ">
                            <div
                                className="absolute left-4 h-16 w-16 bg-blue-bell rounded-full filter blur-2xl mix-blend-multiply opacity-70 animate-blob">
                            </div>
                            <img className="pr-2" src={User} alt="Logo" height={32} width={32}/>Gérez la liste de vos
                            patients et leur suivi de santé.
                        </div>
                        <div className="flex justify-start px-4 py-2 text-eerie-black text-xl ">
                            <div
                                className="absolute left-4 h-16 w-16 bg-coral rounded-full filter blur-2xl mix-blend-multiply opacity-70 animate-blob">

                            </div>
                            <img className="pr-2" src={calendar} alt="Logo" height={32} width={32}/>Gérez votre agenda
                            et les heures de disponibilité.
                        </div>
                        <div className="flex justify-start px-4 py-2 text-eerie-black text-xl ">
                            <div
                                className="absolute left-4 h-16 w-16 bg-azure rounded-full filter blur-2xl mix-blend-multiply opacity-70 animate-blob">

                            </div>
                            <img className="pr-2" src={Document} alt="Logo" height={32} width={32}/>Edition automatique
                            des ordonnaces avec une base de donnée immenses des médicamment utilisé en Algérie.
                        </div>
                        <div className="flex justify-start px-4 py-2 text-eerie-black text-xl ">
                            <div
                                className="absolute left-4 h-16 w-16 bg-green-ish rounded-full filter blur-2xl mix-blend-multiply opacity-70 animate-blob">

                            </div>
                            <img className="pr-2" src={Heart} alt="Logo" height={32} width={32}/>Améliorez l'accès aux
                            soins pour vos patients en leur proposant la meilleure des expériences.
                        </div>
                        <button
                            onClick={() => {
                                navigate("/Signuppro")
                            }} className="ml-5 mt-5 float-right btn normal-case pt-0 pb-0 border-none transition ease-in-out delay-150 bg-green-ish hover:-translate-y-1 hover:scale-110 hover:bg-green-ish duration-300">Rejoindre
                        </button>
                    </div>
                </div>
                <div className="relative h-full hero min-h-screen md:min-h-screen">
                    <div
                        className="absolute top-15 -left-4 h-72 w-72 bg-blue-bell rounded-full filter blur-2xl mix-blend-multiply opacity-50 animate-blob">

                    </div>
                    <div
                        className="absolute top-15 right-12 h-72 w-72 bg-coral rounded-full filter blur-2xl mix-blend-multiply opacity-50 animate-blob animation-delay-2000">

                    </div>
                    <div
                        className="absolute bottom-10 h-72 w-72 bg-azure rounded-full filter blur-2xl mix-blend-multiply opacity-50 animate-blob">

                    </div>
                    <div
                        className="absolute top-10 h-72 w-72 bg-green-ish rounded-full filter blur-2xl mix-blend-multiply opacity-50 animate-blob animation-delay-4000">

                    </div>

                    <img src={doc} alt="doctor-pro" className="opacity-1 w-3/4 h-3/4 relative"/>
                </div>

            </div>
            <LateFooter/>
        </div>
    );
}

export default Hero;