function evenOrOdd(n) {
	switch (true) {
		case n < 0:
			return 'NEGATIVE';
		case n === 0:
			return 'ZERO';
		case n % 2 === 0:
			return 'EVEN';
		case n % 2 === 1:
			return 'ODD';
		default:
			return false;
	}
}

module.exports = evenOrOdd;