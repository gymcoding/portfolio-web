function toggleMenu() {
  const $navMenu = document.getElementById('nav__menu');
  $navMenu.classList.toggle('show');
}
function init() {
  const $navToggle = document.getElementById('nav-toggle');
  $navToggle.addEventListener('click', () => {
    // Menu Toggle
    toggleMenu();
  });

  const $navLinkList = document.querySelectorAll('.nav__link ');
  $navLinkList.forEach((el) => el.addEventListener('click', toggleMenu));
}

init();

const options = {
  threshold: 1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const sectionId = entry.target.id;
    if (entry.isIntersecting) {
      document
        .querySelector(`.nav__link[href*=${sectionId}]`)
        .classList.add('active-link');

      const $items = document.querySelectorAll(
        `.nav__link:not([href*=${sectionId}])`,
      );
      $items.forEach((el) => el.classList.remove('active-link'));
    }
  });
}, options);

const $sectionList = document.querySelectorAll('.section');
$sectionList.forEach((el) => observer.observe(el));
// observer.observe($workSection);
// observer.observe($workSection);
// observer.observe($workSection);
