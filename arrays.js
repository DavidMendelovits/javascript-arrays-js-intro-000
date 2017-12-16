var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray() {
  var array = [1]
  return ['foo', ...array]
}

function destructivelyAddElementToBeginningOfArray(array) {
    array.unshift('foo');
    return array
}

function addElementToEndOfArray() {
  var array = [1]
  return [...array, 'foo']
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push('foo')
  return array
}

function accessElementInArray([1, 2, 3]) {
  return array[2]
}