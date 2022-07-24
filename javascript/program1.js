testString = 'testing';
for ( i = 0; i <testString.length; i++) {
  letter = testString[i];
  console.log(letter)
}


result  = '';
for( i = 1; i < 11; i ++) {
  result = result + i;
}
console.log(result)
for( j = 0; j < 5; j++){
  console.log('*'.repeat(j))
}

function mathFun() {
  let x = 19;
  if (x === 3) {
    console.log("we have a 3");
  } else if (x === 4) {
    console.log("we have a 4");
  } else {
    console.log("I will return if everything above me is falsey!");
  }
};

mathFun(); // => "I will return if everything above me is falsey!"

// this is the test expression
if (3 === 13) {
  // this is the then expression
  // this code will run if the above statement is true
  console.log("this is a three!");
}
else {
  console.log("This is not three it's a mistake!");
}  if (5===5) {
  console.log("This is another case!");
}
// function mathFun() {
//   let x = 2 + 3;

//   if (x === 3) {
//     console.log("we have a 3");
//   } else if (x === 4) {
//     // this code will run if the above statement is true
//     console.log("we have a 4");
//   } else if (x === 5) {
//     // this code will run if the above statement is true
//     console.log("we have a 5");
//   }
// };

// mathFun(); // => "we have a 5"


let testArray = [4, 7, 9];
let finalIndex = testArray.length - 1; // => (3 - 1) = 2
console.log(testArray[finalIndex]);
let wackyArray = [2, 17, "apple", "cat", ["apple"]];

console.log(wackyArray[0]); // => 2
console.log(wackyArray[1]); // => 17
console.log(wackyArray[3]); // => "cat"
console.log(wackyArray[4]); // => ["apple"]
console.log([1, 2, 3] + [4 + [5], 6])

let arr = [1, 2, 3];
arr.push(45);
arr.push(5);
console.log(arr);   // => [1, 2, 3, 4, 5]
arr.pop();
console.log(arr);   // => [1, 2, 3, 4]



function logBetweenStepper(min, max, step){

  for(let i=min;i<=max;i+=step){
    console.log(i);
  }
}

// Examples:
logBetweenStepper(5, 9, 1);



function threeOrSeven(number){
return  (number%3===0)||(number%7===0);
}
console.log(threeOrSeven(3));
console.log(threeOrSeven(8));
console.log(threeOrSeven(7));
console.log(threeOrSeven(21))


function threeOrEight(number){
  if(number%3===0||number%8===0){
    return true;
  } else {
    return false;
  }
}
console.log(threeOrEight(8));
console.log(threeOrEight(4));
console.log(threeOrEight(36));


function combineArrays(array1, array2){
  let newArray = array1.concat(array2);
  return newArray;
}
console.log(combineArrays([1,2],[4,5]));
console.log(combineArrays([7,8,10],[8,3,0]));



function countVowels(string) {
  var count = 0;
  var vowels= ["a", "e", "i", "o", "u"];
  for(var i=0;i<string.length;i++) {
    if(vowels.indexOf(string[i].toLowerCase())>-1){
       count++;

  }
}
return "This string has " + count + " vowels in it.";
}
console.log (countVowels("I love Rwanda with all my heart"));
console.log(countVowels("bootcamp"));
console.log(countVowels("apple"));
console.log(countVowels("pizza"));


function fizzBuzzWhile(max) {
  let i = 0;
  while (i < max) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
    i++;
  }
}


function pigLatinWord (word) {
  let vowels = "iuoae";
  if (vowels.includes (word[0])){
  return word +"yay";
}

}
console.log(pigLatinWord("eat"));
console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(1, 4));

function echo(string) {
  console.log (string.toUpperCase() + " ... " + string + " ... " + string.toLowerCase());
}

let hours=6;

if (hours>5 && hours<12)
  console.log("Good morning!");

 else if (hours>=12 && hours<18)

  console.log("good afternoon!");

  else if (hours>18 &&24);
  console.log("Good evening!");

  function foo(num) {
    return num ** 3;
  }

  console.log(foo(2));

  console.log("'Hallo, world'");


