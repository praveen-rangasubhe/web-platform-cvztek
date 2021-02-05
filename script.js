var ages = [10, 15, 18, 20];

document.write(ages + "<br>");

var b = ages.some(checkAdult);
document.write(b);

function checkAdult(ages) {
  return ages >= 18;
}
