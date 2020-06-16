
const name = 'Alan',
sex = 'M',
age = 75,
contribuition = 36,
calculation = age + contribuition;


if (sex === 'M' && calculation >= 95 && contribuition >= 35) {
console.log(name + ', you can get your retirement! ')

} else if (sex === 'F' && calculation >= 85 && contribuition >= 30) {
console.log(name + ', you can get your retirement! ')

} else {
console.log(name + `', you can't retire yet! `)
}