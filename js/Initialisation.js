function run()
{
  if (checkForm())
  {
    comeBack();
    getRename();
  }
}
function comeBack()
{
  document.location = 'index.html';
}

function checkForm()
{
  var name = document.getElementsByClassName('Fname')[0].value;
  var Sname = document.getElementsByClassName('Sname')[0].value;
  var psw = document.getElementsByClassName('Psw')[0].value;
  var pswRep = document.getElementsByClassName('PswR')[0].value;
  var mail = document.getElementsByClassName('Mail')[0].value;
  if(name.length == 0 || Sname.length == 0 || psw.length == 0 || pswRep.length == 0 || mail.length == 0) return false;
  else if(psw.length < 8)
  {
    document.querySelector(".Psw").style.border = 'red 4px solid';
    alert("Cлишком короткий пароль!\nПароль должен содержать более 8 значений");
    return false;
  }
  else if(psw != pswRep)
  {
    document.querySelector(".PswR").style.border = 'red 4px solid';
    alert("Пароли не совпадают!");
    return false;
  }
  else
  {
    document.querySelector(".PswR").style.border ='none';
    document.querySelector(".Psw").style.border ='none';
    return true;
  }
}


function getRename()
{
  var name = document.getElementsByClassName('Fname')[0].value;
  var Sname = document.getElementsByClassName('Sname')[0].value;

  localStorage.setItem('firstName', name);
  localStorage.setItem('secondName', Sname);
}
