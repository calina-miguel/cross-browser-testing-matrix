const filterButtons = document.querySelectorAll('[data-filter]');
const rows = document.querySelectorAll('.matrix .row:not(.heading)');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle('active', item === button));
    rows.forEach(row => row.classList.toggle('hidden', filter !== 'all' && row.dataset.type !== filter));
  });
});
