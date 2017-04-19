requirejs.config({
  baseUrl: 'js/lib',
  paths: {
    app: '../app'
  },
  shim: {
    'd': {
      exports: 't2'
    }
  }
});

requirejs(['a', 'b', 'app/c', 'd'], function(a, b, c, t2) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(t2());
});