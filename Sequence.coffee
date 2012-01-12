exports.Sequence = class Sequence
  
  constructor: (@sequence) ->
    throw "Sequence must be a function" unless typeof(@sequence) == 'function'

  take: (number, args...) ->
    output = []
    for i in [1..number]
      tmp = @sequence(args)
      output.push tmp
    output

  takeWhile: (expression, args...) ->
    output = []
    currentVal = @sequence(args)
    while(expression(currentVal))
      output.push currentVal
      currentVal = @sequence(args)
    output
