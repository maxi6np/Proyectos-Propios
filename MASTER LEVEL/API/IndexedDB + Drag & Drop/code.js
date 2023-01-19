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

document.querySelector(".add").addEventListener("click",()=>{
    let nombre = document.getElementById("name").value;
    if (nombre.length > 0){
        if(document.querySelector(".possible") !== undefined){
            if(confirm("Hay elementos sin guardar,¿Quieres continuar?")){
                addObject({nombre});
                readObject()
            }
        } else{
            addObject({nombre});
            readObject()
        }
    }
})

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
    const fragment = document.createDocumentFragment();
    document.getElementById("names").innerHTML = "";
    cursor.addEventListener("success",()=>{
        if (cursor.result){
            let elemento = nombreHTML(cursor.result.key,cursor.result.value);
            fragment.appendChild(elemento);
            cursor.result.continue();
        } else document.getElementById("names").appendChild(fragment);
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


const nombreHTML = (id,name)=>{
    const container = document.createElement("DIV");
    const h2 = document.createElement("H2");
    const options = document.createElement("DIV");
    const saveButton = document.createElement("BUTTON");
    const deleteButton = document.createElement("BUTTON");

    container.classList.add("name");
    options.classList.add("options");
    saveButton.classList.add("impossible");
    deleteButton.classList.add("delete");

    saveButton.textContent = "Guardar";
    deleteButton.textContent = "Eliminar";

    h2.textContent = name.nombre;
    h2.setAttribute("contenteditable","true");
    h2.setAttribute("spellcheck","false");

    options.appendChild(saveButton);
    options.appendChild(deleteButton);

    container.appendChild(h2);
    container.appendChild(options);

    h2.addEventListener("keyup",()=>{
        saveButton.classList.replace("impossible","possible")
    }); 

    saveButton.addEventListener("click",()=>{
        if (saveButton.className == "possible"){
            modifyObject(id,{nombre: h2.textContent});
            saveButton.classList.replace("possible","impossible")
        }
    });

    deleteButton.addEventListener("click",()=>{
        deleteObject(id);
        document.getElementById("names").removeChild(container);
    })

    return container;
}