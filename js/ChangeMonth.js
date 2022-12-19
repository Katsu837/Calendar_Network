function ChangeMonth(d)
{
  let Month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь","Ноябрь","Декабрь"];
  let month = Number(localStorage.getItem('tempMonth')) + d;
  let year = Number(localStorage.getItem('tempYear'));
  let today = new Date();

  if(month == 12)
  {
    month = 0;
    year++;
  }
  if(month == -1)
  {
    month = 11;
    year--;
  }
  localStorage.setItem('tempMonth', month);
  localStorage.setItem('tempYear', year);

  document.getElementById('monYear').innerHTML = Month[month] + " " + year;

  let dayOfWeek = new Date(year, month, 1).getDay();
  let x = 0;
  if(dayOfWeek == 0) x = 6;
  else x = dayOfWeek-1;
  let count = 0;
  switch (month)
  {
    case 2, 4, 6, 7, 9, 11: count = 31; break;
    case 3, 5, 8, 10: count = 30; break;
    case 1:
      if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) count = 29;
      else count = 28;
      break;
    default: count = 31; break;
  }
  let TDs = document.getElementsByClassName('Numbers')[0].getElementsByTagName('td');
  for(let j = 0; j < 37; j++)
  {
    TDs[j].innerHTML = " ";
    TDs[j].style.background = 'transparent';
    if(month == today.getMonth() && year == today.getFullYear() && j == Number(localStorage.getItem('todayIndex')))
    {
      TDs[j].style.background = 'rgb(0,0,0, 0.2)';
      TDs[j].style.borderRadius = '10px';
    }
  }
  for (i = 0, ii=1; i < count; i++)
  {
    TDs[i+x].innerHTML = ii;
    ii++;
  }
}
