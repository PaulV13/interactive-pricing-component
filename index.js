var slider = document.getElementById("slider");
var output = document.getElementById("value");

var priceDecimal = Number.parseFloat(slider.value).toFixed(2);
output.innerHTML = "$" + priceDecimal;

slider.oninput = function () {
  var x = this.value;
  var price = Number.parseFloat(x).toFixed(2);
  output.innerHTML = "$" + price;
};

slider.addEventListener("input", function () {
  var x = slider.value;

  var color = `linear-gradient(90deg, #11d8c5, ${x}%, #c5d2ff ${x}%)`;

  slider.style.background = color;
});
