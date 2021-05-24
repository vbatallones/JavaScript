const objNullish = (x) => {
	const obj = {
		a: 'Teeth',
		b: 'Mouth',
		c: 'Arms',
	};
	let result = obj[x.toLowerCase()] ?? 'Not found';
	return result;
};

console.log(objNullish('a'));

