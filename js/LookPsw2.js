function LookPsw2()
{
  var psw = document.getElementById("Psw");
  if (psw.type === "password")  psw.type = "text";
  else psw.type = "password";

}
