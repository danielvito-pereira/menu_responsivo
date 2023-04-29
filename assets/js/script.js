
const toggleButton = document.querySelector('.toggle-menu-button');
const menuMobile = document.querySelector('.menu-mobile');

if (toggleButton && menuMobile) {
  toggleButton.addEventListener('click', () => {
    console.log('Botão de clique');
    menuMobile.classList.toggle('ativo');
  });
} else {
  console.log('O elemento toggle-button ou menu-mobile não foi encontrado!');
}
