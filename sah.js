const piese = document.querySelectorAll(".img");
console.log(piese);

for(let i = 0; i < piese.length; i++){
    piese[i].addEventListener("click", ()=>{
        console.log("run");
    })
}