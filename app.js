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


function copy(event) {
    const copyPassText = event.target.parentNode.getElementsByTagName('input')[0];
    copyPassText.select()
    document.execCommand("copy")
}