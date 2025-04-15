// tarea4.js
function Journey(start, end) {
  this.start = start;
  this.end = end;
}

const from = process.argv[2];
const to = process.argv[3];
const trip = new Journey(from, to);
console.log(trip);
