const userName = document.querySelector('#userName')
userName.addEventListener('click', function (event) {
	const Name = prompt('Ваше имя?')
	alert(`У Вас красивые глаза,` + Name)
	alert(`Доброго времени суток`)
})

const age = document.querySelector('#age')
age.addEventListener('click', function (event) {
	const Year = prompt('Введите год Вашего рождения')

	alert('Поздравляем. Вам всего')
	alert(2023 - Year)
})

const len = document.querySelector('#len')
len.addEventListener('click', function (event) {
	const side = prompt('Введите длину стороны квадрата')
	alert(side * 4)
})

const rad = document.querySelector('#rad')
rad.addEventListener('click', function (event) {
	const radius = prompt('Введите радиус окружности')
	alert(Math.PI * Math.pow(radius, 2))
})

const dANDt = document.querySelector('#dANDt')
dANDt.addEventListener('click', function (event) {
	const Dist = prompt('Введите расстояние в КМ')
	const Time = prompt('Введите время в часах')
	alert(Dist / Time + 'km/h')
})

const cuco = document.querySelector('#cuco')
cuco.addEventListener('click', function (event) {
	const kurs = 1.3
	const Dollars = prompt('Укажите сумму в долларах')
	alert((Dollars * kurs).toFixed(2) + 'Lari')
})

const fdc = document.querySelector('#fdc')
fdc.addEventListener('click', function (event) {
	const Vol = prompt('объем флешки')
	const numb = Math.floor((Vol * 102) / 820)
	alert(numb)
})

const aANDp = document.querySelector('#aANDp')
aANDp.addEventListener('click', function (event) {
	const pocket = prompt('сколько у вас денег')
	const choc = prompt('стоимость шоколадки')
	const buyAble = pocket / choc - ((pocket / choc) % 1)
	const left = pocket - buyAble * choc
	alert(`можете приобрести шоколадок: ` + buyAble)
	alert(`остаток суммы (сдача): ` + left)
})

const tdnum = document.querySelector('#tdnum')
tdnum.addEventListener('click', function (event) {
	const number = prompt('введите трёхзначное число')

	number.split('').reverse().join('')

	a = number % 10 // 6
	b = Math.floor((number % 100) / 10) // 5
	c = Math.floor((number % 1000) / 100) // 4

	alert(`${a}${b}${c}`)
})

const eonum = document.querySelector('#eonum')
eonum.addEventListener('click', function (event) {
	const number = prompt('введите число')
	number % 2 == 0 ? alert('Чётное') : alert('Нечётное')
})
