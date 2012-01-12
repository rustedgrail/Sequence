Sequence = require("./Sequence.coffee").Sequence

describe 'an infinite sequence', ->
  beforeEach ->
    @seq = new Sequence( ->
      @val ?= 1
      @val++
    )

  it 'should be instantiated', ->
    expect(@seq).toBeTruthy()

  it 'has a take function', ->
    first = @seq.take(1)
    expect(first).toEqual([1])

  it 'can pass arguments to take', ->
    seq = new Sequence( (x) -> x[0] )
    expect(seq.take(1, 4)).toEqual [4]

  it 'checks that sequence is a function', ->
    expect(-> new Sequence("HAHA NOPE!")).toThrow("Sequence must be a function")

  it 'returns a different value', ->
    expect(@seq.take(1)).toEqual [1]
    expect(@seq.take(1)).toEqual [2]

  it 'has a take while function', ->
    expression = (val) -> val < 3
    expect(@seq.takeWhile(expression)).toEqual [1, 2]
