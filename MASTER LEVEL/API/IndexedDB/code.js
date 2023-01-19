"use strict";


// CREACION O APERTURA DE UNA BASE DE DATOS
const IDBRequest = indexedDB.open("baseDatosMaximo",5);

IDBRequest.onupgradeneeded = e =>{
    const db = e.target.result;
    db.error = e =>{
        console.log("algo salió mal");
    }
    // CREACION DE ALMACEN DE OBJETOS
    const objectStore = db.createObjectStore("nombres",{
        autoIncrement:true
        // "autoIncrement" sirve para que todos los valores se incrementen y sean diferentes, como el DNI
    });

};

// CREACIÓN DE OBJETOS
const addObject = obj =>{
    const db = IDBRequest.result;
    const IDBTransaction = db.transaction("nombres","readwrite");
    // Existen readwrite y readonly 
    const objectStore = IDBTransaction.objectStore("nombres");
    objectStore.add(obj);
    IDBTransaction.addEventListener("complete",()=>{
        console.log("se agregó un nuevo objeto")
    });
};

const readObject = ()=>{
    const db = IDBRequest.result;
    const IDBTransaction = db.transaction("nombres","readonly");
    const objectStore = IDBTransaction.objectStore("nombres");
    const cursor = objectStore.openCursor();
    cursor.addEventListener("success",()=>{
        if (cursor.result){
            console.log(cursor.result.value);
            cursor.result.continue();
        } else console.log("todos los datos fueron leídos");
        // else se usa porque la propiedad cursor, al menos una vez, es nulo
    });
};



// MODIFICACIÓN DE OBJETOS
const modifyObject = (key,obj) =>{
    const db = IDBRequest.result;
    const IDBTransaction = db.transaction("nombres","readwrite");
    // Existen readwrite y readonly 
    const objectStore = IDBTransaction.objectStore("nombres");
    objectStore.put(obj,key);
    // "put" agregra un obj si no existe. Si existe, lo modifica
    IDBTransaction.addEventListener("complete",()=>{
        console.log("se modificó un objeto")
    });
};



// ELIMINACIÓN DE OBJETOS
const deleteObject = key =>{
    const db = IDBRequest.result;
    const IDBTransaction = db.transaction("nombres","readwrite");
    // Existen readwrite y readonly 
    const objectStore = IDBTransaction.objectStore("nombres");
    objectStore.delete(key);
    IDBTransaction.addEventListener("complete",()=>{
        console.log("se eliminó un objeto")
    });
};
