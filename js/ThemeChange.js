document.addEventListener('DOMContentLoaded', function()
{
  let body = document.querySelector('body');
  let button = document.querySelector('.button');
  var stl = localStorage.getItem('key1');
  var butt;
  if(localStorage.getItem('key2') !== null) butt = localStorage.getItem('key2');
  else butt = 'light-theme';
  if( stl === 'Dark-Theme')
  {
    body.classList.toggle('Light-Theme');
    body.classList.toggle('Dark-Theme');
    document.querySelector('.first').style.color = 'mediumseagreen';
    document.querySelector('.second').style.color = 'mediumseagreen';
    document.querySelector('.third').style.color = 'mediumseagreen';
    document.querySelector('.fourth').style.color = 'mediumseagreen';
    document.querySelector('.one').style.color = 'mediumseagreen';
    document.querySelector('.two').style.color = 'mediumseagreen';
    document.querySelector('.three').style.color = 'mediumseagreen';
    document.querySelector('.four').style.color = 'mediumseagreen';
    document.querySelector('.Registration a').style.color = 'mediumseagreen';
    document.getElementById("themeButton").textContent = 'Cветлая тема';
  }
  else
  {
    document.querySelector('.first').style.color = 'black';
    document.querySelector('.second').style.color = 'black';
    document.querySelector('.third').style.color = 'black';
    document.querySelector('.fourth').style.color = 'black';
    document.querySelector('.one').style.color = 'black';
    document.querySelector('.two').style.color = 'black';
    document.querySelector('.three').style.color = 'black';
    document.querySelector('.four').style.color = 'black';
    document.querySelector('.Registration a').style.color = 'black';
  }
  document.getElementById("themeButton").classList = butt;
}, false);


