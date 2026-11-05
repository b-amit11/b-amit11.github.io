(function(){
  document.getElementById("yr").textContent = new Date().getFullYear();

  var c = document.getElementById("pitch");
  function draw(){
    var r = c.getBoundingClientRect(), d = window.devicePixelRatio || 1;
    c.width = r.width * d; c.height = r.height * d;
    var x = c.getContext("2d"); x.scale(d, d);
    var w = r.width, h = r.height;
    for (var i = 0; i < 8; i++) { x.fillStyle = i % 2 ? "rgba(255,255,255,.035)" : "rgba(0,0,0,.04)"; x.fillRect(i * w / 8, 0, w / 8, h); }
    x.strokeStyle = "rgba(255,255,255,.28)"; x.lineWidth = 2;
    var m = 14; x.strokeRect(m, m, w - 2 * m, h - 2 * m);
    x.beginPath(); x.moveTo(w / 2, m); x.lineTo(w / 2, h - m); x.stroke();
    x.beginPath(); x.arc(w / 2, h / 2, Math.min(w, h) * .16, 0, Math.PI * 2); x.stroke();
    var bw = w * .16, bh = h * .5;
    x.strokeRect(m, (h - bh) / 2, bw, bh); x.strokeRect(w - m - bw, (h - bh) / 2, bw, bh);
  }
  draw(); window.addEventListener("resize", draw);
})();
