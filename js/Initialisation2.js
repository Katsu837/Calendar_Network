function run()
{
  if (checkForm())
  {
    comeBack();
  }
}
function comeBack()
{
  console.log('fsdfdsfdf');
  document.location = 'index.html';
}

function checkForm()
{
  var psw = document.getElementsByClassName('Psw')[0].value;
  var mail = document.getElementsByClassName('Mail')[0].value;
  if(psw.length == 0 || mail.length == 0) return false;
  else if(psw.length < 8)
  {
    document.querySelector(".Psw").style.border = 'red 4px solid';
    alert("Cлишком короткий пароль!\nПароль должен содержать более 8 значений");
    return false;
  }
  return true;
}
