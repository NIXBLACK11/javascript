tt = document.getElementById("rocket");
tt.addEventListener("click",function(){
    console.log("fly");
    tt.style.animation="up 4.97s linear 1";

    setTimeout(function(){
        jj=document.getElementById("cloud");
        jj.style.display ="none";
        hh=document.getElementById("after");
        hh.style.display ="flex";
        hh.style.flexDirection ="column";  
    },5000);
})