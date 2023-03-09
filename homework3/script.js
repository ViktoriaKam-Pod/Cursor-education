//Функція 1
function changeName(name){
        let newName = name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase();
        return newName
    }
const userName = changeName('viKToRiIa');
console.log(userName)

  //Функція 2
function calculaTax (salary){
        let taxPercent1 = salary * 18 / 100;
        let taxPercent2 = salary * 1.5 / 100;
        let tax = taxPercent1+taxPercent2;
        const fixSalary = salary - tax;
        return fixSalary
    
    }
let ourSalary = calculaTax(1000);
console.log(ourSalary)

  //Функція 3

const getRandomNumber = function(a,b){
        const random = Math.round(Math.random() * (b-a)+a);
        return random
    }
const number = getRandomNumber(1, 10);
console.log(number)

//Функція 4
function deleteLetters(lett, str){
        let letters = str.replaceAll(lett, '');
        return letters
    }
let text = deleteLetters('a', 'blablabla');
console.log(text)

  //Функція 5
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

//Функція 6
