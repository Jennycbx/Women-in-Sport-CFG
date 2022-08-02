var modal = document.getElementById("jf-modal");
var btn = document.getElementById("jfBtn");
var span = document.getElementById("jfClose");

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var modal2 = document.getElementById("bs-modal");
var btn = document.getElementById("bsBtn");
var span = document.getElementById("bsClose");

btn.onclick = function () {
  modal2.style.display = "block";
};

span.onclick = function () {
  modal2.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal2.style.display = "none";
  }
};
