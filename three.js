// tt.addEventListener("mouseover",function(){
//     console.log("mouse");
//     hh=document.getElementById("ham");
//     hh.style.display ="flex";
//     hh.style.flexDirection ="column";
// })
tt = document.getElementById("mo");
let a=1;
tt.addEventListener("click",function(){
    if(a==1){
        console.log("open");
        hh=document.getElementById("ham");
        hh.style.display ="flex";
        hh.style.flexDirection ="column";
        a=0;
    }
    else{
        console.log("close");
        hh=document.getElementById("ham");
        hh.style.display ="none";
        a=1;
    }
})