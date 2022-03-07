let numValue: number;
let stringValue: string;
let boolenValue: boolean;
let undefinedValue: undefined;
let nullValue: null;
let objValue: object;
let symbolValue: symbol;

numValue = 3;
numValue = 3.3;
// numValue = "hello"; //error

stringValue = "hello";
stringValue = "hello";
stringValue = `hello`; //개행 가능
stringValue = `
hello
${1 + 1} //string 타입
hi
`; //개행 가능

boolenValue = true;
boolenValue = false;

undefinedValue = undefined;
undefinedValue = null; //가능은 하나 굳이 undefined타입에 null로 정의해서 사용하지않음
