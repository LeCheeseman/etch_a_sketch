

function makeGrid() {
    for (i = 0; i <= 256; i++) {
        // [divNumber, i];
        console.log(i);
        const placement = document.querySelector(".container");
        const makediv = document.createElement("div");
        makediv.id = "div-" + i
        placement.appendChild(makediv);


    }
    return;
}


// Pseudo.

// Make 16 divs. 

// Run a for loop. While less than 16 x 16. Make div.

