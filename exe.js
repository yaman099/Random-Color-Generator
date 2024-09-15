const createColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 10)]
    }
    // return color;
    document.body.style.backgroundColor = color;
}
// console.log(createColor())
const start = document.getElementById("start")
const stop = document.getElementById("stop")
let startInterval;
start.addEventListener("click",()=>{
    startInterval = setInterval(createColor,1000)
})
stop.addEventListener("click",()=>{
    clearInterval(startInterval);
})