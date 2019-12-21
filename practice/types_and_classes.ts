// Given the code below, re-write it using all TypeScript features you have learned

/* 
myNum = 5;
myString = "Hello Universe";
myArr = [1,2,3,4];
myObj = { name:'Bill'};
anythingVariable = "Hey";
anythingVariable = 25; 
arrayOne = [true, false, true, true]; 
arrayTwo = [1, 'abc', true, 2];
myObj = { x: 5, y: 10 };
// object constructor
MyNode = (function () {
    function MyNode(val) {
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function () {
        this._priv = 10;
    };
    return MyNode;
}());
myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
function myFunction() {
    console.log("Hello World");
    return;
}
function sendingErrors() {
	throw new Error('Error message');
}
*/

const myNum: number = 5;
const myStr: string = "Hello Universe";
const myArr: number[] = [1, 2, 3, 4];

let myObj: { [key: string]: (string | number) } = { name: 'Bill' };

let anythingVariable: any = "Hey";
anythingVariable = 25;

const arrayOne: boolean[] = [true, false, true, true];
const arrayTwo: (number | string | boolean)[] = [1, 'abs', true, 2];

myObj = { x: 5, y: 10 }

//class
class MyNode {
	private _priv: number;
	constructor(public val: number) { }
	doSomething(): void {
		this._priv = 10;
	}
}

const myNodeInstance: MyNode = new MyNode(1);
console.log(myNodeInstance.val);

function myFunction(): void {
	console.log("Hello World");
	return;
}

function sendingErrors(): never {
	throw new Error('Error message');
}
