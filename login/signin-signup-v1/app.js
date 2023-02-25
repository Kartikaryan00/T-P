const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
// select the element with the class "my-class"
const myElement = document.getElementsByClassName('.btn solid');

// add a click event listener to the element
myElement.addEventListener('click', function() {
  // redirect the user to another page
  window.location.href = 'feed.html';
});
