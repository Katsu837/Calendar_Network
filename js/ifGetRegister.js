document.addEventListener('DOMContentLoaded', function ()
{
  let regText = document.getElementById('textRegistr');
  let regIcon = document.querySelector('#iconRegistr');

  if (localStorage.getItem('firstName') !== null && localStorage.getItem('secondName') !== null)
  {
    regText.style.display = 'none';
    regIcon.href = 'Options.html';
  }
})
