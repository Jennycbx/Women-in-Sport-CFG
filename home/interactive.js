addEventListener("load",() => { // "load" is safe but "DOMContentLoaded" starts earlier
    var index = 0;
    const slides = document.querySelectorAll(".slides");
    const classHide = "slides-hidden", count = slides.length;
    nextSlide();
    function nextSlide() {
        slides[(index ++) % count].classList.add(classHide);
        slides[index % count].classList.remove(classHide);
        setTimeout(nextSlide, 5000);
    }
});

function myFunction() {
    const x = document.getElementById("nav");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }



  function typeWriter(WIS) {
      const textArray = WIS.innerHTML.split('');
      WIS.innerHTML = '';
      textArray.forEach((letter, i) =>
          setTimeout(() => (WIS.innerHTML += letter), 175 * i)
      );
  
      setInterval(() => typeWriter(WIS), 8000);
  }
  
  typeWriter(WIS);
  
