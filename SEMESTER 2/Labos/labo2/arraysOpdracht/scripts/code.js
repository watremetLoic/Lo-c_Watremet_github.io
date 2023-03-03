const setup = () => {
    let familieleden = ["jean", "milos", "davey", "trix", "paulinka"];
    console.log(familieleden.length);
    console.log(familieleden[0]);
    console.log(familieleden[2]);
    console.log(familieleden[4]);
    VoegNaamToe(familieleden);
    console.log(familieleden.join(" - "));

    const voegNaamToe = (familieleden)  => {
        let nieuwFamilieLid = prompt('geef maar je naam in');
        console.log(nieuwFamilieLid);
        familieleden.push(nieuwFamilieLid);
    }
}
window.addEventListener("load", setup);