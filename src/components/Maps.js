import {useEffect, useMemo,useState} from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyBA8C_04Mp61sdNIcZxOZdbl703cA6DOjM");
Geocode.setLanguage("fr");
Geocode.setRegion("dz");
Geocode.setLocationType("ROOFTOP");

async function getCoordinates(adr) {
    const response = await Geocode.fromAddress(adr);
    const {lat, lng} = response.results[0].geometry.location;
    return {lat, lng}
}

export default function Maps({adresse}) {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyBA8C_04Mp61sdNIcZxOZdbl703cA6DOjM",
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map adresse={adresse}/>;
}

function Map({adresse}) {
    const[center,setCenter]=useState(null);
    //const adr='Bejaia, Béjaïa, Algérie';

    //console.log(cord);//[Object.keys(cord)[0]]ef
    useEffect(() => {
        getCoordinates(adresse).then(value=>{
            setCenter({
                lat:value[Object.keys(value)[0]],
                lng:value[Object.keys(value)[1]]})

            ;})

    },[adresse]);
    console.log(center)

    return (<>
        {center && <GoogleMap zoom={15} center={center} mapContainerClassName="map-container">
            <Marker position={center}/>
        </GoogleMap>
            }
        </>

    );
}