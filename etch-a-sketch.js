const container = document.querySelector(".container");

const rows = [];

//create 16 divs that will be containers for the rows
for (let i = 0; i<16; i++){
    const row = document.createElement("div");
    row.classList.add("row");
    rows.push(row);
}

//put 16 divs inside of each of the rows
rows.forEach((row) =>{
    container.appendChild(row);
    for (let i=0; i<16; i++){
        const box = document.createElement("div");
        box.classList.add("box");
        row.appendChild(box);
        box.addEventListener("mouseover", changeColor);
    }
});

function changeColor(){
   this.style.border = "1px solid red";
   this.style.backgroundColor = "black";
}

