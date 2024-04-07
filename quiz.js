let number_area, problem_area, content_area, result_area;

const quiz_info = [
  {
    number: 1,
    problem: `<div class="problem_wrapper">대한민국 최초의 우주인은?</div>`,
    content: `<button class="option" onclick="confirmBox(1)">&#9312; 이소연</button><br>
      <button class="option" onclick="confirmBox(2)">&#9313; 김소연</button><br>
      <button class="option" onclick="confirmBox(3)">&#9314; 지소연</button><br>
      <button class="option" onclick="confirmBox(4)">&#9315; 최소연</button>`,
    content_num: 4,
    answer: 1,
    explanation:
      "이소연은 우리나라 최초, 전 세계적으로는 475번째, 여성으로서는 49번째로 우주에서 임무를 수행한 우주인이다.",
  },
  {
    number: 2,
    problem: `<div class="problem_wrapper">다음 중 대한민국 초대 대통령은?</div>`,
    content: `<button id="opt1" class="img_option" onclick="confirmBox(1)">&#9312; <img class="opt_img" align="right" src='이승만.png'></button>
        <button class="img_option" onclick="confirmBox(2)">&#9313; <img class="opt_img" align="right" src='윤보선.png'></button>
        <button class="img_option" onclick="confirmBox(3)">&#9314; <img class="opt_img" align="right" src='박정희.png'></button>
        <button class="img_option" onclick="confirmBox(4)">&#9315; <img class="opt_img" align="right" src='윤석열.png'></button>`,
    content_num: 4,
    answer: 1,
    explanation: `대한민국의 초대 대통령은 1~3대 대통령인 이승만이다.<br>
    &#9313; : 4대 대통령 윤보선, &#9314; : 5~9대 대통령 박정희, &#9315; : 20대 대통령 윤석열`,
  },
  {
    number: 3,
    problem: `<div class="problem_wrapper">오천원권 지폐에 있는 과일은?</div>`,
    content: `<button class="option" onclick="confirmBox(1)">&#9312; 복숭아</button><br>
    <button class="option" onclick="confirmBox(2)">&#9313; 배</button><br>
    <button class="option" onclick="confirmBox(3)">&#9314; 포도</button><br>
    <button class="option" onclick="confirmBox(4)">&#9315; 수박</button>`,
    content_num: 4,
    answer: 4,
    explanation: '<img height="200px" src="5000.jpg">',
  },
  {
    number: 4,
    problem: `<div class="problem_wrapper">캐나다의 수도는?</div>`,
    content: `<button class="option" onclick="confirmBox(1)">&#9312; 벤쿠버</button><br>
    <button class="option" onclick="confirmBox(2)">&#9313; 토론토</button><br>
    <button class="option" onclick="confirmBox(3)">&#9314; 몬트리올</button><br>
    <button class="option" onclick="confirmBox(4)">&#9315; 오타와</button>`,
    content_num: 4,
    answer: 4,
    explanation:
      "오타와는 캐나다의 수도이자, 지방자치단체로 온타리오주 내에 두 번째로 큰 도시이다.",
  },
  {
    number: 5,
    problem: `<div class="problem_wrapper">올림픽 오륜기에 속하는 색이 아닌 것은?</div>`,
    content: `<button class="option" onclick="confirmBox(1)">&#9312; 빨강</button><br>
    <button class="option" onclick="confirmBox(2)">&#9313; 노랑</button><br>
    <button class="option" onclick="confirmBox(3)">&#9314; 초록</button><br>
    <button class="option" onclick="confirmBox(4)">&#9315; 파랑</button><br>
    <button class="option" onclick="confirmBox(5)">&#9316; 보라</button><br>
    <button class="option" onclick="confirmBox(6)">&#9317; 검정</button>`,
    content_num: 6,
    answer: 5,
    explanation: '<img height="170px" src="오륜기.png">',
  },
  {
    number: 6,
    problem: `<div class="problem_wrapper">잠자리는 영어로?</div>`,
    content: `<button class="option" onclick="confirmBox(1)">&#9312; fly</button><br>
    <button class="option" onclick="confirmBox(2)">&#9313; firefly</button><br>
    <button class="option" onclick="confirmBox(3)">&#9314; butterfly</button><br>
    <button class="option" onclick="confirmBox(4)">&#9315; dragonfly</button><br>
    <button class="option" onclick="confirmBox(5)">&#9316; sleepingfly</button><br>
    <button class="option" onclick="confirmBox(6)">&#9317; ibelieveicanfly</button>`,
    content_num: 6,
    answer: 4,
    explanation: "",
  },
  {
    number: 7,
    problem: `<div class="problem_wrapper">이 인물은 독립운동가일까요, 친일파일까요?</div>`,
    content: `<img class="img_7" src="이동휘.jpg"><br><button class="option" onclick="confirmBox(1)">&#9312; 독립운동가</button><br>
    <button class="option" onclick="confirmBox(2)">&#9313; 친일파</button><br>`,
    content_num: 2,
    answer: 1,
    explanation: `독립운동가 이동휘는 대한제국기 육군 장교 출신으로 한말 애국계몽운동과 의병 운동을 이끌었고,<br> 
      대한민국임시정부의 국무총리를 역임하기도 했다. 사후 1995년 건국훈장 대통령장을 추서하였다.`,
  },
];

