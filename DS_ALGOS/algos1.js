// /*const numbers = [2,65,34,2,1,7,8];
// numbers.sort(function(a,b){
//     return a-b;
// });
// console.log(numbers);*/

// /*const month = ['jan','feb','march','april','may'];
// for(let key of month)
//   console.log(key);*/

// //  star(5);
// //   function star(limit)
// //   {
// //     for(i=0;i<=limit;i++){
// //       let pattern = "";
// //       for(j=5;j>i;j--){
// //         pattern += "*";
// //       }
// // console.log(pattern);
// //     }
// //   }
  

// // function showCircle(radius){
// //   return{
// //     radius,
// //     draw(){
// //       console.log("draw");
// //     }
// //   };
// //   const circle1 = showCircle(1);
// //   console.log(circle1);

// //   // const circle2 = showCircle(2);
// //   // console.log(circle2);
// // }

// function ShowCircle(radius){
//   this.radius = radius;
//     this.draw = function(){
//       console.log("draw");
//     }
//   }
//   const circle1 = new ShowCircle(5);
//   console.log(circle1);

// function ShowCircle(radius){
//     this.radius = radius;
//       this.draw = function(){
//         console.log("draw");
//       }
//     }

//     ShowCircle.call({}, 1);

// const circle = {
//   radius : 1,
//   draw(){
//     console.log("draw");
//   }
// };
// const circle2 = {};

// for(let key in circle){
//   circle2[key] = circle[key];
// }
// console.log(circle2);


// const circle = {
//   radius : 1,
//   draw(){
//     console.log("draw");
//   }
// };
// // const circle2 = Object.assign({},circle);
// const circle2 = { ...circle};
// console.log(circle2);

// const a = [1,2,3,4,5];
// const b = [6,7,8,9,10];

// const c = [ ...a, ...b ];
// console.log(c);

// const d = c.slice();
// console.log(d);


// const courses = [{id : 1, name : "Nodejs"},{id : 2, name : "Js"}];
// const course = courses.sort((a,b) => {
//   if(a.name > b.name) return 1;
//   if(a.name < b.name) return -1;
//   return 0;
// });
// console.log(course);


// const numbers = [-3,-2,0,1,2,3,4];
// const num = numbers.filter(function(value){
//   return value >= 0;
// });
// console.log(num);

// const num = [0,-1,-2,1,2,3,4];
// const items = num.map(n => ({item : n})).filter(obj => obj.item > 0);
// console.log(items);

// function sum(...args){
//     console.log(args);
// }
// const num = sum(1,2,3,4,5);
// console.log(num);


// function sum(...num){
//     console.log(num   );
// }
// const num = sum(1,2,3,4,5);
// console.log(num);


// const person = {
//     firstName : "shruthi",
//     lastName : "nallam",
//     get fullName(){
//         return `${person.firstName} ${person.lastName}`; 
//     },
//     set fullName(value){
//      const parts = value.split(" ");
//       this.firstName = parts[0];
//       this.lastName = parts[1];
//     }
// };

//     person.fullName = "Nallam Shruthi";

//     console.log(person);
   


// function twoSum(nums) {
//     var target = 9;
//         var result = {};
//         for(i=0; i<nums.length; i++){
//             if(nums[i]+nums[i+1] === target){
//                 result = nums[i]+nums[i+1];
//                 return result;
//             }
//         }
        
//     };
   
//    console.log(twoSum(2,7,11,15));




// function twoSum(nums,target) {
//     let result = [];
//     for(let i = 0; i< nums.length; i++){
//         for (let j = 1; j< nums.length; j++){
//             if (nums[i] + nums[j] === target) {
//                 result.push(nums[i],nums[j]);
                
//             }
//         }
//     }
//     return result;
// };
//console.log(twoSum([2,11,7,15],9));


function rev(x) {
    x = x + "";
    return x.split("").reverse().join("");
    };
console.log(rev(123));

   





  
