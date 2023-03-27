

class Student  {
    constructor(university, fullName, course){
        this.university = university;
        this.fullName = fullName;
        this.course = course;
        this.marks = [5,4,4,5];
    }
    getInfo(info){
        console.log(`${info}Студент ${this.course}ого курсу ${this.university}, ${this,this.fullName}`)
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
let student1 = new Student("Київського національного університету імені Тараса Шевченка", "Тимко Іван Олександрович", "1" );
let student2 = new Student("Національного авіаційного університету", "Степовий Олег Дмитрович", "2");
let student3 = new Student("Львівського національного університету імені Івана Франка", "Токар Василь Миколайович", "3")
student1.getInfo("1. ");
student2.getInfo("2. ");
student3.getInfo("3. ");
student1.changeMark = 3;
console.log(student1.changeMark)
student1.getAverageMark();
student1.dismiss();
student1.recover();
student1.changeMark = 4;
console.log(student1.changeMark);
