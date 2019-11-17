 /*function fib(num){
 	for(i=0;i<15;i
 		++){
 if(num === 1 || num === 2){
 	return 1;
 }
 return (fib(num-1) + fib(num-2));
 }
}
 console.log(fib());*/


 /*let counter = 0;
 function recur(){
 	if(counter>5){
 		return 'done';
 	}
 	counter++;
 	return recur();
 }
 console.log(recur());*/

 /*function factI(num){
 	if(num === 0){
 		return 1;
 	}
 	var result = num;
 	for(i = num-1; i >= 1; i--){
 	 result *= i;
 	}
 	return result;
 }
   console.log(factI(0));*/

   //const a = "Shruthi";
   function revstr(str){
   	return str === str.split("").reverse().join("");
   }
  console.log(revstr("shruthi"));

/*function revstr(str){
	let reversed = "";
for( char of str ){
	reversed = char + reversed;
}
console.log(reversed);
}
revstr("Shruthi");*/

/*function rev5(str){
	console.log([...str].reduce((acc,char) => char + acc , ""));
}
rev5("shruthi Nallam");*/


 
