// tarea7.js
function Car(make, model, year, color, doors, mileage, engineType) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.doors = doors;
  this.mileage = mileage;
  this.engineType = engineType;
}

const car = new Car(
  process.argv[2],
  process.argv[3],
  parseInt(process.argv[4]),
  process.argv[5],
  parseInt(process.argv[6]),
  parseInt(process.argv[7]),
  process.argv[8]
);
console.log(car);