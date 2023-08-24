/* console.log("Hola 1")
setInterval(() =>
    console.log("Hola 2")
    , 1000
)
console.log("Hola 3") */

/* let process = new Promise((resolve, reject) => {
    console.log("Todo ok continue...")
});

process.then(res => {
    console.log(res);
}).catch(res => {
    console.error(res);
}); */

/* fetch().then().catch(); //or
let peticion = async () => {
    let res = await fetch("www")
} */

/* let obtener = async (p1) => {
    let peticion = await fetch(`${p1.json}`);
    let res = await peticion.json
    console.log(res);
}

obtener("config") */

/* (async (p1) => {
    let peticion = await fetch("config.json");
    let res = await peticion.json();
    console.log(res);
})("config") */


const path = "config";
let contruirElEncabezado = async () => {
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector("#selectionJson");
    seleccion.insertAdjacentHTML("beforeend", /*html */ `
        <h1 class="display-4 fw-normal text-body-emphasis">${res.section.titulo}</h1>
        <p class="fs-5 text-body-secondary">${res.section.parrafo}
        </p>`

    )
    console.log(res);
}

contruirElEncabezado();