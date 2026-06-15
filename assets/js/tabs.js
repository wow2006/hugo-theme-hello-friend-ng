document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.code-tabs').forEach(function (container) {
    if (container.dataset.initialized) return;
    container.dataset.initialized = 'true';

    var tabs = container.querySelectorAll('.code-tab');
    var nav = document.createElement('div');
    nav.className = 'tab-nav';

    tabs.forEach(function (tab, i) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = tab.dataset.title || ('Tab ' + (i + 1));
      tab.classList.add('tab-content');

      if (i === 0) {
        btn.classList.add('active');
        tab.classList.add('active');
      }

      btn.addEventListener('click', function () {
        container.querySelectorAll('.tab-nav button').forEach(function (b) {
          b.classList.remove('active');
        });
        container.querySelectorAll('.tab-content').forEach(function (c) {
          c.classList.remove('active');
        });
        btn.classList.add('active');
        tab.classList.add('active');
      });

      nav.appendChild(btn);
    });

    container.insertBefore(nav, container.firstChild);
  });
});
