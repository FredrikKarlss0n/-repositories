
class Calculator {
    constructor(salary, tax) {
        this.salary = salary
        this.tax = tax
    }


    
    compute() {
        let computation
        const salary = parseFloat(this.salary)
        const tax = parseFloat(this.tax)
        if (isNaN(salary) || isNaN(tax)) return
            switch (this.calculate) {
                case 'calculate':
                    computation = salary - (salary * (tax / 100))
            }
    }

    updateDisplay() {
        document.getElementById('data-tax-salary').innerHTML
                = 'Your taxed salary is : ' + computation;
    }

}

const salary = document.querySelector('[data-salary]')
const tax = document.querySelector('[data-tax]')
const calculate = document.querySelector('[data-calculate]')
const taxedSalary = document.querySelector('[data-tax-salary]')

const calculator = new Calculator(salary, tax)

calculate.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})
