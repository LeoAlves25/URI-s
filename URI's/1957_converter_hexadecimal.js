var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){ return lines.shift()}

var numero=parseInt(prompt());
var hexNumero=numero.toString(16)

console.log(hexNumero.toUpperCase());