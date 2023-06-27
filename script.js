const gigachad = document.querySelector("img[alt='gigachad']")
window.addEventListener("keydown",(e)=>{
    if (e.key == "w"){
        gigachad.style.top= `${gigachad.offsetTop - 10}px`
    }else if (e.key == "s"){
        gigachad.style.top= `${gigachad.offsetTop + 10}px`
    }
})

//   move chad one pixel left by 1 px as well as scroll 1px  10ms
function scrollHorizontally() {
    var pos = 0;
    var intervalId = setInterval(function() {
      pos += 1;
    
      gigachad.style.left = `${gigachad.offsetLeft + 1}px`
    

      window.scrollTo(pos, 0);
      if (pos >= 6000) clearInterval(intervalId); // Stop scrolling at position 100
    }, 10); // Scroll every 10 milliseconds
}
scrollHorizontally()
//music
var audio = document.getElementById("audio"); 
window.addEventListener("load", function() {
  audio.play();
});