/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('ball player', 'spain', 'Shaq', 3);
=> "You will be a ball player in spain, and married to Shaq with 3 kids."
*/
function tellFortune(numOfChilds, paerntsName, location, jobTitle) {
  console.log("you will be ", jobTitle, "in", location, "and married to", paerntsName, "with", numOfChilds, "kids")

}
tellFortune(3, "ali", "amman", "developer")

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(poppyAge) {
  poppyAge = poppyAge * 7;
  return console.log("Your dog is ", poppyAge, "years old in dog years");
}
calculateDogAge(5);

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/


/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Jouza")
=> "Hello Jouza"
*/
function greet(name) {
  return "hello " + name
}
console.log(greet("emad"))

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/



/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(num) {
  return num ** 3
}
console.log(cube(5))

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(num1, num2) {
  var multi = num1 * num2
  return multi
}
console.log(multiply(6, 5))

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetAdrivingLicense(age) {
  if (age >= 20) {
      return "Yes you can"
  }
  else {
      var x = 20 - age;
      return "Please comeback after " + x + " years to get one"
  }
}
console.log(canIGetAdrivingLicense(18));

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function samelength(first, second) {
  if (first.length === second.length) {
      return true
  } else {
      return false
  }
}
console.log(samelength("emad", "duhaa"))


/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

function largerNumber(x, y) {
  if (x > y) {
      return x
  } else {
      return y
  }

}
console.log(largerNumber(6, 5))

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

function smallerNumber(x, y, z) {

  var min = x
  if (y < min && y < z) {
      min = y
      return min
  } else if (z < min && z < y) {
      min = z
      return min
  } else {

      return min
  }
}

console.log(smallerNumber(3, 1, 0))

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

function shorterString(one, two, three, fuor, five) {
  var short = one;
  if (two.length < short.length) {
      short = two
      return short

  } else if (three.length < short.length) {
      short = three
      return short

  } else if (fuor.length < short.length) {
      short = fuor
      return short

  } else if (five.length < short.length) {
      short = five
      return short

  } else {
      return short
  }
}
console.log(shorterString("emad", "0", "o", "duhaaa", "obeidat"))

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerString(one, two, three, fuor) {
  var long = one;
  if (two.length > long.length) {
      long = two
      return long

  } else if (three.length > long.length) {
      long = three
      return long

  } else if (fuor.length > long.length) {
      long = fuor
      return long

  } else {
      return long
  }
}
console.log(longerString("duhaahjkhjkhjkaduhaahjkhjkhjka", "0", "o", "duhaahjkhjkhjka"))

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(number) {

  if (number % 2 == 0) {
      return true;
  }
  else {
      return false;
  }
}
console.log(isEven(4));

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(number) {

  if (number % 2 !== 0) {
      return true;
  }
  else {
      return false;
  }
}
console.log(isOdd(4));

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(num) {

  if (num < 0) {
      num = num * -1;
      return num;
  }
  else {
      return num
  }
}
console.log(positive(2));

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Mohammad","Jouza")
=> "Mohammad Jouza"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(firstName, lastName) {
  var fullName = firstName + " " + lastName;
  return fullName;
}

console.log(fullName("Mohamad", "Obeidat"))

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function avareg(x, y, z, a, s) {
  var sum = x + y + z + a + s
  var avg = sum / 5
  return avg


}
console.log(avareg(5, 5, 5, 5, 5))

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber(max) {
  var rand = Math.random() * max;
  return rand
}
console.log(randomNumber(1))

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumber(max, min) {
  return Math.random() * (max - min) + min;
}
console.log(randomBetweenNumber(10, 1))

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversity(mark) {

  if (mark >= 95 && mark <= 100) {
      console.log("A")
  } else if (mark >= 85 && mark <= 94) {
      console.log("B")
  } else if (mark >= 70 && mark <= 84) {
      console.log("C")
  } else if (mark >= 50 && mark <= 69) {
      console.log("D")
  } else if (mark >= 0 && mark <= 49) {
      console.log("F")
  }
}

scoreInUniversity(88)

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
var x = 0
function counter() {
    x++;
    return x;
}
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
restCounter()
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
function restCounter(){
  x = 0;
}


/*


*/


/*


*/


/*


*/


/*


*/




/////////// Advanced part