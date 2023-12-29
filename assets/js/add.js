let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header')
const scrollPosition = () => document.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');
document.addEventListener('scroll', () => {
    if (scrollPosition() > 65) {
        if (!containHide()) header.classList.add('hide')
    } else {
        if (containHide()) header.classList.remove('hide')
    }
});
const burgerButtonActive = document.querySelector('.burger-menu');
const burgerPanel = document.querySelector('.burger-panel');
const burgerButtonClose = document.querySelector('.burger-close');
burgerButtonActive.addEventListener('click', () => {
    burgerPanel.classList.toggle('active');
    burgerButtonActive.classList.toggle('active');
    burgerButtonClose.addEventListener('click', () => {
        burgerPanel.classList.remove('active');
        burgerButtonActive.classList.remove('active');
    })
})
let accordions = document.querySelector('.accordions__wrapper')
let accordionBlocks = document.querySelectorAll('.accordions__wrap')
const closeAllAccordions = () => {
    accordionBlocks.forEach(el => el.classList.remove('accordions__wrap_active'))
}


let scrollToTopBtn = document.querySelector(".scrollToTopBtn");
let rootElement = document.documentElement;
function handleScroll() {
    let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / scrollTotal > 0.1) {
        scrollToTopBtn.classList.add("showBtn");
    } else {
        scrollToTopBtn.classList.remove("showBtn");
    }
}
function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.loader').classList.remove('active')
    }, 600)
})



