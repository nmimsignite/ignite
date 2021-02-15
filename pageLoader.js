// var t = "#106CF6",
var t =
    "linear-gradient(144.69deg, #f6bf4a 1.56%, #ec622d 35.7%, #dc395e 64.16%, #c04d95 92.61%)",
  u = document.querySelector("*"),
  s = document.createElement("style"),
  a = document.createElement("aside"),
  m = "http://www.w3.org/2000/svg",
  g = document.createElementNS(m, "svg"),
  c = document.createElementNS(m, "circle");
document.head.appendChild(s),
  (s.innerHTML =
    "#sailor {background:" +
    t +
    ";color:" +
    t +
    ";display:flex;align-items:center;justify-content:center;position:fixed;top:0;height:100vh;width:100vw;z-index:2147483647}@keyframes swell{to{transform:rotate(360deg)}}#sailor svg{animation:.6s swell infinite linear}"),
  a.setAttribute("id", "sailor"),
  document.body.prepend(a),
  g.setAttribute("height", "50"),
  g.setAttribute("filter", "brightness(175%)"),
  g.setAttribute("viewBox", "0 0 100 100"),
  a.prepend(g),
  c.setAttribute("cx", "50"),
  c.setAttribute("cy", "50"),
  c.setAttribute("r", "35"),
  c.setAttribute("fill", "none"),
  c.setAttribute("stroke", "#fff"),
  c.setAttribute("stroke-dasharray", "165 57"),
  c.setAttribute("stroke-width", "10"),
  // c.setAttribute("mode", backgroundBlendMode),
  g.prepend(c),
  (u.style.pointerEvents = "none"),
  (u.style.userSelect = "none"),
  (u.style.cursor = "wait"),
  window.addEventListener("load", function () {
    setTimeout(function () {
      (u.style.pointerEvents = ""),
        (u.style.userSelect = ""),
        (u.style.cursor = "");
      a.remove();
    }, 1000);
  });
