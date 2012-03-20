(function() {
  var Sequence;

  Sequence = require("./Sequence.coffee").Sequence;

  describe('an infinite sequence', function() {
    beforeEach(function() {
      return this.seq = new Sequence(function() {
        var _ref;
        if ((_ref = this.val) == null) this.val = 1;
        return this.val++;
      });
    });
    it('should be instantiated', function() {
      return expect(this.seq).toBeTruthy();
    });
    it('has a take function', function() {
      var first;
      first = this.seq.take(1);
      return expect(first).toEqual([1]);
    });
    it('can pass arguments to take', function() {
      var seq;
      seq = new Sequence(function(x) {
        return x[0];
      });
      return expect(seq.take(1, 4)).toEqual([4]);
    });
    it('checks that sequence is a function', function() {
      return expect(function() {
        return new Sequence("HAHA NOPE!");
      }).toThrow("Sequence must be a function");
    });
    it('returns a different value', function() {
      expect(this.seq.take(1)).toEqual([1]);
      return expect(this.seq.take(1)).toEqual([2]);
    });
    return it('has a take while function', function() {
      var expression;
      expression = function(val) {
        return val < 3;
      };
      return expect(this.seq.takeWhile(expression)).toEqual([1, 2]);
    });
  });

}).call(this);
