import Select from "./Select";
import anime from 'animejs/lib/anime.es.js';
import stethoscope from '../images/stethoscope.jpg'
import man from '../images/man.jpg'
import pressure from '../images/pressure.jpg'
import radios from '../images/radio.jpg'
import ophtalmologist from '../images/ophtalmologist.jpg'
import diabetes from '../images/diabetes.jpg'
import gps from '../images/Location.svg'
import calendar from '../images/calendar.png'
import calendarico from '../images/Calendar.svg'
import record from '../images/record.png'
import location from '../images/location.png'
import potato from '../images/potato.png'
import folder from '../images/Folder.svg'
import docpro from '../images/docpro.png'
import User from "../images/3 User.svg"
import Document from "../images/Document.svg"
import Heart from "../images/Heart.svg"
import Navbar from "./Navbar";
import LateFooter from "./LateFooter";
import {useNavigate} from "react-router-dom";
import React, {Component} from 'react';

import {
    FloatingMenu,
    MainButton,
    ChildButton,
    Directions
} from 'react-floating-button-menu';
import MdAdd from '@mui/icons-material/Add';
import MdClose from '@mui/icons-material/Clear';
import MdFavorite from '@mui/icons-material/Favorite';
import {useEffect, useRef, useMemo, useState} from "react";
import home from '../images/home.png';
import girl from '../images/girl.png';
import girl_two from '../images/girl_two.png';
import {gsap} from 'gsap';


anime({
    targets: '',
    translateX: 250,
    rotate: '1turn',
    backgroundColor: '#FFF',
    duration: 800
});

/*class state {
    state = {
        isOpen: false,
    }
}
*/
function Hero() {
    let navigate = useNavigate();
    return (
        <div>
            <Navbar/>
            <div>
                <div
                    className="flex flex-row w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 divide-none pl-3">
                    <div className="w-[27%] h-full flex flex-col text-white justify-center font-bold  text-3xl pl-3 ">
                        <h1 className="">
                            Pour les cliniques privés et les centres médicaux
                        </h1>
                        <h2 className="relative  text-xl w-full font-light p-0 ml-0 mt-3 ">
                            Une bonne santé est l'état de bien-être mentale, physique et sociale et pas seulement
                            l'absence des maladies!
                        </h2>
                    </div>
                    <div className="w-[46%] h-full flex flex-col  to-blue-500">
                        <div className="w-full h-[85%]  flex items-center">
                            <img src={home} alt="home"
                                 className="home opacity-1 w-full h-full object-contain relative"/>
                            <i className="iconly-Heart icbo absolute rotate-[-12deg] text-[4em] opacity-75 hover:animate-ping duration 700 text-carmine"></i>
                        </div>
                        <div className="w-full h-[15%] flex items-center">
                            <Select/>
                        </div>
                    </div>
                    <div className="w-[27%] h-full flex flex-col text-white justify-center font-bold  text-3xl  mr-3 ">
                        <h1 className="">
                            Réservez une consultation physique chez un professionnel de santé
                        </h1>
                        <h2 className="relative  text-xl w-full font-light pr-0 ml-0 mt-3 ">
                            Avec quelques cliques vous pouvez trouver votre medecin n'importe qu'il est!
                        </h2>
                    </div>
                </div>
                <div
                    className="w-screen h-screen text-white bg-gradient-to-r  from-cyan-500 to-blue-500 flex flex-row ">
                    <div className="w-full h-full flex flex-col mr-3">
                        <div className="h-[5%] w-full flex justify-center">
                            <h1 className="text-3xl font-bold">Pourquoi
                                rejoindre?</h1>
                        </div>
                        <div className="h-[95%] w-full flex flex-row">
                            <div className="w-[70%] h-full flex flex-row">
                                <div className="w-full h-full flex flex-col">
                                    <div className="w-full h-[50%] mt-5 relative">
                                        <p className="ml-5">Vérifiez la disponibité de votre professionnel de santé,
                                            prenez <strong>rendez-vous</strong> et
                                            gagnez du temps.</p>
                                        <img src={calendar} alt="calendar"
                                             className="opacity-1 w-full h-full object-contain relative"/>
                                    </div>
                                    <div className="w-full h-[50%] flex flex-row relative">
                                        <div className="flex ml-5 items-center w-full h-full">
                                            <p><strong>Trouvez</strong> et <strong>localisez
                                            facilement</strong> et <strong>rapidement</strong> votre professionnel de
                                            santé.</p>
                                        </div>

                                        <div className=" w-full h-full">
                                            <img src={location} alt="location"
                                                 className="opacity-1 w-full h-full object-cover rounded-xl relative"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-full flex flex-col ">
                                    <div className="w-full h-full p-5 flex items-center flex-col">
                                        <strong>Gérez,consultez et partagez</strong> vos <strong>documents de
                                        santé</strong> avec vos
                                        professionnels de santé.
                                        <img src={record} alt="calendar" className="w-[80%] h-[80%] "/>
                                    </div>
                                    <div className="w-full h-full overflow-hidden">

                                    </div>
                                </div>
                            </div>
                            <div className="w-[30%] h-full flex justify-end items-end pr-0">
                                <img src={girl_two} alt="home"
                                     className="opacity-1 w-full h-full object-contain relative"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-row bg-gradient-to-r text-white relative from-cyan-500 to-blue-500 w-full">

                    <div className="text-4xl p-5 grid place-items-center place-content-center h-screen">
                        <h1 className="relative">
                            Vous êtes un professionnel de santé?
                        </h1>
                        <h2 className="relative text-xl w-full font-light p-0 ml-0 mt-5 ">
                            Rejoignez notre plateforme pour gagner en confort de travail.
                        </h2>
                        <div data-aos="flip-left" className="w-full mt-10">
                            <div className="flex justify-start px-4 py-2  text-xl ">
                                <div
                                    className="absolute left-4 h-16 w-16 bg-blue-bell rounded-full filter blur-2xl mix-blend-multiply opacity-70 animate-blob">
                                </div>
                                <img className="pr-2" src={User} alt="Logo" height={32} width={32}/>Gérez la liste de
                                vos
                                patients et leur suivi de santé.
                            </div>
                            <div className="flex justify-start px-4 py-2  text-xl ">
                                <div
                                    className="absolute left-4 h-16 w-16 bg-coral rounded-full filter blur-2xl mix-blend-multiply opacity-70 animate-blob">

                                </div>
                                <img className="pr-2" src={calendarico} alt="Logo" height={32} width={32}/>Gérez votre
                                agenda
                                et les heures de disponibilité.
                            </div>
                            <div className="flex justify-start px-4 py-2  text-xl ">
                                <div
                                    className="absolute left-4 h-16 w-16 bg-azure rounded-full filter blur-2xl mix-blend-multiply opacity-70 animate-blob">

                                </div>
                                <img className="pr-2" src={Document} alt="Logo" height={32} width={32}/>Edition
                                automatique
                                des ordonnaces avec une base de donnée immenses des médicamment utilisé en Algérie.
                            </div>
                            <div className="flex justify-start px-4 py-2  text-xl ">
                                <div
                                    className="absolute left-4 h-16 w-16 bg-green-ish rounded-full filter blur-2xl mix-blend-multiply opacity-70 animate-blob">

                                </div>
                                <img className="pr-2" src={Heart} alt="Logo" height={32} width={32}/>Améliorez l'accès
                                aux
                                soins pour vos patients en leur proposant la meilleure des expériences.
                            </div>
                            <button
                                onClick={() => {
                                    navigate("/Signuppro")
                                }}
                                className="ml-5 mt-5 float-right btn normal-case pt-0 pb-0 border-none transition ease-in-out delay-150 bg-green-ish hover:-translate-y-1 hover:scale-110 hover:bg-green-ish duration-300">Rejoindre
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

                        <img src={docpro} alt="doctor-pro" className="opacity-1 w-11/12 h-11/12 relative"/>
                    </div>
                </div>
            </div>
            <LateFooter/>
        </div>
    )
        ;
}


