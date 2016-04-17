'use strict';

function Garden(cropString, studentArr) {
  var studentArr = studentArr.sort();
  var cropArr = cropString.split(/\n/g);
  var flipper = /R|C|G|V/gi;
  var flips = {R:"radishes",C:"clover",G:"grass",V:"violets"};
  for (var j = 0; j < cropArr.length; j++) {
    cropArr[j] = cropArr[j].match(/.{1,2}/g);
  }

  for (var l = 0; l < cropArr.length; l++) {
    for (var m = 0; m < cropArr[l].length; m++) { 
      cropArr[l][m] = cropArr[l][m].replace(flipper, function(match){return flips[match] + " "}).split(" ");
    }
  }

  this.setup = {};
  for (var i = 0; i < studentArr.length; i++) {
    this.setup[studentArr[i].toLowerCase()] = [];
    for (var k = 0; k < cropArr.length; k++) {
      this.setup[studentArr[i].toLowerCase()].push(cropArr[k][i]);
    }
    this.setup[studentArr[i].toLowerCase()] = this.setup[studentArr[i].toLowerCase()].reduce(function(a, b) {
                                                                                        return a.concat(b);
                                                                                      }, []);
    this.setup[studentArr[i].toLowerCase()].splice(2,1);
    this.setup[studentArr[i].toLowerCase()].splice(4,1);
  }
  return this.setup;
}