const setup = () => {
    let vraagElementenOpBelangerijk = document.getElementsByClassName("belangerijk");
        for (let i = 0; i < vraagElementenOpBelangerijk.length; i++) {
            if (vraagElementenOpBelangerijk[i].classList.contains("belangerijk")) {
                vraagElementenOpBelangerijk[i].classList.add("opvallend");
            }
        }
}
window.addEventListener("load", setup);