class Calculator{
    constructor(x, y){
        this.x = x
        this.y = y
    }
    showresult(){
        console.log(`The result is ${this.x+this.y}`)
    }

}

class Sc_Calculator extends Calculator{
    constructor(x, y, factor){
        super(x,y)
        this.factor = factor
    }

    showresult(){
        return this.x + this.y
    }
}
class Log_Calculator extends Calculator{
    constructor(x, y){
        super(x,y)
        
    }

    showresult(){
        return (this.x + this.y)
    }
}
class Trig_Calculator extends Calculator{
    constructor(x, y){
        super(x,y)
        
    }

    showresult(){
        return (this.x + this.y)
    }
}

//polymorphic function
function cal_result(Calculator){

    console.log(`The final result is ${Calculator.showresult()}`)

}

const s_cal = new Sc_Calculator(1000,1000)
const l_cal = new Log_Calculator(300, 300)
const t_cal = new Trig_Calculator(500, 500)

// Sc_Calculator s_cal = new ....  JAVA

cal_result(s_cal)
cal_result(l_cal)
cal_result(t_cal)
