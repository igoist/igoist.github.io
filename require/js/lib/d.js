console.log('here: d');
var dt = {
  t: 'd&t'
};

// can't export this way
function t() {
  console.log('here: d2');
  return {
    ddt: 'd&ddt'
  };
}

// Object {ddt: "d&ddt"}
var t2 = function() {
  console.log('here: d3');
  return {
    ddt: 'd&ddt'
  };
};

// t();