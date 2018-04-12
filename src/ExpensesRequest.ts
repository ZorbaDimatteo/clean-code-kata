import Expense from "./Expense";

export default class ExpensesRequest {
    expenses: Array<Expense> = [];
    constructor(json) {
        console.log("provo a generare delle expenses");

        let expenses = JSON.parse(JSON.stringify(json)).expenses;
        
        for (let i = 0; i < expenses.length ; i++) {
            let e = new Expense(expenses[i].amount,expenses[i].category, expenses[i].day, expenses[i].hasDocument);
            this.expenses.push(e);
        }
        console.log(this.expenses);
    }

}
