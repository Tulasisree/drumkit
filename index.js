var noOfbuttons = document.querySelectorAll(".drum").length;

for(var i=0; i<noOfbuttons; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
   // new Audio('sounds/tom-1.mp3').play();

   var buttonLetter =this.innerHTML;

   soundTrack(buttonLetter);
   buttonAnimation(buttonLetter);
     });
 }

 document.addEventListener("keypress",function(event){
      
    soundTrack(event.key);
    buttonAnimation(event.key);

 })

 function soundTrack(seenLetter){
    switch(seenLetter){
        case "w":
             new Audio('sounds/tom-1.mp3').play();
             break;
         case "a":
             new Audio('sounds/tom-2.mp3').play();
             break;
         case "s":
             new Audio('sounds/tom-3.mp3').play();
             break;
         case "d":
             new Audio('sounds/tom-4.mp3').play();
             break;
         case "j":
             new Audio('sounds/snare.mp3').play();
              break;
          case "k":
              new Audio('sounds/crash.mp3').play();
              break;
         case "l":
             new Audio('sounds/kick-bass.mp3').play();
             break;
         default:alert("innerHTML");
 }
}

function buttonAnimation(key){
   var activeButton = document.querySelector("."+key);
   activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}