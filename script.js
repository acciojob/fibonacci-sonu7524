function fibonacci(num) {
	let a = 0;
	let b = 1;
	let idx = 2;
	while(idx!= num){
		sum = a+b;
		a = b;
		b = sum;
		idx++;
	}
	return sum;
}

console.log(fibonacci(5));
module.exports = fibonacci;
