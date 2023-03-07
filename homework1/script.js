
let appleCost = 15.678;
let lemonCost = 123.965;
let melonCost = 90.2345;
const maxCost = Math.max(appleCost, lemonCost, melonCost);
const minCost =  Math.min(appleCost, lemonCost, melonCost)
console.log(minCost)
console.log(maxCost)


//загальна вартість фруктів заокруглена до меншого цілого
let fruitsCost = Math.floor(appleCost + lemonCost + melonCost);
console.log(fruitsCost)


//заокруглили суму до сотень
const sumFruits = Math.round(fruitsCost/100)*100;
console.log(sumFruits)

/*булеве значення: чи є сума всіх товарів (округлена в меншу
сторону) парним чи непарним числом*/
const sumFruitsEven = Boolean(fruitsCost % 2 == 0);
const sumFruitsOdd = Boolean(fruitsCost % 2 == 1);
console.log(sumFruitsEven)
console.log(sumFruitsOdd)

/*сумa решти, при оплаті всіх товарів (без округлення), якщо
клієнт платить 500 грн.*/
let clientPay = 500;
const rest =  clientPay - fruitsCost;
console.log(rest)

//середнє значення цін, округлене до другого знаку після коми
const averageValue = ((appleCost+lemonCost+melonCost) / 3).toFixed(2);
console.log(averageValue)


// //випадковa знижкa
let discount = Math.random(fruitsCost)*100;
console.log(discount.toFixed(2))

//Знижка у відсотках
const discountPercent = discount*100/fruitsCost;
console.log(Math.round(discountPercent) + '%') 

/*виведена сума до оплати з випадковою знижкою округлена
до 2 знаків після коми.*/
const fruitsCostWithDiscount = (fruitsCost - discount).toFixed(2);
console.log(fruitsCostWithDiscount)

//Чистий прибуток з товару
let cost = (appleCost+lemonCost+melonCost) / 2;
const profit = cost - discount;
console.log (profit.toFixed(2))

document.writeln(`Максимальна вартість заокруглена до меншого : ${minCost}
Максимальна вартість заокруглена до більшого : ${maxCost}
Загальна вартість фруктів заокруглена до меншого цілого : ${fruitsCost} 
Загальна вартість фруктів заокруглена до сотень : ${sumFruits}
Булеве значення: чи є сума всіх товарів (округлена до меншого цілого) парним числом : ${sumFruitsEven}
Булеве значення: чи є сума всіх товарів (округлена до меншого цілого) непарним числом : ${sumFruitsOdd} 
Сумa решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн : ${rest}
Cереднє значення цін, округлене до другого знаку після коми : ${averageValue} 
Випадковa знижкa : ${discount.toFixed(2)} у відсотках : ${Math.round(discountPercent)} %
Сума до оплати з випадковою знижкою округлена до 2 знаків після коми : ${fruitsCostWithDiscount}
Чистий прибуток з товару : ${profit.toFixed(2)} `)
