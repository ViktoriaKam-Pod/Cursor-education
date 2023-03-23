const students = [
    'Олександр',
    'Ігор',
    'Олена',
    'Іра',
    'Олексій',
    'Світлана',
];
const themes = [
    'Диференційне рівняння',
    'Теорія автоматів',
    'Алгоритми і структури даних',
];
const marks = [4,5,5,3,4,5];

/*1 Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.
У вас повинен вийти вкладений масив з парами студентів:
[["Олександр", "Олена"], [..], [...]];*/

const stud = students.slice(0,1);
const studSlice = students.slice(1,6);
const students1 = studSlice.concat(stud);
console.log(students1)

function getTeams (stud, tm){
    const result = [];
    while (stud.length){
        result.push(stud.splice(0, tm));
    }
    return result;
}
let res1 = getTeams(students1, 2);
console.log(res1)

/*2 Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.
Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]
*/
function getItems (team, item){
  let result = [];
  for ( i=0; i<team.length; i++){
    result.push(team[i].concat(item[i]));
  }
  return result
}
let res2 = getItems(res1, themes);
console.log(res2)

/*3 Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
*/
function getMarks (tm, mark){
  let result = [];
  for ( i=0; i<tm.length; i++){
    result[i] = [tm[i] +' -'+ mark[i]];
  }
  return result
}
const res3 = getMarks(students, marks);
console.log(res3)

/*4 Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт
(тут функція буде не чистою, але не повинна мутувати массив):
[["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]
*/

function evaluateTheProject (team){
  let result = [];
  for (i=0; i<team.length; i++){
    let randomRating = (Math.random()*5).toFixed();
    if (randomRating == 0){
      randomRating +=1;
    }
    result.push(team[i].concat (randomRating))
  }
  return result
}
const res4 = evaluateTheProject(res2)
console.log(res4)
