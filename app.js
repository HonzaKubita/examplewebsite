let time = 0;
function addTime() {
  htmlp = document.getElementById("uptimeText");
  htmlp.innerHTML = time + " seconds";
  time++;
}
setInterval(addTime, 1000);