class Account {
    #pin
    #bal
    constructor(accno, name, pin, balance) {
        this.accno = accno
        this.name = name
        this.#pin = pin  //usign _ makes the data private
        this.#bal = balance
    }
    showpin(otp) {

        if (otp === 55555) {
            console.log('OTP Verfied successfully!!!')
            console.log(`The PIN no is : ${this.#pin} and the balance is ${this.#bal}`)
        }
        else{
            console.log('Incorrect OTP!!!!')
        }
    }
}
const myacc = new Account(2233, 'uttam', 9999, 258000)
myacc.showpin(55555)