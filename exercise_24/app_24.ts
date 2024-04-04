let car: string = "subaru";
let age: number = 25;
let numbers: number[] = [1, 2, 3, 4];

//**String Test**

// Test 1: Equality (True)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True(case-insensitive)

// Test 2: Static Equality (False)
console.log("Is car === 'subaru'? I predict True.");
console.log(car === "Subaru"); // False (case-insensitive) 

//Test 3 : Inequality (True)
console.log("Is car != 'Toyota'? I predict True.");
console.log(car != 'subaru'); //True

//Test 4 : Inequality (False)
console.log("Is car != 'Toyota'? I predict True.");
console.log(car != 'subaru'); // False (case-insensitive) 


//**Lowercase Function Tests**

//Test 5 : Lowercase conversion (True)
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru'); //True (converted to lowercase)


//Test 6 : Lowercase conversion (False)
console.log("Is car === car.toLowerCase()? I predict False.");
console.log(car === car.toLowerCase()); //True (original value remains uppercase)

//** Numerical Tests**

//Tests 7: Equality (True)
console.log("Is age == 25? I predict True.");
console.log(age == 25); // True

//Tests 8: InEquality (False)
console.log("Is age != 30? I predict True.");
console.log(age != 30); // True