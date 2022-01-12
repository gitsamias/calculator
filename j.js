let resu = document.querySelector(".sp")
let tds = document.querySelectorAll(".td")
tds.forEach(item => {
    item.addEventListener("click",function(item){
        if(resu.innerHTML==0){
            resu.innerHTML = item.target.innerHTML
        }
        else{
            resu.innerHTML += item.target.innerHTML
        }
    })
});
let cla = document.querySelector(".ac").addEventListener("click",function(){
    resu.innerHTML = 0;
})
let cy = document.querySelector(".cl").addEventListener("click" , function(){
    let tl = resu.innerHTML
    if(resu.innerHTML.length === 1){
        resu.innerHTML = 0
    }
    else{
        resu.innerHTML = tl.substring(0,resu.innerHTML.length-2)
        if(resu.innerHTML.length==0){
            resu.innerHTML = 0;
        }
    }
})
let fr = document.querySelector(".rees").addEventListener("click",function(){
    let cal = eval(resu.innerHTML)
    resu.innerHTML = cal
})