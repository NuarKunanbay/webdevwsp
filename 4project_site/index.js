function getMouseCoords(e) {
    var e = e || window.event;
    document.getElementById('container').innerHTML = e.clientX + ', ' +
      e.clientY + '<br>' + e.screenX + ', ' + e.screenY;
  }
  
  
  var followCursor = (function() {
    var s = document.createElement('div');
    s.style.position = 'absolute';
    s.style.margin = '0';
    s.style.padding = '5px';
    s.style.border = '1px solid red';
    s.textContent = "🚀"
  
    return {
      init: function() {
        document.body.appendChild(s);
      },
  
      run: function(e) {
        var e = e || window.event;
        s.style.left = (e.clientX - 5) + 'px';
        s.style.top = (e.clientY - 5) + 'px';
        getMouseCoords(e);
      }
    };
  }());
  
  window.onload = function() {
    followCursor.init();
    document.body.onmousemove = followCursor.run;
  }