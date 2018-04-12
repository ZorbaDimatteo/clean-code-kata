export default class Expense {

    amount: Number;
    category: string;
    day: Date;

    hasDocument: boolean;

    constructor(amount, category, day, hasDocument) {
        this.amount = amount;
        this.category = category;
        this.day = day;
        this.hasDocument = hasDocument;
    }
}
