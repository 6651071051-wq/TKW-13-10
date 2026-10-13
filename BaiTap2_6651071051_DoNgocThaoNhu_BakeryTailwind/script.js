
const btn  = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {

  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.add('hidden');
  menu.classList.remove('flex');
}));