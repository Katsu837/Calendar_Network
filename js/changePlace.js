function changePlace(e)
{
  let photo = document.querySelector(e + 'P');
  let logo = document.querySelector(e + 'L');
  let text = document.querySelector(e + 'T');
  let photoValue = photo.getAttribute('src');
  let logoValue = logo.textContent;
  let textValue = text.textContent;

  let photoC = document.querySelector('.CPhoto');
  let logoC = document.querySelector('.CLabel');
  let textC = document.querySelector('.CText');
  let photoCvalue = photoC.getAttribute('src');
  let logoCvalue = logoC.textContent;
  let textCvalue = textC.textContent;

  document.querySelector('.CLabel').innerHTML = logoValue;
  document.querySelector('.CPhoto').src = photoValue;
  document.querySelector('.CText').innerHTML = textValue;

  document.querySelector(e+'P').src = photoCvalue;
  document.querySelector(e+'L').innerHTML = logoCvalue;
  document.querySelector(e+'T').innerHTML = textCvalue;
}



