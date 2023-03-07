const setup = () => {
    let pElement = document.getElementById("txtOutput");
    let btn1 = document.getElementById("btn1");
    pElement.innerHTML = "welkom";

    btn1.addEventListener("click",  () => {
            click(pElement);})
}

    const click = (pElement) => {
    pElement.innerHTML = "gewijzgd";
    }
window.addEventListener("load", setup);


