document.querySelectorAll('.category.disabled')
  .forEach(disabled => {
    disabled.addEventListener('click', () => {
      alert('Coming soon');
    });
  });

function loading(){
  setTimeout(() => {
    document.getElementById('loading').style.display = 'none';
  }, 2000);
  setTimeout(() => {
    document.getElementById('drawer').style.transform = 'translateX(0%)';
  }, 3000);
}

window.onload = function(){
  loading();
}
