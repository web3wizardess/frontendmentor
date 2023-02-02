
const ratingCard = document.querySelector(".rating-card");
const thanksCard = document.querySelector(".thanks-card");
const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");


submitButton.addEventListener("click", () => {
    thanksCard.classList.remove("hidden")
    ratingCard.style.display = "none"
});

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})






