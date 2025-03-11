1

// function currentdate(){
// var dates = new Date();
// document.write(dates)
// }

// currentdate()


//2
// function name(){
//  var firstName =   prompt("Enter Your First Name");
//  var lastName  =  prompt("Enter Your Last Name");

//  document.write("have a Good Day"+ " " + firstName + " " + lastName);

// }
// name();

// 3

// function add(a,b){
 

//     return document.write(a+b)
// }
// add(+prompt("Enter Your Number"),+prompt("Enter Your Number"))


// 4

// function add(a,b,c){
 

//     if(b == "+"){
//        return document.writeln(a + c);
//     }else if(b == "-"){
//         return document.writeln(a - c);
//      } else if(b == "*"){
//         return document.writeln(a * c);
//      }else if(b == "/"){
//         return document.writeln(a / c);
//      }else{
//         document.writeln("Error");
//      }
// }
// add(+prompt("Enter Your Number"),prompt("Enter Your Oprator"),+prompt("Enter Your Number"))


// 5


// function squer(i){
//     for(var i = 1 ; i <= 20; i= i+2){
//         return i
//         }
// }
// document.write(squer(5))


// 6

// function factorial(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   }
//   document.write(factorial(7));



// 7

// function num(a, b){

// for(var i = a; i < b;i++){
//     return document.write(i)
// }
// }

// num(+prompt("Enter Your Number"),+prompt("Enter Your Number"))

// 8


// function factorial(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   }
//   document.write(factorial(7));


// 9
// function area(width,height){
//     return width * height
// }
// document.write("area is" + " " + area(5,10) + "<br>");
// document.write("area is" + " " + area(8,10));




// 10

// function perdrom(a){
//     var newPalindrome = a.split('').reverse().join('');
//   if(a == newPalindrome ){
//     return "Palindrome";
//   }else{
//     return "Not Palindrome";
//   }

// }
// document.write(perdrom(prompt("Enter Your Words")))


// 11

// function capitalizeFirstLetter(a) {
//     var words = a.split(' '); 
//     for (var i = 0; i < words.length; i++) {
 
//       words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
//     }
//     return words.join(' '); 
//   }
  

//   document.write(capitalizeFirstLetter(prompt("Enter Your Words"))); 

// 12

// function findWord(a) {
 
//     var words = a.split(' ');
  
   
//     var longestWord = '';
  
  
//     for (var i = 0; i < words.length; i++) {
//       if (words[i].length > longestWord.length) {
//         longestWord = words[i];
//       }
//     }
  
//     return longestWord;
//   }
  

// document.write(findWord('Web Development Tutorial')); 

//   13

// function findString(string, num){
//  return string + parseInt(num)
// }
// document.write(findString(prompt("Enter string"),+prompt("Enter Your Number")))

// 14