export default Hero;
/* <div data-aos="fade-right"
                     className=" text-4xl p-5 grid place-items-center place-content-center h-screen">
                    <h1 classNa <div className="grid grid-cols-2 divide-x w-full divide-none">

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
                            }}
                            className="ml-5 mt-5 float-right btn normal-case pt-0 pb-0 border-none transition ease-in-out delay-150 bg-green-ish hover:-translate-y-1 hover:scale-110 hover:bg-green-ish duration-300">Rejoindre
                        </button>
                    </div>
                </div>me="relative">
                        Réservez une consultation physique chez un professionnel de santé
                    </h1>
                    <h2 className="relative  text-xl w-full font-light p-0 ml-0 mt-5 ">
                        Avec quelques click vous pouvez trouver votre medecin n'importe qu'il est
                    </h2>
                    <Select/>
                </div>
                <div data-aos="fade-left" className="relative h-full hero min-h-screen md:min-h-screen">
                    <div className="w-full h-full flex justify-center items-center">
                        <img src={man}
                             alt="doctor"
                             className="mask mask-heart w-3/4 h-3/4 opacity-1 relative"/>
                    </div>
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
                            }}
                            className="ml-5 mt-5 float-right btn normal-case pt-0 pb-0 border-none transition ease-in-out delay-150 bg-green-ish hover:-translate-y-1 hover:scale-110 hover:bg-green-ish duration-300">Rejoindre
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
                </div>*/

/*<div
                        className="absolute top-15 -left-4 h-72 w-72 bg-blue-bell rounded-full filter blur-xl mix-blend-multiply  opacity-70 animate-blob">
                    </div>
                    <div
                        className="absolute top-15 right-12 h-72 w-72 bg-coral rounded-full filter blur-xl mix-blend-multiply  opacity-70 animate-blob animation-delay-2000">
                    </div>
                    <div
                        className="absolute bottom-10 h-72 w-72 bg-azure rounded-full filter blur-xl mix-blend-multiply opacity-70 animate-blob">
                    </div>
                    <div
                        className="absolute top-10 h-72 w-72 bg-green-ish rounded-full filter blur-xl mix-blend-multiply  opacity-70 animate-blob animation-delay-4000">
                    </div>*/
/*<FloatingMenu
                slideSpeed={500}
                direction={Directions.Up}
                spacing={8}
                isOpen={this.state.isOpen}
            >
                <MainButton
                    iconResting={<MdAdd style={{fontSize: 20}} nativeColor="white"/>}
                    iconActive={<MdClose style={{fontSize: 20}} nativeColor="white"/>}
                    background="bg-[#000]"
                    onClick={() => this.setState({isOpen: !this.state.isOpen})}
                    size={56}
                />
                <ChildButton
                    icon={<MdFavorite style={{fontSize: 20}}/>}
                    background="bg-[#fff]"
                    size={40}
                    onClick={() => console.log('First button clicked')}
                />
                <ChildButton
                    icon={<MdFavorite style={{fontSize: 20}}/>}
                    background="bg-[#fff]"
                    size={40}
                />
                <ChildButton
                    icon={<MdFavorite style={{fontSize: 20}}/>}
                    background="bg-[#fff]"
                    size={40}
                />
            </FloatingMenu>*/