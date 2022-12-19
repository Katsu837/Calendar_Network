let button = document.querySelector('.button');
let body = document.querySelector('body');
let theme = "light-theme";
button.onclick = function ()
{
  button.classList.toggle('light-theme');
  button.classList.toggle('dark-theme');
  body.classList.toggle('Light-Theme');
  body.classList.toggle('Dark-Theme');
  localStorage.setItem('key1', body.className);
  localStorage.setItem('key2', button.className)
  if(button.className === theme)
  {
    button.textContent = 'Темная тема';
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
  else
  {
    button.textContent = 'Cветлая тема';
    document.querySelector('.first').style.color = 'mediumseagreen';
    document.querySelector('.second').style.color = 'mediumseagreen';
    document.querySelector('.third').style.color = 'mediumseagreen';
    document.querySelector('.fourth').style.color = 'mediumseagreen';
    document.querySelector('.one').style.color = 'mediumseagreen';
    document.querySelector('.two').style.color = 'mediumseagreen';
    document.querySelector('.three').style.color = 'mediumseagreen';
    document.querySelector('.four').style.color = 'mediumseagreen';
    document.querySelector('.Registration a').style.color = 'mediumseagreen';
  }
}
