const btn = document.getElementById("btn");
const body = document.querySelector("body");
const closeBtn = document.getElementById("close");
btn.addEventListener('click', _ => {
    body.classList.toggle('modal-open');
});
closeBtn.addEventListener('click', _ => {
    body.classList.remove('modal-open');
});