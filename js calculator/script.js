//för att få räknaren att räkna och visa resultat gör vi en calculator class
class Calculator {
        constructor(previousOperandTextElement, currentOperandTextElement) {
            this.previousOperandTextElement = previousOperandTextElement
            this.currentOperandTextElement = currentOperandTextElement
            this.clear()
        }
//funktioner för alla funktioner som behövs

    clear() {
        //tar bort allting från queryn
            this.currentOperand = ''
            this.previousOperand = ''
            this.operation = undefined
        }

    delete() {
        //delete funktionen tar bort sista tecknet från queryn
            this.currentOperand = this.currentOperand.toString().slice(0, -1)
        }

    appendNumber(number) {
        //man kan bara ha ett kommatecken
            if (number === '.' && this.currentOperand.includes('.')) return
        //adderar nästa siffra till queryn utan att plussa till det ( 1 + 1 = 11 =/= 2)
            this.currentOperand = this.currentOperand.toString() + number.toString()
        }

    chooseOperation(operation) {
        //om query är tomt så räknas ingenting, om den inte är tom så räknar den svaret med compute funktionen
            if (this.currentOperand === '') return
            if (this.previousOperand !== '') {
                this.compute()
            }
            this.operation = operation
            this.previousOperand = this.currentOperand
            this.currentOperand = ''
        }

    compute() {
        //matematiken
            let computation
            const prev = parseFloat(this.previousOperand)
            const current = parseFloat(this.currentOperand)
            if (isNaN(prev) || isNaN(current)) return
            switch (this.operation) {
                case '+':
                    computation = prev + current
                    break
                case '-':
                    computation = prev - current
                    break
                    case '*':
                computation = prev * current
                break
                case '/':
                computation = prev / current
                    break
                default:
                    return
            }
            this.currentOperand = computation
            this.operation = undefined
            this.previousOperand = ''
        }

    updateDisplay() {
        //för att updatera siffrorna i sifferfältet
            this.currentOperandTextElement.innerText = this.currentOperand
            this.previousOperandTextElement.innerText = this.previousOperand
        }

}


//adderar constants för varje knapp, i HTML har vi lagat 'data-' för att referensera i js och 'class' för att referensera i css
const numberButton = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

//logik för hur räknaren fungerar, vad som händer när man trycker på knappar

    numberButton.forEach(button => {
            button.addEventListener('click', () => {
                calculator.appendNumber(button.innerText)
                calculator.updateDisplay()
            })
        })


    operationButtons.forEach(button => {
            button.addEventListener('click', () => {
                calculator.chooseOperation(button.innerText)
                calculator.updateDisplay()
            })
        })

    equalsButton.addEventListener('click', button => {
            calculator.compute()
            calculator.updateDisplay()
        })


    allClearButton.addEventListener('click', button => {
            calculator.clear()
            calculator.updateDisplay()
        })

    deleteButton.addEventListener('click', button => {
            calculator.delete()
            calculator.updateDisplay()
        })