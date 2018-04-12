export default class Report {
    constructor() { }

    writeReport(validationResult) {
        console.log("risultato:");
        console.log(validationResult);

        document.body.innerHTML = validationResult;
    }
}