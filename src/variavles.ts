var score1 = 0;
let score2 = 200;
const defaultScore = 0;

function outer() {
  if (true) {
    let score; //type 어노테이션 타입 할당
    score = 30;
    // score = "30";
  }
  for (let i = 0; i < 3; i++) {
    //이떄 let은 포문안에 블락단위의 스코프를 가짐
    setTimeout(() => {
      console.log(i);
    }, 100);
  }
}

outer();
