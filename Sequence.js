(function() {
  var Sequence;
  var __slice = Array.prototype.slice;

  exports.Sequence = Sequence = (function() {

    function Sequence(sequence) {
      this.sequence = sequence;
      if (typeof this.sequence !== 'function') throw "Sequence must be a function";
    }

    Sequence.prototype.take = function() {
      var args, i, number, output, tmp;
      number = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      output = [];
      for (i = 1; 1 <= number ? i <= number : i >= number; 1 <= number ? i++ : i--) {
        tmp = this.sequence(args);
        output.push(tmp);
      }
      return output;
    };

    Sequence.prototype.takeWhile = function() {
      var args, currentVal, expression, output;
      expression = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      output = [];
      currentVal = this.sequence(args);
      while (expression(currentVal)) {
        output.push(currentVal);
        currentVal = this.sequence(args);
      }
      return output;
    };

    return Sequence;

  })();

}).call(this);
