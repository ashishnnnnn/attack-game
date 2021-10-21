const start_btn = document.querySelector(".start-btn");
const game_body = document.querySelector(".game-body");
const btn_one = document.querySelector(".btn-one");
const btn_two = document.querySelector(".btn-two");
const role_table = document.querySelector(".role-table");
const role_table_one = document.querySelector(".role-table-one");
const role_table_two = document.querySelector(".role-table-two");
const dis_health_one = document.querySelector(".health-one");
const dis_health_two = document.querySelector(".health-two");
const result = document.querySelector(".won-result");
const dis_round_no = document.querySelector(".round-num");

btn_two.disabled = true;
let main_one = 0;
let main_two = 0;
let health_one = 100;
let health_two = 100;
let round_num = 1;

start_btn.addEventListener("click", function () {
  result.style.display = "none";
  start_btn.style.display = "none";
  game_body.style.display = "block";
  document.querySelector(".main-score-one").innerText = `Won - ${0}`;
  document.querySelector(".main-score-two").innerText = `Won - ${0}`;
});

btn_one.addEventListener("click", function () {
  const rndInt = Math.floor(Math.random() * 21);
  health_two -= rndInt;
  dis_health_two.innerText = `Health ${health_two}`;
  btn_two.disabled = false;
  btn_one.disabled = true;
  role_table_one.classList.toggle("active");
  role_table_two.classList.toggle("active");
  if (health_two <= 0) {
    let won = 1;
    update(won);
  }
});

btn_two.addEventListener("click", function () {
  const rndInt = Math.floor(Math.random() * 21);
  health_one -= rndInt;
  dis_health_one.innerText = `Health ${health_one}`;
  btn_two.disabled = true;
  btn_one.disabled = false;
  role_table_one.classList.toggle("active");
  role_table_two.classList.toggle("active");
  if (health_one <= 0) {
    let won = 2;
    update(won);
  }
});

function update(won) {
  if (won == 1) {
    main_one += 1;
    document.querySelector(".main-score-one").innerText = `Won - ${main_one}`;
  }
  if (won == 2) {
    main_two += 1;
    document.querySelector(".main-score-two").innerText = `Won - ${main_two}`;
  }
  btn_two.disabled = true;
  btn_one.disabled = false;
  health_two = 100;
  health_one = 100;
  round_num += 1;
  dis_health_two.innerText = `Health ${health_two}`;
  dis_health_one.innerText = `Health ${health_one}`;
  dis_round_no.innerText = `Round No:${round_num}`;
  if (!dis_health_one.classList.contains("active")) {
    dis_health_one.classList.add("active");
  }
  if (dis_health_two.classList.contains("active")) {
    dis_health_two.classList.remove("active");
  }
  if (main_one > 2) {
    console.log("First-Won");
    result.innerText = "Player-One Has Won";
    result.style.display = "block";
    game_body.style.display = "none";
    start_btn.style.display = "block";
    main_reset();
  }
  if (main_two > 2) {
    console.log("Second-Won");
    result.innerText = "Player-Two Has Won";
    result.style.display = "block";
    game_body.style.display = "none";
    start_btn.style.display = "block";
    main_reset();
  }
}

function main_reset() {
  start_btn.innerText = "Re-Start";
  btn_two.disabled = true;
  btn_one.disabled = false;
  main_one = 0;
  main_two = 0;
  health_one = 100;
  health_two = 100;
  round_num = 1;
  dis_round_no.innerText = `Round No:${round_num}`;
  if (!dis_health_one.classList.contains("active")) {
    dis_health_one.classList.add("active");
  }
  if (dis_health_two.classList.contains("active")) {
    dis_health_two.classList.remove("active");
  }
}
