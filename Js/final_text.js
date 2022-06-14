const info = document.querySelector(".lenovoinfo")

const animationTags = info.querySelectorAll(".infohead , .detail , .infofirst ,.infosec, .infothird , .infoforth");
const L2RTags = info.querySelectorAll(".detail2, .infohead2")
const R2LTags = info.querySelectorAll(".detail3, .infohead3")




const interact = function(){
    
    let delay = 0.25;

    animationTags.forEach(tag =>{
        const animationTop = tag.getBoundingClientRect().top;
        const animationBottom = tag.getBoundingClientRect().bottom;


        if(animationTop+350 <= window.innerHeight && animationBottom > 0){
            tag.style.animation = `fadein 1s ${delay}s both`;
            delay = delay + 0.2;
            tag.style.opacity = 1;
   
        }
        else{
            
            tag.style.opacity = 0;
            tag.style.animation = `bye 0.5s  ${delay}s both`;
  
        }

    })




}



const interact2 = function(){
    
    let delay = 0.1; 

    L2RTags.forEach(tag =>{
        const animationTop = tag.getBoundingClientRect().top;
        const animationBottom = tag.getBoundingClientRect().bottom;


        if(animationTop+350 <= window.innerHeight && animationBottom > 0){
            tag.style.animation = `R2L 1s ${delay}s both`;
            delay = delay + 0.2;
            tag.style.opacity = 1;
   
        }
        else{
            
            tag.style.opacity = 0;
            tag.style.animation = `L2R 0.5s  ${delay}s both`;
  
        }

    })




}



const interact3 = function(){
    
    let delay = 0.1; 

    R2LTags.forEach(tag =>{
        const animationTop = tag.getBoundingClientRect().top;
        const animationBottom = tag.getBoundingClientRect().bottom;


        if(animationTop+350 <= window.innerHeight && animationBottom > 0){
            tag.style.animation = `R2L2 1s ${delay}s both`;
            delay = delay + 0.2;
            tag.style.opacity = 1;
   
        }
        else{
            
            tag.style.opacity = 0;
            tag.style.animation = `L2R2 0.5s  ${delay}s both`;
  
        }

    })




}



//비디오 실행관련 js

const action = function(){

const video = info.querySelector(".infofirst video");
const videocon = info.querySelector(".infofirst");

const videoTop = videocon.getBoundingClientRect().top;
const videoBottom = videocon.getBoundingClientRect().bottom;

if(videoTop < 0 || videoBottom >= window.innerHeight ){
  
    video.play()
    video.style.opacity = `0`;
    video.style.transition = `1.5s`;

}else{
    video.style.opacity = `1`;
    video.style.transition = `1.5s`;
}


}




info.addEventListener("scroll", function () {
    interact();
    interact2();
    interact3();
    action();
  })
