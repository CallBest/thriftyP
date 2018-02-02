function toggle(panel) {
  document.getElementById(panel).hidden = !(document.getElementById(panel).hidden);
}

function init() {
  document.getElementById('priceRef').hidden = true;
  document.getElementById('priceCalc').hidden = true;
  document.getElementById('otherinfo').hidden = true;
  document.getElementById('newfill').hidden = true;
  document.getElementById('tanksale').hidden = true;
}

function showtab(tab) {
  $('.nav li').removeClass('active');
  $(this).addClass('active');
  $('#clientinfo').hide();
  $('#otherinfo').hide();
  $('#newfill').hide();
  $('#tanksale').hide();
  $('#'+tab).show();
}