let score;
let start, end;

function init() {
  number_area = document.getElementById("number");
  problem_area = document.getElementById("problem");
  content_area = document.getElementById("content");
  result_area = document.getElementById("result");

  start = 0;
  end = 7;
  score = 0;

  content_area.innerHTML = `<div class="main_page"><div class="title">나락 퀴즈</div>
  <p class="title_info">본 퀴즈를 누군가 앞에서 풀게 되면 공격을 받고<br>
  지위나 직업을 박탈당할 수 있습니다.<br>
  즉, 나락에 가실 수 있습니다.</p>
  <button class="start_btn" onclick="makeQuiz()">시작하기</button></div>`;
}

init();

function makeQuiz() {
  result_area.innerHTML = null;
  if (start == end) {
    showResult();
  }

  number_area.innerHTML = quiz_info[start].number;
  problem_area.innerHTML = quiz_info[start].problem;
  content_area.innerHTML = quiz_info[start].content;
}

function confirmBox(user_answer) {
  var confirm_box = document.createElement("div");
  confirm_box.setAttribute("class", "confirm-box");
  confirm_box.innerHTML =
    "<img src='느낌표.png'>" +
    "<p>" +
    `${user_answer}번을 선택하시겠습니까?` +
    '</p><button class="confirm-btn">' +
    `네. ${user_answer}번이 확실합니다!` +
    '</button><button class="cancel-btn">취소</button>';
  document.body.appendChild(confirm_box);

  var background = document.createElement("div");
  background.setAttribute("class", "background");
  document.body.appendChild(background);

  return new Promise(function () {
    var confirmButton = document.querySelector(".confirm-btn");
    confirmButton.addEventListener("click", function () {
      document.body.removeChild(confirm_box);
      document.body.removeChild(background);

      if (user_answer == quiz_info[start].answer) {
        result_area.innerHTML = `<div class=true-or-false><div class="true_answer">정답</div>
        <div class="answer_info">당신이 고른 답 : ${user_answer}<br>정답 : ${quiz_info[start].answer}</div></div>
        <p class="explanation">${quiz_info[start].explanation}</p>
        <button class="next_quiz" onclick="makeQuiz()">다음 문제 풀기</button>`;
        score++;
        start++;
      } else {
        result_area.innerHTML = `<div class=true-or-false><div class="false_answer">오답</div>
        <div class="answer_info">당신이 고른 답 : ${user_answer}<br>정답 : ${quiz_info[start].answer}</div></div>
        <p class="explanation">${quiz_info[start].explanation}</p>
        <button class="next_quiz" onclick="makeQuiz()">다음 문제 풀기</button>`;
        start++;
      }
    });

    var cancelButton = document.querySelector(".cancel-btn");
    cancelButton.addEventListener("click", function () {
      document.body.removeChild(confirm_box);
      document.body.removeChild(background);
    });

    background.addEventListener("click", function () {
      document.body.removeChild(confirm_box);
      document.body.removeChild(background);
    });
  });
}

function rejectBox() {
  var reject_box = document.createElement("div");
  reject_box.setAttribute("class", "confirm-box");
  reject_box.innerHTML = `<img width="80px" src='엑스.png'>
      <p>두 번의 기회는 없습니다.
      </p><button class="cancel-btn">네..</button>`;
  document.body.appendChild(reject_box);

  var background = document.createElement("div");
  background.setAttribute("class", "background");
  document.body.appendChild(background);

  return new Promise(function () {
    var cancelButton = document.querySelector(".cancel-btn");
    cancelButton.addEventListener("click", function () {
      document.body.removeChild(reject_box);
      document.body.removeChild(background);
    });

    background.addEventListener("click", function () {
      document.body.removeChild(reject_box);
      document.body.removeChild(background);
    });
  });
}

function showResult() {
  number_area.innerHTML = null;
  problem_area.innerHTML = null;
  content_area.innerHTML = `<div class="last_result"><div class="your_result">당신의 결과</div>
    <div class="score">${score} / 7</div> 
    <button class="show_main" onclick="init()">메인으로 가기</button></div>`;
}
