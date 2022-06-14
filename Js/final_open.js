
const opensec = document.querySelector(".open")
const Top = opensec.querySelector(".top")
const bottom = opensec.querySelector(".bottom")
const noteb = opensec.querySelector(".noteb")
const infotitle = document.querySelector(".infotitle")
const lefts = document.querySelectorAll(".left")
const right = document.querySelector(".right")

let t =0;

document.addEventListener("wheel", function (e){
    // console.log(-8*x);

    // console.log(scrollY);
    const openTop = opensec.getBoundingClientRect().top;
    //scrolldown
    if( openTop+1000 < window.innerHeight){

        noteb.style.position = "sticky"
        infotitle.style.position = "sticky"
        noteb.style.top = "0"

        console.log(t);
        if(e.wheelDelta < 0){ 
            t = t - 0.005*e.deltaY ;
            Top.style.transform = `translate(${-52-t}%,${40-3*t}%) rotateZ(${15*t}deg)`

        if(t < -7){
            t = -7;
        }

        }else{
            t = t - 0.005*e.deltaY ;
            Top.style.transform = `translate(${-52-t}%,${40-3*t}%) rotateZ(${15*t}deg)`
        if(t>-0.5){
            t=-0.5;
        }
        
        }
    }  



 
    if(openTop+2200 < window.innerHeight){
        lefts[1].style.transform = "translateX(100px)"
        lefts[0].style.transform = "translateX(100px)"
        right.style.transform = "translateX(-100px)"
        right.style.opacity = "1"
        lefts[1].style.opacity = "1"
        lefts[0].style.opacity = "1"
    }

    else{
        lefts[1].style.transform = "translateX(0px)"
        lefts[0].style.transform = "translateX(0px)"
        right.style.transform = "translateX(0px)"
        lefts[1].style.opacity = "0"
        lefts[0].style.opacity = "0"
        right.style.opacity = "0"
    }

})

