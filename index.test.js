const evenOrOdd = require('./index');

test('Функция должна вернуть значение', () => {
	const type = typeof evenOrOdd(15);

	expect(type).toBeDefined();
});

test('Функция должна вернуть строку', () => {
	const type = typeof evenOrOdd(15);

	expect(type).toBe('string');
});

test('Тест. n: 15', () => {
	const res = evenOrOdd(15);

	expect(res).toBe('ODD');
});

test('Тест. n: 22', () => {
	const res = evenOrOdd(22);

	expect(res).toBe('EVEN');
});

test('Тест. n: 0', () => {
	const res = evenOrOdd(0);

	expect(res).toBe('ZERO');
});

test('Тест. n: -13', () => {
	const res = evenOrOdd(-71);

	expect(res).toBe('NEGATIVE');
});

test('Тест. n: 112', () => {
	const res = evenOrOdd(14);

	expect(res).toBe('EVEN');
});