// Import stylesheets
import './style.css';

/**
* Moyarich (moyarich.com)
* 
*
* Get average age of actors 
* 
* There are Multiple ways to solve this problem
* 
* To get the average, we have to sum up all the numbers and then divide by the number of values
*
*/

//------------------------------------------
ANSWER: 60.6
//------------------------------------------

const actors = [
  { name: "Halle Berry", age: 55, numOscars: 1 },
  { name: "Morgan Freeman", age: 81, numOscars: 1 },
  { name: "Denzel Washington", age: 64, numOscars: 2 },
  { name: "Will Smith", age: 50, numOscars: 0 },
  { name: "Viola Davis", age: 53, numOscars: 1 }
];



/**
 * Solve using for loop 
 */

const countActors = actors.length;
let total = 0;
for (let i = 0; i < countActors; i++) {
  let age = actors[i].age;
  total += age;
}
const forLoop = (total / countActors);
console.log(forLoop);



/**
 * Solve using reduce 1
 */


let totalAge = 0;
let arrReduce = actors.reduce(
  function (totalAge, actor) {
    return totalAge + actor.age;
  },
  0//initial value the sum is 0
) / actors.length

console.log(arrReduce);



/**
 * Solve using reduce 2
 */
const arrReduceArrayFunct = actors.reduce((totalAge, actor) => (totalAge + actor.age), 0) / actors.length;
console.log(arrReduceArrayFunct);

/**
 * Solve using reduce 3
 */
const average = list => list.reduce(((prev, curr) => prev + curr.age), 0) / list.length;
console.log(average(actors));


/**
 * Solve using Array.prototype.forEach()
 */
let count = 0;
let sum = 0;
let avg = 0;

actors.forEach(function (n) {
  sum += n.age;
  avg = sum / actors.length;
});

console.log(avg);


/**
 * Map will find average of each number, Reduce will sum them up.
 */

var avgMapReduce = actors.map((c, i, arr) => c.age / arr.length).reduce((p, c) => p + c, 0);
console.log(avgMapReduce);
