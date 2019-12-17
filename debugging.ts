//1. Setting types
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
//It has to be a string
myString = "Nine";

//*************************************************
//2.Setting the types for function parameters
function sayHello(name: string) {
	return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
console.log(sayHello(myString));

//*************************************************
//3.Optional parameters
function fullName(firstName: string, lastName: string, middleName?: string) {
	let fullName = `${firstName} ${middleName} ${lastName}`;
	return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones"));

//*************************************************
//4. Interfaces and function parameters
interface Student {
	firstName: string;
	lastName: string;
	belts: number;
}
function graduate(ninja: Student) {
	return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
	firstName: "Christine",
	lastName: "Yang",
	belts: 2
}
const jay = {
	firstName: "Jay",
	lastName: "Patel",
	belts: 4
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));

//*************************************************
//5.Classes and function parameters
class Ninja {
	fullName: string;
	constructor(
		public firstName: string,
		public lastName: string) {
		this.fullName = `${firstName} ${lastName}`;
	}
	debug() {
		console.log("Console.log() is my friend.")
	}
}
// This is not making an instance of Ninja, for some reason:
const shane = new Ninja();
// Since I'm having trouble making an instance of Ninja, I decided to do this:
const turing = {
	fullName: "Alan Turing",
	firstName: "Alan",
	lastName: "Turing"
}
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja) {
	return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(turing));
