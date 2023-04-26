const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
    }
    }, {
    name: "Victor",
    course: 4,
    subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
    }
    }, {
    name: "Anton",
    course: 2,
    subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
    }
    }];
    //1 функці,  яка повертає список предметів для конкретного студента.
    function getSubjects(student){
        const subject = Object.keys(student.subjects);
        const sub=[];
        for(let subj of subject){
            const upperCaseSubject = subj.substring(0,1).toUpperCase()+subj.substring(1).toLowerCase();
            sub.push(upperCaseSubject)
        }
        return sub
        }
    export let resultWihtSubjects = getSubjects(students[0]);
    console.log(resultWihtSubjects)
    //2 функція, яка поверне середю оцінку(заокруглену до 2знаків після коми)
    //  по усім предметамдля переданого студента
    function getAverageMark(mark){
        const subject = Object.values(mark.subjects);
        let arr =[]
        for(let i=0; i<subject.length; i++ ){
            arr = arr.concat(subject[i])
            }
        let result = 0;
        for (let j=0; j<arr.length; j++ ){
            result = result+arr[j]
            }
        let averageValue = (result/arr.length).toFixed(2)
        return  averageValue
        }
    let averageMark = getAverageMark(students[0])
    console.log(averageMark)   
        //3 функція,яка повертає інформацію загального виду по
        //переданому студенту (знадобиться функція з попереднього завдання).
        //Повинна бути виведена інформація: курс, ім'я, середня оцінка.
    function getStudentInfo(stud){
        let inform = {
            name: stud.name,
            course: stud.course,
            averageMark: getAverageMark(stud),
        }
        return inform
    }
    console.log(getStudentInfo(students[0]))
        //4 функція, яка повертає імена студентів у алфавітному порядку.
    function getStudentsNames(student){
        let names=[];
        for (let i =0; i<student.length; i++){
            names.push(student[i].name)
        }
        return names.sort();
    }
    console.log(getStudentsNames(students))
        //5 функція, яка повертає кращого студента зі списку по показнику середньої оцінки.
    function getBestStudent(student){
        const stud = []
        student.map( student => {
            stud.push(getAverageMark(student))
        } )
        console.log(stud)
        let result = Object.values(student.find(student=>
            (getAverageMark(student) == Math.max(...stud))))
            return result[0]
    } 
    console.log(getBestStudent(students))
        //6 функція, яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх
        // повторень.
    function calculateWordLetters(abc){
        let result = {};
        for (let i=0; i< abc.length; i++){
            let letter = abc[i].toLowerCase();
            if(result[letter]){
                result[letter]++
            } 
            else{
                result[letter] = 1;
            }
        }
        return result
    }
    console.log(calculateWordLetters("тест"))