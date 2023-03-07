const setup = () => {
let txtInput = document.getElementById("txtInput");
let txtFirstInput = document.getElementById("txtFirstInput");
let txtSecondInput = document.getElementById("txtSecondInput");

let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", function () {
        functieSubstring(txtInput.value, txtFirstInput.value, txtSecondInput.value);
    })



    const functieSubstring = (value, txtFirstInput, txtSecondInput) => {

        let newValue = value.substring(txtFirstInput, txtSecondInput);
        let txtOutput = document.getElementById("txtOutput");
        txtOutput.innerText = newValue;

    }
}
    window.addEventListener("load", setup);