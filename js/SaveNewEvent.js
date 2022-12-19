function saveNewEvent()
{
  let today = new Date().getDate();
  let nameEvent = document.getElementById('nameEvent').value;
  let dateEvent = document.getElementById('dateEvent').value;
  dayEvent = dateEvent.charAt(8) + dateEvent.charAt(9);
  let startTimeEvent = document.getElementById('startTimeEvent').value;
  let endTimeEvent = document.getElementById('endTimeEvent').value;
  let form = document.getElementsByClassName('formNewEvent');

  let div1 = document.getElementById('EventDiv1');
  let div2 = document.getElementById('EventDiv2');
  let div3 = document.getElementById('EventDiv3');
  let tempDiv;

  let strNameEvent = document.createElement("p");
  let strTimeEvent = document.createElement("p");
  strNameEvent.className = 'strNameEvent';
  strTimeEvent.className = 'strTimeEvent';
  strNameEvent.innerHTML = nameEvent;
  strTimeEvent.innerHTML = startTimeEvent + " - " + endTimeEvent;

  let startTimeH = startTimeEvent.charAt(0) + startTimeEvent.charAt(1);
  let endTimeH = endTimeEvent.charAt(0) + endTimeEvent.charAt(1);
  let startTimeM = startTimeEvent.charAt(3) + startTimeEvent.charAt(4);
  let endTimeM = endTimeEvent.charAt(3) + endTimeEvent.charAt(4);
  startTimeH = Number(startTimeH);
  endTimeH = Number(endTimeH);

  console.log(startTimeH);
  console.log(endTimeH);
  console.log(dayEvent);

  if(startTimeH > endTimeH || (startTimeH === endTimeH && startTimeM <= endTimeM))
  {
    alert("Невозможно создать событие!");
    return false;
  }

  if(Number(dayEvent) <= Number(today) + 3 && Number(dayEvent) >= Number(today))
  {
    if(Number(dayEvent) == Number(today))
    {
      for(i = startTimeH; i < endTimeH + 1; i++)
      {
        tempDiv = document.getElementById(i);
        tempDiv.style.background = 'rgb(255,255,255, .2)';
        tempDiv.style.border = 'none';
        tempDiv.style.margin = '0 4px';
      }
      document.getElementById(startTimeH).style.borderTopLeftRadius = '15px';
      document.getElementById(startTimeH).style.borderTopRightRadius = '15px';
      document.getElementById(startTimeH).style.margin = '2px 4px 0 4px';
      document.getElementById(endTimeH).style.borderBottom = '1px solid black'
      strTimeEvent.className = 'strTimeEventWithoutLine';
      document.getElementById(startTimeH).append(strNameEvent);
      document.getElementById(startTimeH + 1).append(strTimeEvent);
    }
    else if(Number(dayEvent) == Number(today) + 1)
    {
      div1.append(strNameEvent);
      div1.append(strTimeEvent);
    }
    else if (Number(dayEvent) == Number(today) + 2)
    {
      div2.append(strNameEvent);
      div2.append(strTimeEvent);
    }
    else if (Number(dayEvent)  == Number(today) + 3)
    {
      div3.append(strNameEvent);
      div3.append(strTimeEvent);
    }
  }
  document.querySelector('.formNewEvent').reset();
  document.getElementById('id01').style.display='none';
}
