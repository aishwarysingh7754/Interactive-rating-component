"use strict";
const $ = selector => document.querySelector(selector);
const selectRating = evt => {
  const rating = evt.currentTarget;
  if (!rating.classList.contains("actif")) {
    if ($(".ratings .actif")) $(".ratings .actif").classList.remove("actif");
    rating.classList.add("actif");
  }
};
const submitRating = evt => {
  if ($(".ratings .actif")) {
    const rating = $(".ratings .actif").value;
    $("#rating_state").classList.add("hidden");
    $("#thank_state").classList.remove("hidden");
    $(".selected").textContent = `You selected ${rating} out of 5`;
  };
  evt.preventDefault();
};
document.addEventListener("DOMContentLoaded", () => {
  const ratings = document.querySelectorAll(".ratings input");
  for (const rating of ratings) {
    rating.addEventListener("click", selectRating)
  };
  $("#submit_btn").addEventListener("click", submitRating);
});