console.log("-- Test 1 (...) --");
(function(){
  console.log("TODO");

  var elResult = document.getElementsByClassName('reactive-result')[0];
  while (elResult.firstChild) {
    elResult.removeChild(elResult.firstChild);
  }
  var elements = (function(){
    return [
      this.h1("Heading #1"),
      this.h2("Heading #2"),
      this.p("A paragraph with some ", this.em("emphasized and ", this.strong("ocassionally strong")), " text")
    ];
  }).call(html);
  for (var i = 0; i < elements.length; ++i)
    elResult.appendChild(elements[i]);
})();

