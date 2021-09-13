// Apapun yang diambil
const burger = document.querySelector('.humberger-menu');
const navMobile = document.querySelector('.mobile-menu');
//Eksekusi Humberger menu
burger.addEventListener('click', () => {
    navMobile.classList.toggle("hidden");
})
// Akhir dari Humberger menu