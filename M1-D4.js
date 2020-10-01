/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/

const area = (l1, l2) => l1 * l2;

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

const crazySum = (x, y) => {
  if (x === y) {
    return (x + y) * 3;
  }
};

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

const crazyDiff = (x) =>
  x > 19
    ? Math.abs(x - 19) * 3
    : Math.abs(x - 19);

/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

const boundary = (n) =>
  (n >= 20 && n <= 100) || n === 400
    ? true
    : false;

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

const strivify = (s) => {
  const firstSixChars = s.splice(0, 6);

  if (firstSixChars === "Strive") {
    return s;
  } else {
    return `Strive${s}`;
  }
};

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = (num) => {
  if (num % 3 == 0) {
    return "Multiple of 3";
  } else if (num % 7 == 0) {
    return "Multiple of 7";
  }
};

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

const reverseString = (string) =>
  string.split("").reverse().join("");

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

const upperFirst = (str) => {
  const splitted = str.split(" ");

  splitted.forEach((word, i) => {
    splitted[i] =
      word.charAt(0).toUpperCase() +
      word.slice(1);
  });

  return splitted.join(" ");
};

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = (str) =>
  str.slice(1, str.length - 1);

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

const giveMeRandom = (n) => {
  const arr = [];

  for (let i = 0; i < n; i++) {
    const randomNum = Math.floor(
      Math.random() * 11
    );
    arr.push(randomNum);
  }

  return arr;
};

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
