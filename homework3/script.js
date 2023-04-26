//Функція 1 яка форматує ім'я, роблячи першу букву великою.
function changeName(name){
        let newName = name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase();
        return newName
    }
console.log(changeName('viKToRiIa'));


  //Функція 2 яка вираховує суму, що залишається після оплати податку від зарабітньої плати.
function calculaTax (salary){
        let taxPercent1 = salary * 18 / 100;
        let taxPercent2 = salary * 1.5 / 100;
        let tax = taxPercent1+taxPercent2;
        const fixSalary = salary - tax;
        return fixSalary
    }
    export let calculate = calculaTax(1000);
console.log(calculate)

  //Функція 3 яка повертає випадкове ціле число в діапазоні від а до b.

const getRandomNumber = function(a,b){
        const random = Math.round(Math.random() * (b-a)+a);
        return random
    }
console.log(getRandomNumber(1, 10))

//Функція 4 функцію, яка видаляє всі букви з речення.
function deleteLetters(lett, str){
        let letters = str.replaceAll(lett, '');
        return letters
    }
console.log(deleteLetters('a', 'blablabla'))

  //Функція 5 яка рахує скільки разів певна буква повторюється в слові.
function countLetter(letter,str) {
    let letterCount = 0;
    for (let lett = 0; lett < str.length; lett++) 
    {
        if (str.toLowerCase().charAt(lett) == letter) {
            letterCount += 1;
        }
    }
    return letterCount;
}
console.log(countLetter('а','Асталавіста' ));

/*Функція 6 Створіть функцію генерації випадкового паролю (тільки числа),
довжина встановлюється користувачем або по замовчуванню = 8 символам.
*/
function getRandomPassword(number){
    if(!number){
        number = 8;
    }
    let pass = Math.pow(10, number)
    let password= Math.random();
    if (password<=0.09)
        password = password+0.1;
    let result = Math.round(password*pass);
        return result;
}
console.log(getRandomPassword())

document.writeln(`Функція№1 : ${changeName('viKToRiIa')}; <br\> Функція№2 : ${calculaTax(1000)}; <br\>
Функція№3 : ${getRandomNumber(1, 10)}; <br\> Функція№4 : ${deleteLetters('a', 'blablabla')};<br\>
Функція№5 : ${countLetter('а','Асталавіста' )}; <br\> Функція№6 : ${getRandomPassword()}`)

