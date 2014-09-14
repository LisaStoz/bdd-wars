// Let's write application code here
function greet(name){
  return "Hello " + name[0].toUpperCase() + name.substr(1).toLowerCase() + '!';
}

function neutralise(sentence){
  return sentence
          .replace(/a/g, '')
          .replace(/e/g, '')
          .replace(/i/g, '')
          .replace(/o/g, '')
          .replace(/u/g, '')
          .replace(/y/g, '')
          .replace(/A/g, '')
          .replace(/E/g, '')
          .replace(/I/g, '')
          .replace(/O/g, '')
          .replace(/U/g, '')
          .replace(/Y/g, '');
}


function cookingTime(eggs) {
  var result = 0;

  if (eggs % 8 > 0) result = result + 5;

  result = result + (eggs - (eggs % 8)) / 8 * 5;

  return result;
}

function getMissingElement(elements) {
  for (var i=0; i<9; i++) {
    if (elements.indexOf(i) === -1) return i;
  }
}

function likes(names) {
  if (names.length === 0) return "no one likes this";
  if (names.length === 1) return names[0] + " likes this";
  if (names.length === 2) return names[0] + " and " + names[1] + " like this";
  if (names.length === 3) return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  if (names.length > 3) return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
}
