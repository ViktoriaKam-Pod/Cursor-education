

class Student  {
    constructor(university, fullName, course){
        this.university = university;
        this.fullName = fullName;
        this.course = course;
        this.marks = [5,4,4,5];
    }
    getInfo(){
        let inform = `Студент ${this.course}ого курсу ${this.university}, ${this,this.fullName}`
        console.log(inform)
        return inform
        
    }
    set changeMark(value){
            this.marks.push(value);
    }
    get changeMark(){
        return this.marks;
    }
    getAverageMark(){
        let average = this.marks.reduce((prevValue,item)=>{
            return  prevValue + item;
        })
        console.log(average/this.marks.length);
        return average/this.marks.length;
    }
    dismiss(){
        let mark = this.marks;
        mark = null;
        console.log(mark);
    }
    recover(){
    console.log (this.marks)
    }
}

class BudgetStudent extends Student {
    constructor (university, fullName, course){
    super (university, fullName, course);
    this.budget = "Ви отримали 1400 грн. стипендії"
    setInterval(()=> this.getScholarship(), 30000)
    }

    getScholarship(){
        console.log(this.budget );
        }
}


export let student1 = new Student("Київського національного університету імені Тараса Шевченка", "Тимко Іван Олександрович", "1" );
student1.getInfo();
student1.changeMark = 3;
console.log(student1.changeMark)
student1.getAverageMark();
student1.dismiss();
student1.recover();
let student = new BudgetStudent("Авіаційний університет", "Собко Олег Васильович", "3");

if (student.getAverageMark() >= 4){
    student.getScholarship()
}
