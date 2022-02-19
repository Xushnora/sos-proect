

let elMenuBtn = document.getElementById('menuBtn');
let elModal = document.getElementById('menuOpen');
let elClose = document.getElementById('closeBtn');
let elIcon = document.getElementById('icon');

let count = 0;
elMenuBtn.addEventListener('click', function () {
    elModal.classList.toggle('show');

    if (count == 0) {
        elIcon.className = "bx bx-x";
        count++;
    } else {
        elIcon.className = "bx bx-menu-alt-right";
        count = 0;
    }
});