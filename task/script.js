//                                 TASK 1

for (let int = 1; int <= 10; int++) {
  //using Initialization, Expression and Updation(increment or decrement)
  console.log("5" + " x " + int + " = " + 5 * int);
}

//
//                                 TASK 2

//          ---> METHOD-1

let evenSum = 0;

for (let num = 2; num <= 50; num += 2) {
  evenSum += num;
}

console.log(evenSum); //650

//         ---> METHOD-2

let sumE = 0;

for (let n = 1; n <= 50; n++) {
  if (n % 2 === 0) {
    sumE += n;
  }
}

console.log(sumE); //650

//
//                                TASK 3
//

let parentInit = 2;
let factorsCount, limit, childInit;

while (parentInit <= 20) {
  factorsCount = 0;
  limit = parentInit;
  childInit = 2;

  while (childInit <= limit) {
    if (parentInit % childInit === 0) {
      factorsCount++;
    }
    childInit++;
  }
  if (factorsCount === 1) {
    console.log(parentInit);
  }

  parentInit++;
}

//
//
//                              TASK 4

let oddSum = 0;
let number = 1;

while (number <= 20) {
  if (number % 2 === 1) {
    oddSum += number;
  }
  number++;
}

console.log(oddSum);

//                             TASK 5
//
let a = Number(prompt("Provide the number here!"));
let product = 1;

while (a > 0) {
  product *= a;
  a--;
}

console.log(product);
