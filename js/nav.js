const navbarNavPrincipal = document.querySelector("#navbarNavPrincipal");
const fechaNavbarActual = document.querySelector("#fechaNavbarActual");


/* -------------------------------------------------------------------------- */
/*                          Fecha actual en cabecera                          */
/* -------------------------------------------------------------------------- */
let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
fechaNavbarActual.innerHTML = `${new Date().getDate()} de ${meses[new Date().getMonth()]} del ${new Date().getFullYear()}`;