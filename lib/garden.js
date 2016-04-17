'use strict';

function Garden(gardenString, studentArray){
  var that = this
  this.studentArray = studentArray
  var sortedSA = studentArray.sort();
  var studentNumber = studentArray.length
  var gardenArray = gardenString.split("")
  gardenArray.splice((studentNumber * 2), 1)
  this.gardenWords = new Array();
  gardenArray.forEach(function(letter){
    if      (letter == "V") {
      that.gardenWords.push("violets")
  } else if (letter == "C") {
      that.gardenWords.push("clover") 
  } else if (letter == "R") {
      that.gardenWords.push("radishes")
  } else
      that.gardenWords.push("grass")
  });
  sortedSA.forEach(function(student, index){
    that[student.toLowerCase()] = [that.gardenWords[(index * 2)], that.gardenWords[(index * 2) + 1], that.gardenWords[(studentNumber * 2) + (index * 2)], that.gardenWords[(studentNumber * 2) + ((index * 2) + 1)] ]
  });
}
