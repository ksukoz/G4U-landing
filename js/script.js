M.AutoInit();

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".sidenav");
  var tabs = document.querySelector(".modal__tabs");
  var instances = M.Sidenav.init(elems);
  var instance = M.Tabs.init(tabs, { swipeable: true });
});

(function() {
  document.addEventListener("scroll", function() {
    var nav = document.querySelector(".navigation__nav");
    window.scrollY > 10
      ? (nav.style.backgroundColor = "rgba(0,0,0,.7)")
      : (nav.style.backgroundColor = "");
  });
})();
