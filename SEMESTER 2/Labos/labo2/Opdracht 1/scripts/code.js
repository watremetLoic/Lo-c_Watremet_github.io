const setup = () => {
    alert("Dit is een mededeling");
    const confirmPopup = confirm("Weet u het zeker?");
    console.log(confirmPopup);
    const promptPopup = prompt("Wat is uw naam");
    console.log(promptPopup);
}
window.addEventListener("load", setup)