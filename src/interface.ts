interface TV {
    //어떠한 행위를 한다만 기술 = 메서드를 정의
    turnOn(): boolean; // : 뒤엔 return 값
    turnOff(): void;
}

const myTV: TV = {
    turnOn() {
        return true;
    },
    turnOff() {},
};

function tryTurnOn(tv: TV) {
    tv.turnOn();
}

tryTurnOn(myTV);

interface Cell {
    // 말들이 놓여져있는 공간
    row: number;
    col: number;
    piece?: Piece; //Pieace란 인터페이스 정의
}

interface Piece {
    //Piece라는 인터페이스는 move라는 행위를 꼭 해야함.
    move(from: Cell, to: Cell): boolean;
}

function createBoard() {
    const cells: Cell[] = [];

    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 3; col++) {
            cells.push({ row, col });
        }
    }

    return cells;
}

const board = createBoard(); //cell들의 집합

board[0].piece = {
    move(from: Cell, to: Cell) {
        return true;
    },
};

//회원가입
interface SignUp {
    email: string;
    id: string;
    password: string;
}

function ajaxSignup(data: SignUp) {}

ajaxSignup({ email: '', id: '', password: '' });
