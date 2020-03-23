var jigglyDance = function(top, left, timeBetweenSteps) {
    MakeDancer.call(this,top, left, timeBetweenSteps);
    this.$node = $('<span class="Jiggly"></span>');
    this.setPosition(top, left);
};

jigglyDance.prototype = Object.create(MakeDancer.prototype);
jigglyDance.prototype.constructor = jigglyDance;

var oldStep = MakeDancer.prototype.step;

jigglyDance.prototype.step = function () {
  oldStep.call(this, this.timeBetweenSteps);
  this.$node.toggle();
};

jigglyDance.prototype.setPosition = function(top, left) {
    var styleSettings = {
      top: top,
      left: left,
      "block-size": (top / 1.5)
    };
    this.$node.css(styleSettings);
  };