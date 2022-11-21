"use strict";
const card_front = document.querySelector(".front");
const card_back = document.querySelector(".back");
const card = document.querySelector(".card");
const submit_btn = document.querySelector(".btn");
const rate = document.querySelector(".rating");
const rate_btn = document.querySelectorAll(".rating__btn");
const span = document.querySelector(".text");
let btn;
card.addEventListener("click", function (e) {
  if (e.target.classList.contains("rating__btn")) {
    btn = e.target.textContent;
    console.log(btn);
  }
});
submit_btn.addEventListener("click", function (e) {
  card_back.classList.remove("hidden");
  card_front.classList.add("hidden");
  const text_rate = btn;
  if (text_rate === undefined) span.textContent = 0;
  else span.textContent = btn;
});
