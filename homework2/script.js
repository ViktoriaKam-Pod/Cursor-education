let firstNumber;

while (!Number.isInteger(+firstNumber)||+firstNumber<=0){
    firstNumber = prompt ("Введіть число N")
    
} 

//Парне/не парне
let evenN = Boolean(+firstNumber%2 === 0);

console.log(+firstNumber)
console.log('Число N парне?' + ' - ' + evenN)

let secondNumber;

while (!Number.isInteger(+secondNumber)||+firstNumber>+secondNumber){
    secondNumber = prompt ('Введіть число M (число має бути більше N)');
    }
//Парне/не парне
let evenM = Boolean(+secondNumber%2 === 0);
console.log(+secondNumber)
console.log('Число M парне?' + ' - ' + evenM)

let sum1 = confirm('Пропускати парні числа?')
if (sum1 == true){
    sum1 = Number(firstNumber)+Number(secondNumber);
    let result = 0;
    for (let i=1; i<=sum1; i+=2){
        result +=i;
        console.log('парні числа ' + i)
    }
    alert ('Сума чисел становить ' + result)
    document.writeln(`Сума чисел становить : ${result} <br\>`)
} else {
    sum1 = Number(firstNumber)+Number(secondNumber);
    let result = 0;
    for (let i=1; i<=sum1; i++){
        result +=i;
        console.log('всі числа ' + i)
    }
    alert ('Сума чисел становить ' + result)
    document.writeln(`Сума чисел становить : ${result} <br\>`)
} 
document.writeln(`Пропускати парні числа : ${Boolean(sum1)} <br\>
Введено число N : ${+firstNumber} <br\>
Введено число M : ${+secondNumber} <br\>
`)


