//your JS code here. If required.
function getNumbersAfterThreeSeconds() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([1,2,3,4]);
		},3000)
	})
}

getNumbersAfterThreeSeconds().then((numbers) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const oddNumbers = numbers.filter(number => number % 2 === 0);
			document.getElementById('output').textContent = oddNumbers.join(', ');
			resolve(oddNumbers);
		}, 1000);
	})
}).then((evenNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const transformedNumbers = evenNumber.map(number => number * 2);
			document.getElementById('output').textContent = transformedNumbers.join(', ');
			resolve(transformedNumbers);
		}, 2000)
	}) 
})