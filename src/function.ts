function add(x: number, y: number) {
    return x + y;
}
// add(1, "2"); // Error! 타입 X
const result = add(1, 2);
//result 는 number타입이라는걸 추론할 수 있어야함.

// 유저를 생성하는 함수
function buildUserInfo(name: string, email: string) {
    return { name, email };
}
// buildUserInfo(); // Error 변수에 값이 없었을경우, 값을 할당하지 않았서 오류!

function buildUserInfo2(name?: string, email?: string) {
    return { name, email };
}
const user = buildUserInfo2(); //undefined라는 값 할당됌

// 기본값을 줬을경우
function buildUserInfo3(name = '-', email = '-') {
    return { name, email };
}
const user2 = buildUserInfo3(); //name, email 둘다 - 할당

const add2 = (a: number, b: number): number => a + b;

// 함수의 오버로딩
interface Storage {}
function store(type: string): Storage {
    //어떤 타입이 오면 어떤타입을 반환해야하는지 정의
}
