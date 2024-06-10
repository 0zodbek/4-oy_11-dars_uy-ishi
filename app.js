// ******************* string tipiga doir masalalar *******************

// ***************** 1-masala *****************

// let a = "salom";
// console.log(a.at(-1));


// ***************** 2-masala *****************

// let a = 'salomm';
// let s ;

// if(a.length % 2 == 0){
// a.forEach(function(value,index) {
//    return s = index(a.length/2) 
// });

// }
// console.log(s);


// ***************** 3-masala *****************

// let a = 'salom';
// console.log(a.charCodeAt(0));


// ***************** 4-masala *****************

// let a = 'salomlar';
// let b ;
// if(a.length > 10){
// b = 'uzoq string'
// }else{
// b = 'qisqa string'
// }
// console.log(b);


// ***************** 5-masala *****************

// let a = 'SALOM';
// for(let i = 0 ; i < a.length ; i++){
// // console.log(a[i]);
// console.log(a.charCodeAt(i));
// }

// ********  task 2 ***********

// ***************** 1-masala *****************

// let a = 'salom' ;
// let b = a.slice(0,3);
// console.log(b);


// ***************** 2-masala *****************

// let a = 'qaxramonim' ;
// let b = a.slice(a.length - 5,);
// console.log(b);


// ***************** 3-masala *****************

// let a = 'salom' ;
// let b ;
// if(a % 2 == 1){
// b = a.substring(Mathceila.length / 2 )
// }else{
// b = a.substring(a.length / 2 - 1, a.length / 2 + 1)
// }
// console.log(b);




// let ark = 'code';
// let b = ark.padStart(10,'0')
// console.log(b);

// ***************** 4-masala *****************

// let a = 'javascript';
// let b = a.substring(5,5+3);
// console.log(b);


// ***************** 5-masala *****************

// let a = 'javascript vs php';
// let b = a.substring(0,10);
// console.log(b);


// ***************** 6-masala *****************

// let a = 'javascript vs php';
// let b = a.slice(a.length - 3 );
// console.log(b);


// ***************** 7-masala *****************

// let a = 'Assalom Alekum akahonlar' ;
// let b = a.substring(2);
// console.log(b);

// ********** string toUpperCase toLowerCase concat trim padStart trimEnd va padEnd *********


// ***************** 1-masala *****************

// let a = 'bugun darsda';
// let b = a.toUpperCase();
// console.log(b);


// ***************** 2-masala *****************

// let a = "DARSNI BOZOR QILIB YUBORMALARING";
// let b = a.toLowerCase();
// console.log(b);


// ***************** 3-masala *****************

// let a = 'salom ';
// let b = 'akahonlar';
// let c = a.concat(b);
// console.log(c);


// ***************** 4-masala *****************

// let a = '       salom           ';
// let b = a.trim();
// console.log(b);
 

// ***************** 5-masala *****************

// let a = 'salom';
// let b = a.padStart(10,'8');
// console.log(b);


// ***************** 6-masala *****************

// let a = 'salom';
// let b = a.padEnd(10,'*');
// console.log(b);


// ***************** 7-masala *****************

// let a = '            salom                ';
// let b = a.trimEnd();
// console.log(b);


// ***************** 8-masala *****************

// let a = '            salom                ';
// let b = a.trim();
// console.log(b);


// ***************** 9-masala *****************Berilgan stringning boshiga ma'lum miqdorda nollar qo'shib uzunligini ma'lum qiymatga yetkazadigan `padStringWithZerosStart(str, maxLength)` funksiyasini yozing (`padStart` metodidan foydalaning)

// let a = 'salom';
// let b = a.padStart(10,'*');
// console.log(b);


// ***************** 10-masala *****************

// let a = 'salom';
// let b = a.padEnd(10,'*');
// console.log(b);


// ************  Stringlarda `repeat`, `replace`, `replaceAll`, va `split`   *********************


// ***************** 1-masala *****************

// let a = 'salom ';
// let b = a.repeat(3);
// console.log(b);


// ***************** 2-masala *****************

// let a = 'ustoz , apple , olma , barg ';
// let b = a.replace('apple' , 'orange');
// console.log(b);


// ***************** 3-masala *****************

// let a = 'salom';
// let b = a.replace('a','A');
// console.log(b);


// ***************** 4-masala *****************

// let a = 'dog , cat , dog , cat , cat ';
// let b = a.replaceAll('cat','dog');
// console.log(b);


// ***************** 5-masala *****************

// let a = 'elyorbek endi dars boshladi';
// let b = a.replaceAll('e','E');
// console.log(b);


// ***************** 6-masala *****************

//   let a = "Hello World";
//   let b = a.split(" ");
//   console.log(b);


// ***************** 7-masala *****************

// let a = 'salom akalar';
// let b = a.split(' ' ,);
// console.log(b);


// ***************** 8-masala *****************

// let a = 'salom akalar';
// let b = a.split('');
// console.log(b);


// ***************** 9-masala *****************

// let a = 'salom';
// let b = a.split('a');
// console.log(b);


// ***************** 10-masala *****************

let a = 'akaxonlar';
let b = a.replaceAll('a','*');
let c = b.repeat(3);
let f = c.split( )
console.log(f);



// *************** Massiv va stringlar *****************


// ***************** 1-masala *****************

// let a = '         salom akalar     ';
// let b = a.trim();
// let c = b.toUpperCase();
// let d = c.split('',);
// let f = d.toString();
// console.log(f);


// ***************** 2-masala *****************


// ***************** 3-masala *****************
// ***************** 4-masala *****************
// ***************** 5-masala *****************
// ***************** 6-masala *****************
 
// ***************** 8-masala *****************
// ***************** 9-masala *****************

// let sum = 0 ;
// let a = ['apple','banana','ananas'];
// for(let i = 0 ; i < a.length ; i++){
//   sum += a[i].length;
 
// }
// let b = sum.toString();

// console.log(b);


// ***************** 10-masala *****************

// ********** Stringlarda `indexOf`, `search`, `includes`, va `startsWith` **********


// ***************** 1-masala *****************

// let a = 'apple';
// let b = a.indexOf('a');
// console.log(b);


// ***************** 2-masala *****************

// let a = 'salom @gmail.com';
// let b = a.indexOf('@');
// console.log(b);


// ***************** 3-masala *****************

// let a = 'salom akalar banana bormi dokanda';
// let b = a.search('banana');
// console.log(b);


// ***************** 4-masala *****************

// function searchForDigit(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (!isNaN(str[i]) && str[i] !== ' ') {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(searchForDigit("Menda 3 ta olma bor"));
// console.log(searchForDigit("Menda uchta ta olma bor"));


// ***************** 5-masala *****************


// ***************** 6-masala *****************
// ***************** 7-masala *****************
// ***************** 8-masala *****************
// ***************** 9-masala *****************
// ***************** 10-masala *****************