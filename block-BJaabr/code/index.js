// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
    function addOneFirst(num){
      return num + 1;
    }
    addOneFirst();

// - Write a Function Expression

const addNumberSecond = function add (num){
  return num + 1 ;
};
addNumberSecond(3);

// - Write an Arrow Function without curly brackets(if possible)

const addNumberThird = num => num + 1;

// - Write an Arrow Function with curly brackets

const substractOneForth = (numA , numB)=>{
  return numA + numB;
};
 


// - Execute the function

addNumberfirst(77,78);
addNumberSecond(7,89);
addNumberThird(68,98);
addNumberFourth(344,87);


// - Execute the function and store the return value in a variable.
  
function addNumber(numA , numB){
  return numA + numB;
}
addNumber();



// - What is the typeof returnValue

typeof userName
'string'

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration

function substractOneFirst(num){
  return num - 1;
}
substractOneFirst();


// - Write a Function Expression

const substractOneSecond = function sub (num){
  return num - 1 ;
};
substractONeSecond (3);


// - Write an Arrow Function without curly brackets(if possible)

const substractOneThird = num => num - 1;

// - Write an Arrow Function with curly brackets

const substractOneForth = (numA , numB)=>{
  return numA - numB;
};

// - Execute the function

substractOneFirst(466,44)
substractOneSecond(44,32)
substractOneThree(23,45)
substractOneForth(55,43)


// - Execute the function and store the return value in a variable.

function substractOne(numA , numB){
  return numA + numB;
}
substractOne();


// - What is the typeof returnValue

typeof userName
'string'

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration

function sumOne(numOne, numTwo){
  return numOne - numTwo;
}
sum();


// - Write a Function Expression


const sumTwo = function sub (numOne ,numTwo){
  return numOne + numTwo ;
};
sum (3,4);

// - Write an Arrow Function without curly brackets(if possible)

const sumThree = (numA ,numB )=> numA+numB;


// - Write an Arrow Function with curly brackets
 

const sumFour = (numA , numB)=>{
  return numA + numB;
};


// - Execute the function
sumOne(445,788);
sumTwo(12,22);
sumThree(17,87);
sumFour(497,44);



// - Execute the function and store the return value in a variable

function number(numOne,numTwo){
  return numOne + numTwo;
}
let no = number();


// - What is the typeof returnValue
typeof userName
'string'

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration

function squareFirst(num=1){
  return num**2;
}

// - Write a Function Expression

const squareSecond = function  (num =1){
  return num ** 2 ;
};


// - Write an Arrow Function without curly brackets(if possible)

const squareThird = num => num**2;

// - Write an Arrow Function with curly brackets
 
const squareFourth = num => {
  return num**2;
};




// - Execute the function

squareFirst(4);
squareSecond(3);
squareThird(5);
squareFourth(7);



// - Execute the function and store the return value in a variable

function number(num){
  return num**2;
}
let no = number();

// - What is the typeof returnValue
typeof userName
'string'

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration


function isGreaterOne(x,y){
  return x>y;
}



// - Write a Function Expression

const isGreaterTwo = function  (x,y){
  return x>y;
};



// - Write an Arrow Function without curly brackets(if possible)

const isGreaterThree = num => x>y;

// - Write an Arrow Function with curly brackets


  const isGreaterFour = (x,y)=> {
    return x>y;
  };


// - Execute the function

isGreaterOne(33,88)
isGreaterTwo(30,23)
isGreaterThree(88,44)
isGreaterFour(44,12)

// - Execute the function and store the return value in a variable

function isGreater(x,y){
  return x>y;
}
let no = isGreater();

// - What is the typeof returnValue

typeof userName
'string'

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration

function oddNumberOne(num){
  if(num % 2 !== 0){
    return  `${num} is an odd number`
  } else{
    return `${num} is not an odd number`
  }
}


function evenNumberOne(num){
  if(num % 2 == 0){
    return  `${num} is an odd number`
  } else{
    return `${num} is not an odd number`
  }
}

// - Write an anonymous Function Expression

const oddNumberTwo=function (num){
  if(num % 2 !== 0){
    return  `${num} is an odd number`
  } else{
    return `${num} is not an odd number`
  }
}

const evenNumberTwo= function (num){
  if(num % 2 == 0){
    return  `${num} is an even number`
  } else{
    return `${num} is not an even number`
  }
}


// - Write an named Function Expression

function oddNumberThree(num){
  if(num % 2 !== 0){
    return  `${num} is an odd number`
  } else{
    return `${num} is not an odd number`
  }
}


function evenNumberThree(num){
  if(num % 2 == 0){
    return  `${num} is an odd number`
  } else{
    return `${num} is not an odd number` 
  }
}


// - Write an Arrow Function without curly brackets (hint: use ternary operator)
       
const oddNumberFour = num => num % 2!== 0;

const evenNumberFour = num => num % 2== 0;

// - Write an Arrow Function with curly brackets

const oddNumberFive = num => {
  return num % 2!== 0;
};

const evenNumberFive = num => {
  return num % 2 == 0;
};


// - Execute the function

oddNumberOne(78);
oddNumberTwo(53);
oddNumberThree(13);
oddNumberFour(44);
oddNumberFive(89);

evenNumberOne(78);
evenNumbertwo(44);
evenNumberThree(23);
evenNumberFour(34);
evenNumberFive(87);


// - Execute the function and store the return value in a variable

    function oddNumber(num){
      return num % 2!== 0;
    }
    let no = oddNumber();

    function evenNumber(num){
      return num % 2 == 0;
    }
    let no = evenNumber();

// - What is the typeof returnValue
// num%2?even:odd;