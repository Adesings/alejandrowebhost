
//! Random background | by zkreations
var fondos = [
  "https://i.imgur.com/de1QMYe.jpg", 
  "https://i.imgur.com/xy1NlKP.jpg",
  "https://i.imgur.com/biMMFOK.jpg",
  "https://i.imgur.com/qbx6yHG.jpg"],
  random = Math.floor(Math.random() * fondos.length),
  image = document.querySelector(".headCover__random--img"),
  background = document.querySelector(".headCover__random");
if (background !== null) {
   background.style.backgroundImage = "url(" + fondos[random] + ")";
} else {
    image.src = fondos[random];
};

//Card Flip v1.0.0
var cardFlip = document.querySelectorAll(".cardFlip");
[].forEach.call(cardFlip, function (a) {
  a.addEventListener("click", btntoggle, false)
});
function btntoggle() {
  this.classList.toggle("is-active")
};

// Plugin: scrollToTop
// by zkreations.com | Daniel Abel
var scrollToTop = (function () {
  var showButton = 600,
    scrollSpeed = 1000;
  function scrollTop(b) {
    function a(d) {
      c += Math.PI / (b / (d - e));
      c >= Math.PI && window.scrollTo(0, 0);
      0 !== window.scrollY && (window.scrollTo(0, Math.round(scrollTime + scrollTime * Math.cos(c))), e = d, window.requestAnimationFrame(a))
    }
    var scrollTime = window.scrollY / 2,
      c = 0,
      e = performance.now();
    window.requestAnimationFrame(a)
  }
  var scrollPosition = window.scrollY,
    scrollButton = document.getElementById("scrollToTop");
  window.addEventListener("scroll", function () {
    scrollPosition = window.scrollY;
    showButton < scrollPosition ? scrollButton.classList.add("visible") : scrollButton.classList.remove("visible")
  });
  scrollButton.onclick = function () {
    scrollTop(scrollSpeed)
  }
})();

