document.addEventListener('DOMContentLoaded', function ()
{
  let fullName = document.getElementById('fullName');
  if (localStorage.getItem('firstName') !== null && localStorage.getItem('secondName') !== null)
  {
    fullName.innerHTML = localStorage.getItem('firstName') + " " + localStorage.getItem('secondName');
  }
})
