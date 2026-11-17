const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Ano do rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Menu móvel
const nav = document.getElementById('nav');
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
const setMenu = (open) => {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  nav.classList.toggle('open', open);
};
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
links.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

// Sombra suave da navbar ao rolar
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 12);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Link ativo conforme a seção visível
const navAnchors = [...links.querySelectorAll('a')];
const sections = navAnchors.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
const spy = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navAnchors.forEach((a) => {
      const active = a.getAttribute('href') === `#${entry.target.id}`;
      a.classList.toggle('active', active);
      if (active) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    });
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach((s) => spy.observe(s));

// Projetos: abre um por vez
const heads = document.querySelectorAll('.project-head');
heads.forEach((btn) => {
  btn.addEventListener('click', () => {
    const willOpen = btn.getAttribute('aria-expanded') !== 'true';
    heads.forEach((b) => {
      b.setAttribute('aria-expanded', 'false');
      b.closest('.project').classList.remove('open');
    });
    if (willOpen) {
      btn.setAttribute('aria-expanded', 'true');
      btn.closest('.project').classList.add('open');
    }
  });
});

// Movimento reduzido: remove o ponto que percorre o infinito
if (reduceMotion) document.getElementById('infDot')?.remove();
