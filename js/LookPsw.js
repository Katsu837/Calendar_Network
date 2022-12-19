function LookPsw()
{
  var psw = document.getElementById("Psw");
  var pswR = document.getElementById("PswR");
  if (psw.type === "password")
  {
    psw.type = "text";
    pswR.type = "text";
  }
  else
  {
    psw.type = "password";
    pswR.type = "password";
  }
}
