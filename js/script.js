// document.addEventListener("DOMContentLoaded", function() {
//   var elems = document.querySelectorAll(".sidenav");
//   var tabs = document.querySelectorAll(".tabs");
//   var instances = M.Sidenav.init(elems);
//   var instance = M.Tabs.init(tabs);
// });

M.AutoInit();

(function() {
  document.addEventListener("scroll", function() {
    var nav = document.querySelector(".navigation__nav");
    window.scrollY > 10
      ? (nav.style.backgroundColor = "rgba(0,0,0,.7)")
      : (nav.style.backgroundColor = "");
  });
})();
