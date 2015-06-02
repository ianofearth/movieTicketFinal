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

function Movie(movieTitle, release) {
  this.movieTitle = movieTitle;
  this.release = release;
  this.showTimes = [];
}

function resetFields() {
  $("input#release-type").val("")
  $("input#new-movie-title").val("")
  $("input#new-show-time").val("")

}

$(document).ready(function() {
  var allMovies = [];
  $("#add-showtime").click(function(event) {
    event.preventDefault();
    $(".new-show-time-container").last().clone().appendTo("#new-showtimes");
    $(".new-address").last().find("input").each(function(){
      $(this).val("");
    });
  });

  $("form#add-movie").submit(function(event) {
    event.preventDefault();

    var movieTitle = $("input#new-movie-title").val();
    var releaseType = $("select#release-type").val();
    var myMovie = new Movie(movieTitle, releaseType);

    $(".new-show-time").each(function() {
      myMovie.showTimes.push($(this).val());
    });

    $("ul.movies").append("<li class='movie-item'>" + myMovie.movieTitle + "</li>");
    $(".movie-item").last().click(function() {
      $(".movie-info").text(myMovie.movieTitle);
      $("ul.movie-info-times").html(""); //since ul does not have a visible value attribute we need to clear out html and not value (val)
      myMovie.showTimes.forEach(function(showTime) {
        $("ul.movie-info-times").append("<li>" + showTime.toString() + "</li>")
      });
      var index = allMovies.indexOf(myMovie)
      $("form#buy-ticket").data("id", index);
      $("form#buy-ticket").data("release", myMovie.release);

      $("select#ticket-times").html("");

      myMovie.showTimes.forEach(function(showTime) {
        $("select#ticket-times").append("<option value='" + showTime.toString() + "'>" + showTime.toString() + "</option>");
      });
    });

    allMovies.push(myMovie);
    resetFields();
  });

  $("form#buy-ticket").submit(function(event) {
    event.preventDefault();
    var release = $("form#buy-ticket").data("release");
    var showTime = $("select#ticket-times").val();
    var age = $("select#age").val();

    var myTicket = new Ticket(release, showTime, age);
    $("p#price").text(myTicket.price().toString());
  })

});
