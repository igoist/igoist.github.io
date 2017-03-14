window.onload = function init(argument) {

  var start_time = Date.now();
  console.log(argument);
/* ======== Main ======== */

  var obj = {
    "index": 0,
    "title": "One",
    "detail": "detail test"
  };
  var objText = JSON.stringify(obj);
  var objCopy = JSON.parse(objText,  function(key, value) {
    // may be
    return value;
  });
  console.log(objCopy);

  var list = new Array();
  for(var i = 0; i < 99; i++) {
    list.push(objCopy);
  }
  console.log(list);






/* ======== Main End ======== */
  var stop_time = Date.now();

  console.log("this script last: " + (stop_time - start_time) + "ms");

  start_time = null;
  stop_time = null;
};