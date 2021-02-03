const trigger = document.querySelector('#trigger');
const modalWrapper = document.querySelector('.modal__wrapper');
const closeBtn = document.querySelector('.close');
const copyBtn = document.querySelector(".copy-btn")


trigger.addEventListener('click', function () {
    openModal();
});

closeBtn.addEventListener('click', function () {
    closeModal();
});

modalWrapper.addEventListener('click', function (e) {
    if (e.target !== this) return;
    closeModal();
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
})

function openModal() {
    modalWrapper.classList.add('active');
}
function closeModal() {
    modalWrapper.classList.remove('active');
}

function copyTokenOne() {
    var copyPassText = document.getElementById("tokenOne")
    copyPassText.select()
    document.execCommand("Copy")
}
function copyTokenTwo() {
    var copyPassText = document.getElementById("tokenTwo")
    copyPassText.select()
    document.execCommand("Copy")
}
function copyTokenThree() {
    var copyPassText = document.getElementById("tokenThree")
    copyPassText.select()
    document.execCommand("Copy")
}
function copyTokenFourth() {
    var copyPassText = document.getElementById("tokenFour")
    copyPassText.select()
    document.execCommand("Copy")
}