//- Write a function that takes three arguments and returns the sum of the first two arguments split by the third one;
var fun = (a,b,c)=>{
	return (a+b)/c

}

//- Write a function that lists all the numbers from 1 to 1000;
var list = ()=>{
 for (var i =1; i<=1000; i++){
 	console.log(i)
 }
}

//- Write a function that takes an array of numbers as an argument and returns all the numbers divisible by 3;

var div = (array) =>{
	for (var i =0; i<array.length ; i++){
		array[i] = (array[i]/3).toFixed(2)
	}
	return array
}

//- Write a function that lists the numbers from 1000 to 1 using For loop

var list2 = ()=>{
 for (var i =1000; i>=1; i--){
 	console.log(i)
 }
}