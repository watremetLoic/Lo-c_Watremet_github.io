const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    for (let i = 0;  i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
 update();
}

const update = () => {
    let red = document.getElementById("sldRed").value; // input is altijd value
    let green = document.getElementById("sldGreen").value; // input is altijd value
    let blue = document.getElementById("sldBlue").value; // input is altijd value
    document.getElementById("lblRed").innerHTML = red;
    document.getElementById("lblGreen").innerHTML = green;
    document.getElementById("lblBlue").innerHTML = blue;
    let swatch = document.getElementById("swatch");
    swatch.style.backgroundColor="rgb ("+red+", " +green+","+blue+",";
    let sliders = document.getElementsByClassName("slider");
    let value = sliders[0].value;
    console.log("de waarde van de slider is momenteel : " +value);
}
window.addEventListener("load", setup);