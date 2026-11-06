// Menu de langue : mémorise le choix (la page racine l'utilise ensuite), ferme le menu au clic dehors ou avec Échap.
(function () {
  var menu = document.querySelector('.lang');
  if (!menu) return;
  menu.addEventListener('click', function (e) {
    var link = e.target.closest('a[data-lang]');
    if (!link) return;
    try { localStorage.setItem('ksq-lang', link.getAttribute('data-lang')); } catch (err) { /* stockage indisponible */ }
    if (location.hash) link.href = link.href.split('#')[0] + location.hash;
  });
  document.addEventListener('click', function (e) {
    if (menu.open && !menu.contains(e.target)) menu.open = false;
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.open) {
      menu.open = false;
      menu.querySelector('summary').focus();
    }
  });
})();
