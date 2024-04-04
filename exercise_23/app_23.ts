//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = "subaru";
//Test 1 Equality comparision (True)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); //True

//Test 2 strict comparision (True)
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); //True


//Test 3 IbEquality comparision (False)
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); //False

//Test 4 strict comparision (False)
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); //False

//Test 5 less than comparision (False)
console.log("Is car < 'subaru'? I predict False.");
console.log(car < 'subaru'); // false (lexicographic comparision)

//Test 6 greater than comparision (False)
console.log("Is car > 'subaru'? I predict False.");
console.log(car > 'subaru'); // false (lexicographic comparision)

//Test 7 less than or equal comparision (true)
console.log("Is car <= 'subaru'? I predict true.");
console.log(car <= 'subaru'); // true

//Test 7 less than or equal comparision (true)
console.log("Is car <= 'subaru'? I predict true.");
console.log(car <= 'subaru'); // true (non-empty string is truthy)
