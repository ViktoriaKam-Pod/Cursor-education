let firstNumber = prompt ('Введіть число N');

while (+firstNumber){
if (!Number.isInteger(+firstNumber)){
    alert ('Помилка. Ви ввели не ціле число.')
} break
}
//Парне/не парне
let evenN = Boolean(+firstNumber%2 === 0);

console.log(+firstNumber)
console.log('Число N парне?' + ' - ' + evenN)

let secondNumber = prompt ('Введіть число M');

while (+secondNumber){
    if (!Number.isInteger(+secondNumber)){
        alert ('Помилка. Ви ввели не ціле число.')
    } break
    }
//Парне/не парне
let evenM = Boolean(+secondNumber%2 === 0);
console.log(+secondNumber)
console.log('Число M парне?' + ' - ' + evenM)

let sum = Number(firstNumber)+Number(secondNumber);
let result = 0;
for (let i=2; i<=sum; i+=2){
    result +=i;
    console.log('парні числа ' + i)
}
    console.log('сума парних чисел становить ' + result)
if (!Number.isInteger(sum)){
    alert ('Помилка. Одне з чисел було не ціле.')
} else{
    alert ('Сума парних чисел становить ' + result)
}