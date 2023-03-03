const setup = () => {
    let btnTry = document.getElementById("btnTry");

    // event - based programming
    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseout", mouseOut);


    // eventListeners CSS (op runtime iets doen)

    document.getElementById("btnWithoutBullets").addEventListener("click", withoutBullets);

    document.getElementById("btnWithBullets").addEventListener("click", withBullets);

    //eventListeners difference between "textContent" and "innerHTML"

     document.getElementById("btnContent").addEventListener("click", changeContent);
}

    // mouseHoverFunction
    const mouseHover = () => {
        document.getElementById("event").innerHTML += "mouse Hovered<br>";
    }
    // mouseOnclickFunction
    const onClick = () => {
        document.getElementById("event").innerHTML += "mouse clicked<br>";
    }
    // mouseOutFunction
    const mouseOut = () => {
        document.getElementById("event").innerHTML += "mouse Out<br>";
    }
    // changeCSS
    const withoutBullets = () => {

        let listItems = document.getElementsByTagName("li");
        for (let i = 0; i < listItems.length; i++) {
            // eerste manier
            /*listItems[i].style.listStyleType = "none";
            listItems[i].style.backgroundColor = "white";*/
            // tweede manier
           // listItems[i].className = "listItemsStyleNone colorRed"; // op runtime classes aanmaken.
            // derde manier
            if (listItems[i].classList.contains("colorWhite")) {
                listItems[i].classList.remove("colorWhite");
            }
            listItems[i].classList.add("listStyleNone");
            listItems[i].classList.add("colorRed");
            console.log("output" + listItems[i].className);

        }
    }
    const withBullets = () => {
        let listItems = document.getElementsByTagName("li");
        for (let i = 0; i < listItems.length; i++) {
            // eerste manier
            /*listItems[i].style.listStyleType = "disc";
            listItems[i].style.backgroundColor = "white"; */
            // tweede manier
          //  listItems[i].className = "listItemsStyleDisc colorWhite"; // op runtime classes aanmaken.
            // derde manier
            if (listItems[i].classList.contains("colorRed")) {
                listItems[i].classList.remove("colorRed");
            }
            listItems[i].classList.add("listStyleDisc");
            listItems[i].classList.add("colorWhite");

            // listItems[i].classList.add("listStyleDisc"); // 1 voor 1 een klasse toevoegen

             // listItems[i].classList.add("colorWhite"); //  1 voor 1 een klasse toevoegen
            // (omdat deze de laatste toevoeging is blijft dit wit)
        }
    }
    // difference between "textContent" and "innerHTML"
    const changeContent = () => {
        document.getElementById("textContent").textContent ="<a href='https://www.vives.be'>VIVES</a>";
        document.getElementById("innerHTML").innerHTML ="<a href='https://www.vives.be'>VIVES</a>";
}
    window.addEventListener("load", setup);