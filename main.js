// 1) اطبع الأرقام من 1 إلى 10
// اكتب برنامج يطبع الأرقام من 1 إلى 10 باستخدام for loop.

// function tenNumber() {
//   let num = [];
//   for (let i = 1; i <= 10; i++) {
//     num.push(i);
//   }
//   return num;
// }
// console.log(tenNumber());

// ############################################################

//2) اجمع رقمين
// اطلب من المستخدم رقمين واطبع مجموعهم.

// function sumNumber(){
// let numOne=parseInt(prompt("Enter Number One"));
// let numTwo=parseInt(prompt("Enter Number Two"));
// let sumNumber=numOne + numTwo
// return console.log(sumNumber);

// }
// sumNumber();
// ############################################################

// 3) معرفة الرقم زوجي أم فردي
// اكتب دالة تستقبل رقم وترجع:
// "Even" لو زوجي
// "Odd" لو فردي

// function evenOrOdd(num) {
//   if (num % 2===0) {
//     console.log("num is Even", num);
//   } else {
//     console.log("num is odd", num);
//   }
// }
// evenOrOdd(1);

// ########################################
// 4) أكبر رقم في array
// function greaterArray() {
//   let nums = [2, 8, 5, 1, 9];
// let maxNum=Math.max(...nums)
// console.log(maxNum);

// }
// greaterArray();
// ########################################
// 5) عكس نص (Reverse String)
// اكتب دالة تستقبل string وترجعه بالعكس:
// function reverseString(text) {
//     return console.log(text.split("").reverse().join(" "));
// }
// reverseString("hello");

// ########################################
function counterletter(text, letter) {
  let count = 0;
  let letters = text.split("");
  letters.forEach((e) => {
    if (e === letter) {
      count++;
    }
  });
  return console.log(count);
}
counterletter("hello", "l");
