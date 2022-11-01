function clickServices() {
  const lishki = document.querySelector('.lishki__services');
  if (getComputedStyle(lishki).visibility == 'hidden') {
    lishki.style.visibility = 'visible';
  } else {
    lishki.style.visibility = 'hidden';
  }
}
let lastScroll = 0;
const defaultOffset = 145;
const header = document.querySelector('.fixed__header');
const scrollPosition = () => document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide__fixed');
const head = document.querySelector('head');
window.addEventListener('scroll', () => {
  if (scrollPosition() > lastScroll && containHide() && scrollPosition() > defaultOffset) {
    header.classList.toggle('hide__fixed');
  } else if (
    scrollPosition() < lastScroll &&
    !containHide() &&
    scrollPosition() <= defaultOffset &&
    menuHide()
  ) {
    header.classList.toggle('hide__fixed');
  }
  lastScroll = scrollPosition();
});

const atributesDots = document.querySelector('.dot');
const closeSvg = document.querySelector('.closeSvg');
const menu = document.querySelector('.menu');
const menuHide = () => menu.classList.contains('menu__hidden');
atributesDots.addEventListener('click', () => {
  atributesDots.style.display = 'none';
  menu.classList.toggle('menu__hidden');
  closeSvg.style.display = 'block';
});
closeSvg.addEventListener('click', () => {
  atributesDots.style.display = 'block';
  menu.classList.toggle('menu__hidden');
  header.classList.toggle('hide__fixed');
  closeSvg.style.display = 'none';
});

const categoryMenu = (e, ul) => {
  const category = document.querySelector(`#${e}`);
  const ulki = document.querySelector(`#${ul}`);
  ulki.classList.toggle('none');
  category.classList.toggle('none');
};
