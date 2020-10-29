var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalButton = document.querySelector('.modal button');
var selectPlanButton = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');


for (var i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', function () {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className = 'open'; // This overwrites
        modal.classList.add('open');
        backdrop.classList.add('open');
    })
}
if (modalButton) {
    modalButton.addEventListener('click', closeModal);
}


backdrop.addEventListener('click', function () {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

function closeModal() {
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');

}

toggleButton.addEventListener('click', function () {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})