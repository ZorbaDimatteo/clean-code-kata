import CheckedExpense from "./CheckedExpenses";

export default class Validator {
    result : Array<CheckedExpense> = [];

    constructor() { }

    validate(expenses) {
        for (let i = 0 ; i < expenses.expenses.length ; i++) {
            this.result.push(this.hasDocument(expenses.expenses[i]));
        }
    }

    getResult() {
        return this.result;
    }

    hasDocument(expense) {
        if (expense.hasDocument) {
            let e = new CheckedExpense();
            return expense;
        }
    }
}