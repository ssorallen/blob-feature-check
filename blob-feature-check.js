/**
 * Blob Feature Check v1.0.0
 *
 * Released into the public domain.
 * http://unlicense.org
 */

var svg = new Blob(
  ["<svg xmlns='http://www.w3.org/2000/svg'></svg>"],
  {type: "image/svg+xml;charset=utf-8"}
);

var img = new Image();
var featureDiv = document.getElementById("blob-urls");
img.onload = function() {
  featureDiv.className += " feature-supported";
};
img.onerror = function() {
  featureDiv.className += " feature-unsupported";
};

// Safari 6 uses "webkitURL".
var url = window.webkitURL || window.URL;
img.src = url.createObjectURL(svg);
