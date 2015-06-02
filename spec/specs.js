describe("Ticket", function() {
  it("will return all of it's properties", function() {
    var myTicket = new Ticket("new", "standard", "adult");
    expect(myTicket.release).to.eq("new");
    expect(myTicket.showTime).to.eq("standard");
    expect(myTicket.age).to.eq("adult");
  });

  it("will return the price for a ticket of an entered type", function() {
    var myTicket = new Ticket("new", 2000, "adult");
    expect(myTicket.price()).to.eq(9);
  });
});

describe("Movie", function() {
  it("will return all of a movies properties", function() {
    var myMovie = new Movie("Kevin Codes: in 3D!", "new", 2000)
    expect(myMovie.movieTitle).to.eq("Kevin Codes: in 3D!");
    expect(myMovie.release).to.eq("new");
    expect(myMovie.showTime).to.eq(2000);
  });

  it("will return the price for a selected movie, showtime and age", function() {
    var myMovie = new Movie("Kevin Codes: in 3D!", "new", 2000);
    var myTicket = new Ticket(myMovie.release, myMovie.showTime, "adult");
    expect(myTicket.price()).to.eq(9);  //this needs () after price since it is a method
  });
});
