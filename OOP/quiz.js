class Car {
    constructor(name, year, color) {
      this.name = name;
      this.year = year;
      this.color = color;
    }

    drive_power(){

        if (this.name === 'Audi A5')
        {
            console.log(`${this.name} ${this.color} ` + ' SUPER AUDI DRIVE')
        }
        else if (this.name === 'BMW S2')
        {
            console.log(`${this.name} ${this.color} ` + ' SPORTS for all DRIVE')

        }
        else if (this.name === 'Honda')
        {
            console.log(`${this.name} ${this.color} ` + ' QUALITY FOR YOU')

        }
        
    
    }
  }


const mycar = new Car('Audi A5', 2021, 'blue')
const mycar1 = new Car('BMW S2', 2023, 'red')
const mycar2 = new Car('Honda', 2023, 'grey')

console.log(mycar.name, mycar.year, mycar.color)
console.log(mycar1.name, mycar1.year, mycar1.color)

mycar.drive_power()
mycar1.drive_power()
mycar2.drive_power()