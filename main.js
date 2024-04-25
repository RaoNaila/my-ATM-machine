import inquirer from "inquirer";
// first require item store in a variable
let currentBalance = 25000;
let pincode = 1111;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "plz enter your pincode"
    },
]);
//conditional statement
if (pinAnswer.pin === pincode) {
    console.log("correct pin code");
    let action = await inquirer.prompt({
        name: "operation",
        type: "list",
        choices: ["check balance", "withdraw"],
        message: "select your option",
    });
    if (action.operation === "withdraw") {
        let amount = await inquirer.prompt([
            {
                name: "value",
                type: "number",
                message: "enter your amount"
            }
        ]);
        currentBalance -= amount.value;
        console.log(`your remaining balance is ${currentBalance}`);
    }
    else if (action.operation === "check balance") {
        console.log(`your current balance is ${currentBalance}`);
    }
}
else {
    console.log("plz enter correct pin code");
}
