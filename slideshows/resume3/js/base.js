window.onload = (function() {
  var e = document.querySelector("#pic")
    , n = document.querySelector(".PolarBear")
    , t = document.querySelector(".Liukanshan");
  n.classList.add("PolarBear--out");
  t.classList.remove("Liukanshan--in");
  e.addEventListener("mouseenter", function() {
      n.classList.add("PolarBear--out"),
      t.classList.remove("Liukanshan--in")
  }),
  e.addEventListener("mouseleave", function() {
      n.classList.remove("PolarBear--out"),
      t.classList.add("Liukanshan--in")
  });
});