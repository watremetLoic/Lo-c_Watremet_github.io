let globalVar; // --> in elke functie word variable gebrukt (niet veel gebruiken)
const setup = () => {

    let lblCursus = document.getElementById("lblCursus") ;
    lblCursus.addEventListener(type: "mouseover", change);

    let btnSend = document.getElementById("btnSend");
    lblCursus.addEventListener(type: "click", show);
}

const change = () => {

    let lblCursus = document.getElementById("lblCursus");
    lblCursus.className = "cursus";
}

const show = () =>{

    let txtName = document.getElementById("txtName");

    if(txtName.value != "") {
        alert("jouw naam is " + txtName.value);
        console.log(`jouw naam is" ${txtName.value}`); // van text naar variable --> concatinatie
    } else {
        alert("gelieve naam in te vullen");
    }
}