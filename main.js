import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow("'").repeat(65));
console.log(chalk.black.bgGreenBright("\n\tWelcome to Mrs Babar - OOPs in Typescript\n"));
console.log(chalk.yellow("'".repeat(65)));
class Student {
    constructor(n) {
        this.name = n;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        const ans = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: chalk.black.cyanBright("\nWhom would you like to interact with ?"),
                choices: ["staff", "student", "exit"]
            }
        ]);
        if (ans.select === "staff") {
            console.log(chalk.black.redBright("\nYou approach the staff room. Please feel free to ask any question."));
        }
        else if (ans.select === "student") {
            const ans = await inquirer.prompt([
                {
                    name: "student",
                    type: "input",
                    message: chalk.black.cyanBright("\nEnter the student's name you wish to engage with :")
                }
            ]);
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(chalk.black.redBright(`\nHello i am ${name.name} .Nice to meet you!`));
                console.log(chalk.yellow("\nNew Student Added ==> "));
                console.log(chalk.yellow("\nCurrent Student List:\n"));
                console.log(persons.students);
            }
            else {
                console.log(chalk.black.redBright(`\nHello i am ${student.name} . Nice to see you again!`));
                console.log(chalk.yellowBright("\nExisting Student List:\n"));
                console.log(persons.students);
            }
        }
        else if (ans.select === "exit") {
            console.log(chalk.black.bgBlueBright("\nExiting the program..."));
            process.exit();
        }
    } while (true);
};
programStart(persons);
