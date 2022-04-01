/*const piese = document.querySelectorAll(".item");
console.log(piese);

for (let i = 0; i < piese.length; i++){
    piese[i].addEventListener("click", ()=>{
        console.log("run");
    })
}

const tura =  document.getElementById("tura");
for (let i = 0; i < tura.length; i++){
    tura[i].addEventListener("click", ()=>{
        console.log("run");
    })
} 
console.log(tura);
*/
const tura = document.getElementsByName("svg:not(:root).svg-inline--fa");
console.log(tura);
for (let i = 0; i < tura.length; i++){
    tura[i].addEventListener("click", ()=>{
        console.log("run");
    })
}