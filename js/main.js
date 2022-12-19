document.addEventListener('DOMContentLoaded', function()
{
    let Month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь","Ноябрь","Декабрь"];
    let today = new Date().getDate();
    let month =  new Date().getMonth();
    let year =  new Date().getFullYear();
    let date = new Date();
    console.log(year);
    console.log( Month[month] + " " + year);
    localStorage.setItem('tempMonth', month);
    localStorage.setItem('tempYear', year);
    document.getElementById('monYear').innerHTML = Month[month] + " " + year;

    let dayOfWeek = new Date(year, month, 1).getDay();
    console.log(dayOfWeek);
    let x = 0;
    if(dayOfWeek == 0) x = 6;
    else x = dayOfWeek-1;

    let count = 0;
    switch (month)
    {
      case 0, 2, 4, 6, 7, 9, 11: count = 31; break;
      case 3, 5, 8, 10: count = 30; break;
      case 1:
        if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) count = 29;
        else count = 28;
        break;
    }
    let TDs = document.getElementsByClassName('Numbers')[0].getElementsByTagName('td');
    for (i = x, ii=1; i < count+x; i++)
    {
      TDs[i].innerHTML = ii;
      if(ii == today)
      {
        TDs[i].style.background = 'rgb(0,0,0, 0.2)';
        TDs[i].style.borderRadius = '10px'
        localStorage.setItem('todayIndex', i);
      }
      ii++;
    }
    tempDay();
}, false);


function tempDay ()
{
  var today = new Date();
  var tomorrow1 = new Date(today.getTime() + (24 * 60 * 60 * 1000));
  var tomorrow2 = new Date(today.getTime() + 2*(24 * 60 * 60 * 1000));
  var tomorrow3 = new Date(today.getTime() + 3*(24 * 60 * 60 * 1000));
  var dayOfWeek = ['Понедельник', 'Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
  let Month = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября","Ноября","Декабря"];
  let x = 0;
  if(today.getDay() == 0) x = 6;
  else x = today.getDay()-1;
  document.getElementById('todayDate').innerHTML = today.getDate() + " " + Month[today.getMonth()] + ", " + dayOfWeek[x];
  if(tomorrow1.getDay() == 0) x = 6;
  else x = tomorrow1.getDay()-1;
  document.getElementById('tomorrowDate1').innerHTML = tomorrow1.getDate() + " " + Month[tomorrow1.getMonth()] + ", " + dayOfWeek[x];
  if(tomorrow2.getDay() == 0) x = 6;
  else x = tomorrow2.getDay()-1;
  document.getElementById('tomorrowDate2').innerHTML = tomorrow2.getDate() + " " + Month[tomorrow2.getMonth()] + ", " + dayOfWeek[x];
  if(tomorrow3.getDay() == 0) x = 6;
  else x = tomorrow3.getDay()-1;
  document.getElementById('tomorrowDate3').innerHTML = tomorrow3.getDate() + " " + Month[tomorrow3.getMonth()] + ", " + dayOfWeek[x];
}
