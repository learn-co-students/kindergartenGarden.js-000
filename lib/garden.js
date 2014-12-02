'use strict';
function Garden(diagram, students) {
  var self = this;
  this.diagram = diagram;

  students.sort().forEach(function (student, index) {
    self[student.toLowerCase()] = self.getPlants(index);
  });
}

Garden.prototype.PLANTS = {
  G: 'grass',
  V: 'violets',
  R: 'radishes',
  C: 'clover'
};

Garden.prototype.getPlants = function(index) {
  var pots = this.parse();
  var plants = [];
  var position = 2*index;
  plants.push(pots[0][position]);
  plants.push(pots[0][position+1]);
  plants.push(pots[1][position]);
  plants.push(pots[1][position+1]);
  return plants;
}

Garden.prototype.parse = function(diagram) {
  var self = this;
  return self.diagram.split("\n").map(function (row) {
    return row.split('').map(function (sign) {
      return self.PLANTS[sign];
    });
  });
}
