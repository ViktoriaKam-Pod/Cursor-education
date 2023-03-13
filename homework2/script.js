let firstNumber;

while (!Number.isInteger(+firstNumber)||+firstNumber<=0){
    firstNumber = prompt ("Введіть число N")
} 
console.log(+firstNumber)

let secondNumber;
while (!Number.isInteger(+secondNumber)||+firstNumber>+secondNumber){
    secondNumber = prompt ('Введіть число M (число має бути більше N)');
    }
console.log(+secondNumber)

let sum1 = confirm('Пропускати парні числа?')
document.writeln(`Пропускати парні числа : ${Boolean(sum1)} <br\>`)
if (sum1){
    sum1 = Number(firstNumber)+Number(secondNumber);
    let result = 0;
    for (let i=1; i<=sum1; i+=2){
        result +=i;
        console.log('числа, які рахуємо ' + i)
    }
    alert ('Сума чисел становить ' + result)
    document.writeln(`Сума чисел становить : ${result} <br\>`)
    console.log('Результат : ' + result)
} else {
    sum1 = Number(firstNumber)+Number(secondNumber);
    let result = 0;
    for (let i=1; i<=sum1; i++){
        result +=i;
        console.log('всі числа ' + i)
    }
    alert ('Сума чисел становить ' + result)
    document.writeln(`Сума чисел становить : ${result} <br\>`)
    console.log('Результат : ' + result)
} 

document.writeln(`
Введено число N : ${+firstNumber} <br\>
Введено число M : ${+secondNumber} <br\>
`)


