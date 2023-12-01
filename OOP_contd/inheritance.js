//Base class   or  Parent class
class Person{
    constructor(name,age,phone){
        this.name  = name
        this.age = age
        this.phone  = phone
    }
    showdata(){
        console.log(this.name , this.age, this.phone)
    }
}

const anyperson = new Person('some name' , 'some age', 'some phone')
anyperson.showdata()

class Emp extends Person{
    constructor(name, age, phone, salary)
    {
        super(name, age, phone)
        this.salary = salary
    }
    show_salary(){
        console.log(`The salary is ${this.salary}`)
    }
}

class Chef extends Person{
    constructor(name, age, phone, hotelname){
        super(name, age, phone)
        this.hotelname = hotelname
    }
    showhotelname(){
        console.log(`The hotel name is ${this.hotelname}`)
    }

}

const emp1 = new Emp('Nitin',33,'2342423424', 60000)
emp1.showdata()
emp1.show_salary()

const mychef  = new Chef('Ranvin brar',45,'88888888888888','Taj Wset End')
mychef.showdata()
mychef.showhotelname()