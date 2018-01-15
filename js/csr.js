function toggle(panel) {
  document.getElementById(panel).hidden = !(document.getElementById(panel).hidden);
}

function init() {
  document.getElementById('priceRef').hidden = true;
  document.getElementById('priceCalc').hidden = true;
}