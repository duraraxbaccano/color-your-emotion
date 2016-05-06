"use strict";
/*

  build the mapping between colors and positive colors

*/
var colorMaps = [];

function mapPositiveColor (posArr) {
  var baseColor = 0xFF0000;
  var colorMaps = [];
  for (var i = 0; i < posArr.length; i++) {
    posArr[i];
  }
}

var posWords, negWords;
// request for positive words
var request = new XMLHttpRequest();
request.open('GET', 'data/positive-words.json', true);

request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    posWords = JSON.parse(request.responseText);
    console.log("Positive Dictionary Length: " + posWords.length);
  } else {
    // ...
  }

};

request.onerror = function () {

};

request.send();
// request for negative words
var request2 = new XMLHttpRequest();
request2.open('GET', 'data/negative-words.json', true);

request2.onload = function () {
  if (request2.status >= 200 && request2.status < 400) {
    negWords = JSON.parse(request2.responseText);
    console.log("Negative Dictionary Length: " + negWords.length);
  } else {
    // ...
  }

};

request2.onerror = function () {

};

request2.send();