let numValue: number;
let stringValue: string;
let boolenValue: boolean;
let undefinedValue: undefined;
let nullValue: null;
let anyValue: any;
let objValue: object;
let symbolValue: symbol;

// Number Type
numValue = 3;
numValue = 3.3;
// numValue = "hello"; //error

// String Type
stringValue = "hello";
stringValue = "hello";
stringValue = `hello`; //개행 가능
stringValue = `
hello
${1 + 1} //string 타입
hi
`; //개행 가능

// Boolean Type
boolenValue = true;
boolenValue = false;

// Undefined Type
undefinedValue = undefined;
undefinedValue = null; //가능은 하나 굳이 undefined타입에 null로 정의해서 사용하지않음

// number, string, boolean 은 undefined의 상위 타입
numValue = null; //가능
numValue = undefined; //가능

// Any Type
anyValue = 1;
anyValue = null;
anyValue = {};

// Object Type
objValue = { name: "jay" };
objValue = {};
objValue = new String(33);

//es6에서 나타난 symbol 타입
symbolValue = Symbol();
