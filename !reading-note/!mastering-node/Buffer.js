
var hello = new Buffer('Hello');
console.log(hello);
// => <Buffer 48 65 6c 6c 6f>
console.log(hello.toString());
// => "Hello"

var buf = new Buffer('a��|');
console.log(buf.toString());
// => a��|
var buf = new Buffer('a��|', 'ascii');
console.log(buf.toString());
// => &
