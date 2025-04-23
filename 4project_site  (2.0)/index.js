// // Function to get mouse coordinates
// function getMouseCoords(e) {

//     var e = e || window.event;
//     document.getElementById('container').innerHTML = e.clientX + ', ' +
//       e.clientY + '<br>' + e.screenX + ', ' + e.screenY;
//   }

//   var followCursor = (function() {

//     var s = document.createElement('div');

//     s.style.position = 'absolute';
//     s.style.margin = '0';
//     s.style.padding = '5px';
//     s.style.border = '1px solid white';
//     s.textContent = "🚀 some text"

//     return {
//       init: function() {
//         document.body.appendChild(s);
//       },

//       run: function(e) {
//         var e = e || window.event;
//         s.style.left = (e.clientX - 5) + 'px';
//         s.style.top = (e.clientY - 5) + 'px';
//         getMouseCoords(e);
//       }
//     };
//   }());

//   // Init mousecoordinates on window load
//   window.onload = function() {
//     followCursor.init();
//     document.body.onmousemove = followCursor.run;
//   }

const el = document.querySelector("#module");

el.addEventListener("mousemove", (e) => {
  el.style.setProperty("--x", (-e.screenX/15)+150 + "px");
  el.style.setProperty("--y", (-e.screenY/15) + "px");
});


