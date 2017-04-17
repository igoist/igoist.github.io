function postaction() {
  var todoInp = document.getElementById('title');
  var todoUl = document.getElementById('todo');
  // todoInp.addEventListener('change', function() {
    console.log(todoInp.value);
    var tmpLi = document.createElement('li');
    tmpLi.appendChild(document.createTextNode(todoInp.value));
    todoUl.appendChild(tmpLi);
  // });
}

window.onload = function init(argument) {

  var start_time = Date.now();
  console.log(argument);
/* ======== Main ======== */

  // var obj = {
  //   "index": 0,
  //   "title": "One",
  //   "detail": "detail test"
  // };
  // var objText = JSON.stringify(obj);
  // var objCopy = JSON.parse(objText,  function(key, value) {
  //   // may be
  //   return value;
  // });
  // console.log(objCopy);
  try {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "http://127.0.0.1:8000/todolist/api/", false);
    // xhr.setRequestHeader('accept', 'egoist');
    xhr.send(null);
    console.log("xhr.responseText: " + xhr.responseText);

    var listObj = JSON.parse(xhr.responseText);
    var listItems = "";

    for(var i = 0; i < 99; i++) {
        listItems = listItems + "<li>" + listObj[i%2].title + "</li>";
    }
    // console.log(listObj);
    // console.log(listItems);

    var todo = document.getElementById('todo');
    todo.innerHTML = listItems;

    var done = document.getElementById('done');
    done.innerHTML = listItems;
  } catch(e) {
    console.log("It's on Github Page");
  }

  stroll.bind( 'ul' );

  // Ripple Begin -- Temporary
  var buttonWidth = 172;
  var buttonHeight = 62;
  // 这边故意不用 Math.pow
  // var Radius = Math.sqrt((buttonWidth * buttonWidth)/4.0 + (buttonHeight * buttonHeight)/4.0);
  var RippleDuration = 10;
  var speed = 6;

  var buttons = document.getElementsByTagName('li');

  function createInner(x, y) {
    var inner = document.createElement('div');
    inner.style.width = speed + 'px';
    inner.style.height = speed + 'px';
    inner.style.transform = 'scale(1)';

    // console.log("e.offsetX: " + x);
    // console.log("e.offsetY: " + y);

    inner.style.left = (x - inner.offsetWidth/2) + 'px';
    inner.style.top = (y - inner.offsetHeight/2) + 'px';

    inner.scaleValue = parseInt(inner.style.transform.slice(6).slice(0, -1)) + 1;
    return inner;
  }

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onmousedown = function(e) {
      var offsetX = e.offsetX;
      var offsetY = e.offsetY;
      var RadiusX = (this.offsetWidth - offsetX > offsetX?this.offsetWidth - offsetX:offsetX);
      var RadiusY = (this.offsetHeight - offsetY > offsetY?this.offsetHeight - offsetY:offsetY);
      var maxRadius = Math.sqrt(Math.pow(RadiusX, 2) + Math.pow(RadiusY, 2));

      // var inner = document.createElement('div');
      var inner = createInner(offsetX, offsetY);
      this.appendChild(inner);
      var that = this;

      var interval = setInterval(function () {
        inner.scaleValue = parseInt(inner.style.transform.slice(6).slice(0, -1)) + 1;

        inner.style.transform = 'scale(' + inner.scaleValue + ')';
        inner.style.opacity = (inner.offsetWidth * inner.scaleValue)/maxRadius/2 + 0.2;
        if((inner.offsetWidth * inner.scaleValue) >= maxRadius*2 && (inner.offsetHeight * inner.scaleValue) >= maxRadius*2) {
          clearInterval(interval);
          var intervalClear = setInterval(function () {
            inner.style.opacity = inner.style.opacity - speed/that.offsetWidth ;
            if(inner.style.opacity <= 0) {
              that.removeChild(inner);
              clearInterval(intervalClear);
            }
          }, RippleDuration * 1.2);
        }
      }, RippleDuration);
    };
  }

/* ======== Main End ======== */
  var stop_time = Date.now();

  console.log("this script last: " + (stop_time - start_time) + "ms");

  start_time = null;
  stop_time = null;
};