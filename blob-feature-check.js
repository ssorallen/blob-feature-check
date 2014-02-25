/**
 * Blob Feature Check v1.1.0
 *
 * Released into the public domain.
 * http://unlicense.org
 */
(function() {
  var featureDiv = document.getElementById("blob-urls");

  function fail() { featureDiv.className += " feature-unsupported"; }
  function pass() { featureDiv.className += " feature-supported"; }

  var svg = new Blob(
    ["<svg xmlns='http://www.w3.org/2000/svg'></svg>"],
    {type: "image/svg+xml;charset=utf-8"}
  );

  // Safari 6 uses "webkitURL".
  var url = window.webkitURL || window.URL;
  var objectUrl = url.createObjectURL(svg);

  if (/^blob:/.exec(objectUrl) === null) {
    // `URL.createObjectURL` created a URL that started with something other
    // than "blob:", which means it has been polyfilled and is not supported by
    // this browser.
    fail();
  } else {
    var img = new Image();
    img.onload = function() { pass(); };
    img.onerror = function() { fail(); };
    img.src = objectUrl;
  }
})();
