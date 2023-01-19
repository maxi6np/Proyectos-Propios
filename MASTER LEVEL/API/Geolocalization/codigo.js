"use strict";

const geolocation = navigator.geolocation;

const posicion = (pos)=>{
    console.log(pos);
    // console.log(pos.coords.latitude);
    // console.log(pos.coords.longitude);
};

const error = (e)=> console.log(e);

const options = {
    maximunAge:0,
    timeout:3000,
    enableHighAccuracy: true
};

geolocation.getCurrentPosition(posicion,error,options)