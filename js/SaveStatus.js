function saveStatus()
{
  let status = document.getElementById('Status').value;
  document.getElementById('Status').style.display = 'none';
  document.getElementById('saveStatus').style.display = 'none';
  document.getElementById('textStatus').style.display = 'block'
  document.getElementById('textStatus').innerHTML = status;
}
