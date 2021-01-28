var modal = document.getElementById("myModal");
var modalImg = document.getElementById("currentImg");
var imgs = document.getElementsByClassName("grid-image");
// for(i=0; i<imgs.length; i++){
//     imgs[i].onclick = function(){
//         modal.style.display = "block";
//         modalImg.src = this.src;
//         console.log(this.src);
//     }
// }

function display(name) {
    document.getElementById("myModal").style.display = "flex";
    var modalImg = document.getElementById("currentImg");
    modalImg.src = "assets/"+name;
    console.log("uahdsgafsg");
    document.getElementById("myModal").onclick = function(){
        console.log('close');
        document.getElementById("myModal").style.display = "none";
    }
}

window.onscroll = function() {
    var mybutton = document.getElementById("topButton");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
}

function backToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}