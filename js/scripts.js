function Ticket(release, showTime, age) {
  this.release = release
  this.showTime = showTime
  this.age = age
}

Ticket.prototype.price = function() {
  var releasePrices = {};
  releasePrices["new"] = 2;
  releasePrices["old"] = 1;

  var showingPrices;
  if (this.showTime > 1459) {
    showingPrices = 5;
  } else {
    showingPrices = 3;
  }

  var agePrices = {};
  agePrices["child"] = 1;
  agePrices["senior"] = 1;
  agePrices["adult"] = 2;

  var total = releasePrices[this.release] + showingPrices + agePrices[this.age];
  return total;
}

function Movie(movieTitle, release, showTime) {
  this.movieTitle = movieTitle;
  this.release = release;
  this.showTime = showTime;
}
