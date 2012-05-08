console.log("-- Test 1 (...) --");
(function(){
  console.log("TODO");

  var elResult = document.getElementsByClassName('reactive-result')[0];
  while (elResult.firstChild) {
    elResult.removeChild(elResult.firstChild);
  }
  elResult.appendChild((function(_){
    _.h1("Heading #1"),
    _.h2("Heading #2"),
    _.p("A paragraph with some ", _.em("emphasized and ", _.strong("ocassionally strong")), " text")
  })(html.eval));
})();

