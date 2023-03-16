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

//1
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

//2

function getItems (team, item){
  let result = [];
  for ( i=0; i<team.length; i++){
    result.push(team[i].concat(item[i]));
  }
  return result
}
let res2 = getItems(res1, themes);
console.log(res2)

//3

function getMarks (tm, mark){
  let result = [];
  for ( i=0; i<tm.length; i++){
    result[i] = [tm[i] +' -'+ mark[i]];
  }
  return result
}
const res3 = getMarks(students, marks);
console.log(res3)

//4


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
