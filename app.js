//Exercitiul 01------------
function square(num) {
    return num * num;
}

console.log(square(6))

//Sau...

// const numbers = [1,2,3,4,5,6,7] 

// const square = numbers.map(num => num * num);

// console.log(square)

// Exercitiul 02------------

// function getRandom(min, max) {
//     return Math.floor(
//         Math.random() * (max - min) + min
//     );
// }

// console.log('Here is a random number between 10 and 1200:',(getRandom(10, 1200)))

// Exercitiul 03----------------
// let letterCount = (a, b) => {
//     let count = 0;
//     let item = a.toLowerCase();
//     for (let element of item) {
//       if (element === b) {
//         count++;
//       }
//     }
//     return count;
//   }
  
//   let string = "IMI PLACE PROGRAMAREA";
//   console.log(letterCount(string, 'a'));

  // Sau...

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// console.log(char_count('OOOOOOO CE Imi Mai Place Programarea', 'O'));

// Exercitiul 04---------------------

// const suma = (...arr) => arr.filter(Number).reduce((a, c) => a + c, 0);
// console.log(suma(1, 2, 3, 4, 5, 6)); 


//SAU...

// const sum = (...arr) => {return arr.reduce((a, i) => {
//     if (isNaN(i)) return Number(i)
//     return a +  Number(i)
//   }, 0)    
// };

// console.log(
//   sum(1, 2, 3, 4, 5, 6),); 
//   console.log(
//       sum(-10, 15, 100),
//   ); // 105
//   console.log(
//       sum(),
//   ); // 0
//   console.log(
//       sum(1, 'fqwfqwf', {}, [], 3, 4, 2, true, false),
//   ); // 11. true = 1