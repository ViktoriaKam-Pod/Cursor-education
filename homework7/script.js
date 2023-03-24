const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

/* 1 функція, яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна
викликатись через call та працювати з даними через this */
function getMyTaxes(salary){
    let tax = salary*this.tax
        console.log(tax + " - myTaxes");
}
getMyTaxes.call(ukraine, 2000)
/* 2  функція, яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax *
middleSalary). Функція повинна викликатись через call та працювати з даними через this
*/
function getMiddleTaxes(){
console.log((this.middleSalary * this.tax) + " - middleTaxes")
}
getMiddleTaxes.call(ukraine)
/*3 функція, яка  рахує, скільки всього податків платять IT-спеціалісти у кожній країні.
*/
function getTotalTaxes(){
let totalTaxes = this.tax*this.middleSalary*this.vacancies;
console.log(totalTaxes + ' -totalTaxes')
}
getTotalTaxes.call(ukraine)
/* 4 функція, яка  пише в консоль об'єкт
виду: { salary: number, taxes: number, profit: number } кожні 10 секунд.
Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes –
розраховується в залежності від вибраної країни та значення salary.
profit = salary - taxes;
для виводу в консоль кожні 10 секунд використайте setInterval
*/

function getMySalary(){
    let salary = getRandom(1500,2000);
    let taxes = salary*ukraine.tax;
    let mySalary = {
        salary: salary,
        taxes: taxes,
        profit: salary-taxes,
        }
        console.log(mySalary)
        return mySalary
    }
    getMySalary.call(ukraine)

let timerId = setInterval(getMySalary, 10000);

function getRandom ( min, max){
    let random = Math.round (Math.random() * (max-min)+min)
    return random
}

