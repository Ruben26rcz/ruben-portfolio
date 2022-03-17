/*$(document).ready(function () {
  $('.js-menu').on('click', function () {
    $('html').toggleClass('menu-open');
  });
});
*/

function onDocumentReady(callback) {
  const state = document.readyState;
  if (state === 'complete' || state === 'interactive') {
    return callback();
  }

  document.addEventListener('DOMContentLoaded', () => {
    callback();
  });
}

onDocumentReady(function () {
  const triggers = document.querySelectorAll('.js-menu');

  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      document.documentElement.classList.toggle('menu-open');
    })
  })

});