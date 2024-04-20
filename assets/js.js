setTimeout(function() {
    document.querySelector('.delayed-text').classList.add('visible');
  }, 3000);
  
  setTimeout(function() {
    document.querySelector('.delayed-text1').classList.add('visible');
  }, 3000);
  
  function toggleTheme() {
    var html = document.querySelector('html');
    if (html.getAttribute('data-theme') === 'light') {
        html.setAttribute('data-theme', 'dark');
    } else {
        html.setAttribute('data-theme', 'light');
    }
}
