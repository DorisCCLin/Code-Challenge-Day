// - Write a function that takes an array of names and returns a string of all these names ex. ['john', 'george', 'jim', 'dan'] = "john, george, jim, dan"

var string = ''
var str = (array) =>{
	for (var i = 0; i < array.length; i++){
		if(i === array.length -1){
			string += array[i]
		}else
		string += array[i]+ ', '
	}
	console.log(string)
	
}

//- Write a function that convers  temperatures in degrees from Fahrenheit to Celsius; Example: (50°F - 32) x .5556 = 10°C

var convertor = (Fah) =>{
	return parseInt((Fah-32)*.5556) 
}

//- write a function that takes an array of numbers and adds them together ex: [1,2,3,4,5] -> return 15

var adding=(array) =>{
	var num = 0
	for(var i = 0; i < array.length; i++){
		num+= array[i]
	} 
	return num
}

//- access the array that contains the string "Palindrome" and reverse it so it prints "emordnilaP"

var obj = {
	anotherObj: {
	name: 'Whatever',
     array: [{
            constant:[["I"],["think"]],
            multi: [['Palindrome'], ["is"], ['fun']]
    }]
}
}

console.log(obj.anotherObj.array[0].multi[0][0].split('').reverse().join(''))





