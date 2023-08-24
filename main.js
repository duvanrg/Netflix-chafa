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

    let selection = document.querySelector("#navBarJson");
    selection.insertAdjacentHTML("beforeend", /*html*/`
        ${res.nav.map((value) => /*html*/ `
        <a class="me-3 py-2 link-body-emphasis text-decoration-none" href="#">${value.text}</a>`
    ).join(" ")}
    `)


    selection = document.querySelector("#selectionJson");
    selection.insertAdjacentHTML("beforeend", /*html */ `
    <h1 class="display-4 fw-normal text-body-emphasis">${res.section.titulo}</h1>
    
    
    ${res.section.paragraph.map((value) => /*html */ `
    
    <p class="fs-5 text-body-secondary"><svg class="bi" width="24" height="24"><use xlink:href="#check" /></svg>${value.text}</p>`).join(" ")}
    `
    )
    console.log(res);

    selection = document.querySelector("#cardsJson");
    selection.insertAdjacentHTML("beforeend", /*html*/`
        ${res.cards.map((value) => /*html*/ `
        <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm selectable-card">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">${value.title}</h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">${value.price}<small class="text-body-secondary fw-light">${value.time}</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                ${value.data.map((data) => /*html*/ `
                    <li>${data.text}</li>
                `).join("")}
                </ul>
                    <button type="button" class="${value.styleButton}">${value.button}</button>
                </div>
            </div>
        </div>
        `
    ).join(" ")}
    `)
}

contruirElEncabezado();
