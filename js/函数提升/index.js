// function getFoo() {
//     foo();
  
//     var foo = function() {
//       console.log(1);
//     }
  
//     foo();
  
//     function foo() {
//       console.log(2);
//     }
  
//     foo();
// }
// getFoo();


// //   以上代码会变成

// function getFoo() {
//     var foo;

//     function foo() {
//         console.log(2);
//     }

//     foo();

//     foo = function() {
//         console.log(1);
//     }

//     foo();

//     foo();

// }

// getFoo();

/**
 * =============================================================
 */

 var a = 10;
 var a = 100;
 
 console.log(a);
 
 function a() {
   console.log('a');
 }
 function a() {
   console.log('aa');
 }
 
//  a();
  