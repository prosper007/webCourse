console.log("Numbers between -10 and 19");
var num = -10;
while(num <= 19){
	console.log(num);
	num++;
}

console.log("Even Numbers between 10 and 40");
var even = 10;
while(even <= 40){
	console.log(even);
	even += 2;
}

console.log("Odd Numbers between 300 and 333");
var odd = 300;
while(odd <= 333){
	if(odd % 2 === 1){
		console.log(odd);
	}
	odd++;
}

console.log("divisible by 5 and 3 between 5 and 50");
var divisible = 5;
while(divisible <= 50){
	if(divisible % 5 === 0 && divisible % 3 === 0){
		console.log(divisible);
	}
	divisible++;
}