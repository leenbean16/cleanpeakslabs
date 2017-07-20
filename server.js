// node bamazon application.
// variables:
let colors = require('colors');
let math = require('math');
let mysql = require('mysql');
let Table = require('cli-table');
let inquirer = require('inquirer');
let command = process.argv[2]
let secondCommand = process.argv[3]
let receipt = [];
let orders = [];

// Connection to MySQL database.
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "display:none;",
    database: 'cleanpeakslabs'
});

// Welcome banner.
function welcome() {
    console.log("\n-----------------------------------------------------------".rainbow);
    console.log("                  Clean Peaks Labs Database.");
    console.log("-----------------------------------------------------------".rainbow);
    console.log("\n");
};

welcome();

// brings up table with contents from mysql.
let cpl = function() {
        let table = new Table({
            head: ['Item ID', 'Name', 'Username', 'Company', 'Address', 'City', 'State', 'Zip-Code', 'Email', 'Phone Number', 'Date', 'Services Required', 'Samples Deposited'],
            colWidths: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
        });
        // connect to mysql
        connection.query('SELECT * FROM user', function(err, res) {
                    for (let i = 0; i < res.length; i++) {
                        table.push(
                            [res[i].ID, res[i].First_Last, res[i].User_Name, res[i].Company, res[i].Address, res[i].City, res[i].State, res[i].Zip_Code, res[i].Email, res[i].Phone_Number, res[i].Date, res[i].Services_Requested, res[i].Samples_Deposited]
                        );
                    };
                    // inquirer cplping prompt
                    runCommand(process.argv[2]);
                    // kind of a long function :/
                    function runCommand(command) {
                        console.log(table.toString());
                        // table
                        inquirer.prompt([{
                            // itemID picker prompt.
                            name: "itemId",
                            type: "input",
                            message: "What is the item ID you would like to view?",
                            validate: function(value) {
                                if (isNaN(value) == false) {
                                    return true;
                                } else {
                                    return false;
                                }
                            }
                        }]).then(function(answer) {
                            // Updates inventory and lets customer know their total.
                            let chosenId = answer.ID;
                            let chosenUser = res[chosenId];
                                // let chosenQuantity = answer.Quantity
                            if (answer === answer.ID) {
                                // Views total cost for chosen product * amount.
                                console.log("\n-----------------------------------------------------------".rainbow);
                                console.log(res[i].ID, res[i].First_Last, res[i].User_Name, res[i].Company, res[i].Address, res[i].City, res[i].State, res[i].Zip_Code, res[i].Email, res[i].Phone_Number, res[i].Date, res[i].Services_Requested, res[i].Samples_Deposited);
                                console.log("                                                           ");
                                console.log("-----------------------------------------------------------".rainbow);
                                // cplOrExit();
                        } else {
                                // This displays when stock is too low.
                                console.log("\n-----------------------------------------------------------".rainbow);
                                console.log("\nPick a different one.");
                                console.log("");
                                console.log("-----------------------------------------------------------".rainbow);
                                // cpl();
                            }
                        })
                    }
                });

                // function cplOrExit() {
                //     inquirer.prompt([{
                //         // What does the customer want to do now?
                //         type: "list",
                //         message: "What do you want to do?",
                //         choices: ["Keep cplping", "Receipt", "Cart", "Exit"],
                //         name: "choice",
                //     }]).then(function(inquirerResponse) {
                //         if (inquirerResponse.choice === "Keep cplping") {
                //             cpl()
                //         } else if (inquirerResponse.choice === "Receipt") {
                //             console.log("\nYour receipt.");
                //             console.log(receipt);
                //             console.log("Total: $" + Math.sum(cart));

                //             console.log("\n");
                //             cplOrExit()
                //         } else if (inquirerResponse.choice === "Cart") {
                //             console.log("\n-----------------------------------------------------------".rainbow);
                //             console.log("Your cart consists of: ");
                //             console.log(receipt);
                //             console.log("                                                           ");
                //             console.log("-----------------------------------------------------------".rainbow);
                //             cplOrExit();
                //         } else if (inquirerResponse.choice === "Exit") {
                //             console.log("\n-----------------------------------------------------------".rainbow);
                //             console.log("\n                   Thank you. Come again.");
                //             console.log(" ");
                //             console.log("-----------------------------------------------------------".rainbow);
                //         }
                //     });
                // }

                // cpl();

                connection.end();

                // connection.query("UPDATE user SET ? WHERE ?", [{
                //     StockQuantity: chosenUser.StockQuantity - chosenQuantity
                // }, {
                //     itemID: chosenUser.itemID

                // }], function(err, res) {
                // push items to receipt array
                // orders.push(res[chosenId].ProductName + " : " + res[chosenId].Price.toFixed(2) * chosenQuantity + " ");
                // cart.push(res[chosenId].Price.toFixed(2) * chosenQuantity);
                //Update stock.


                // Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items 
                // available for sale. Include the ids, names, and prices of products for sale.
                // The app should then prompt users with two messages.
                // The first should ask them the ID of the product they would like to buy.
                // The second message should ask how many units of the product they would like to buy.
                // Once the customer has placed the order, your application should check if your store has enough of the product to meet 
                // the customer's request.
                // If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
                // However, if your store does have enough of the product, you should fulfill the customer's order.
                // This means updating the SQL database to reflect the remaining quantity.
                // Once the update goes through, show the customer the total cost of their purchase.





                // let mysql = require('mysql');
                // let Table = require('cli-table');
                // let math = require('math');
                // let inquirer = require('inquirer');



                // let connection = mysql.createConnection({
                //     host: "localhost",
                //     user: "root",
                //     password: "display:none;",
                //     database: 'cleanpeakslabs'
                // });


                // connection.connect();

                // connection.query('SELECT * FROM user', function(error, results, fields) {
                //     if (error) throw error;
                //     console.log('Connected!');
                // });


                // // instantiate 
                // let table = new Table({
                //     head: ['Item ID', 'Name', 'Username', 'Company', 'Address', 'City', 'State', 'Zip-Code', 'Email', 'Phone Number', 'Date', 'Services Required', 'Samples Deposited'],
                //     colWidths: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
                // });


                // // connect to mysql
                // connection.query('SELECT * FROM user', function(error, res) {
                //     if (error) throw error;
                //     for (let i = 0; i < res.length; i++) {
                //         table.push(
                //             [res[i].ID, res[i].First_Last, res[i].User_Name, res[i].Company, res[i].Address, res[i].City, res[i].State, res[i].Zip_Code, res[i].Email, res[i].Phone_Number, res[i].Date, res[i].Services_Requested, res[i].Samples_Deposited]
                //         );
                //     }
                // });




                // console.log(table.toString());


                // // connection.end();
