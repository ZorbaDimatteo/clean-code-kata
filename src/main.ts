import JsonFileReader from './JsonFileReader';
import ExpensesRequest from './ExpensesRequest';
import Validator from './Validator';
import Report from './Report';


class ExpensesRequestProcessor {
    test(){

        let expenses = this.readFile();
        let result = this.validateRequest(expenses);
        this.createReport(result);
    }

    readFile() {
        let reader = new JsonFileReader(); 
        return reader.load("../input/request.json") as ExpensesRequest;
    }

    validateRequest(currentExpenses) {
        let validator = new Validator();
        validator.validate(currentExpenses);
        return validator.getResult();
    }

    createReport(result) {
        let report = new Report();
        report.writeReport(result);
    }
}

let c = new ExpensesRequestProcessor(); 
c.test(); 

