const viewAmount = document.getElementById("viewAmount");
const costAmount = document.getElementById("costAmount");
const month_year = document.getElementById("month_year");
const progress = document.getElementById("progress");
const range = document.getElementById("range");
const checkbox = document.getElementById("checkbox");

let rangeValue = 3;
let width = "50%";

range.addEventListener("input", (event) => {
  rangeValue = event.target.value;

  if (rangeValue == 1 && chackPoint == "closed") {
    viewAmount.innerText = "10K";
    costAmount.innerText = `$8.00`;
  } else if (rangeValue == 2 && chackPoint == "closed") {
    viewAmount.innerText = "50K";
    costAmount.innerText = `$12.00`;
  } else if (rangeValue == 3 && chackPoint == "closed") {
    viewAmount.innerText = "100K";
    costAmount.innerText = `$16.00`;
  } else if (rangeValue == 4 && chackPoint == "closed") {
    viewAmount.innerText = "500K";
    costAmount.innerText = `$24.00`;
  } else if (rangeValue == 5 && chackPoint == "closed") {
    viewAmount.innerText = "1M";
    costAmount.innerText = `$36.00`;
  }

  if (rangeValue == 1 && chackPoint == "opened") {
    viewAmount.innerText = "10K";
    costAmount.innerText = `$72.00`;
  } else if (rangeValue == 2 && chackPoint == "opened") {
    viewAmount.innerText = "50K";
    costAmount.innerText = `$108.00`;
  } else if (rangeValue == 3 && chackPoint == "opened") {
    viewAmount.innerText = "100K";
    costAmount.innerText = `$144.00`;
  } else if (rangeValue == 4 && chackPoint == "opened") {
    viewAmount.innerText = "500K";
    costAmount.innerText = `$216.00`;
  } else if (rangeValue == 5 && chackPoint == "opened") {
    viewAmount.innerText = "1M";
    costAmount.innerText = `$324.00`;
  }
  // sets progress div's width
  width = ((rangeValue - 1) / 4) * 100 + "%";
  progress.style.width = width;
});

// changes month value into year
let chackPoint = "closed";

checkbox.addEventListener("change", () => {
  if (chackPoint == "closed") {
    let price = parseFloat(costAmount.innerText.replace(/[^\d.-]/g, ""));
    price = (price * 12 * 75) / 100;
    costAmount.innerText = `$${price.toFixed(2)}`;
    chackPoint = "opened";
    month_year.innerText = "/ year";
  } else if (chackPoint == "opened") {
    let price = parseFloat(costAmount.innerText.replace(/[^\d.-]/g, ""));
    price = (price * 100) / 75 / 12;
    costAmount.innerText = `$${price.toFixed(2)}`;
    chackPoint = "closed";
    month_year.innerText = "/ month";
  }
});
