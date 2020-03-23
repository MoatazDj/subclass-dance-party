var makejigglyDancer = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  MakeDancer.call(this,top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer1"></span>')
  this.setPosition(top, left)

};

makejigglyDancer.prototype = Object.create(MakeDancer.prototype);
makejigglyDancer.prototype.constructor = makejigglyDancer;



makejigglyDancer.prototype.step = function () {

  MakeDancer.prototype.step.call(this, this.timeBetweenSteps);
  this.$node.toggle();
};


var makeLakhdharDancer = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  MakeDancer.call(this,top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer2"></span>')
  this.setPosition(top, left)

};

makeLakhdharDancer.prototype = Object.create(MakeDancer.prototype);
makeLakhdharDancer.prototype.constructor = makeLakhdharDancer;



makeLakhdharDancer.prototype.step = function () {

  MakeDancer.prototype.step.call(this, this.timeBetweenSteps);
  this.$node.toggle();
};