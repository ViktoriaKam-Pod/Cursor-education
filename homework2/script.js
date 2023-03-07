let firstNumber = prompt ('Введіть число N');
//Ціле/не ціле
let n = Number.isInteger(+firstNumber);
if(!Number.isInteger(+firstNumber)){
    alert('Помилка. Ви ввели не ціле число.')
}
//Парне/не парне
let evenN = Boolean(+firstNumber%2 === 0);

console.log(+firstNumber)
console.log('Число N ціле?' + ' - ' + n)
console.log('Число N парне?' + ' - ' + evenN)


let secondNumber = prompt ('Введіть число M');
//Ціле/не ціле
let m = Number.isInteger(+secondNumber);
if(!Number.isInteger(+secondNumber)){
    alert('Помилка. Ви ввели не ціле число.')
}
//Парне/не парне
let evenM = Boolean(+secondNumber%2 === 0);

console.log(+secondNumber)
console.log('Число M ціле?' + ' - ' + m)
console.log('Число M парне?' + ' - ' + evenM)


let sum = Number(firstNumber)+Number(secondNumber);
let result = 0;
for (let i=0; i<=sum; i+=2){
    result +=i;
    console.log(i)
}
    console.log(result)
if (!Number.isInteger(sum)){
    alert ('Помилка. Одне з чисел було не ціле.')
} else{
    alert ('Сума парних чисел становить ' + result)
}