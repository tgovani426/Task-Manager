
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
var date = today.toLocaleString("en-US")
// console.log(today.toLocaleString("en-US")); // Saturday, September 17, 2016
console.log(typeof(date));
module.exports = date;