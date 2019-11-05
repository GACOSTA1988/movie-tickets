// Ticket contstuctor
function Ticket(name, date, time, age){
  this.name = name,
  this.date = date,
  this.time = time,
  this.age = age
}
var totalPrice = 0

// Prototype to calculate price
Ticket.prototype.price = function price(userTicket){
  if(this.age < 18 || this.age > 60  ){
    var ageModifier = -3
  } else if (this.age > 18 && this.age < 60 ){
    var ageModifier = 0
  } else {

  }
  totalPrice = this.name + this.date + this.time + ageModifier;
}

// Standalone function to calculate price
// function price(userTicket){
//   if(userTicket.age < 18 || userTicket.age > 60  ){
//     var ageModifier = -3
//   } else if (userTicket.age > 18 && userTicket.age < 60 ){
//     var ageModifier = 0
//   } else {
//
//   }
//   totalPrice = userTicket.name + userTicket.date + userTicket.time + ageModifier;
// }


// Display ticket info function
function showTicketDetails(ticket) {
  var name = ""
  var date = ""
  var time = ""
  var age = ""
  // Assigning Names based on values
  if (ticket.name == 20) {
    name = "Dark Knight"
  } else if (ticket.name ==30) {
    name = "Star Wars"
  } else if (ticket.name == 40) {
    name = "IT"
  }
  if (ticket.date == -2) {
    date = "Thursday Showing"
  } else if (ticket.date == 2) {
    date = "Friday Showing"
  }
  if (ticket.time == -3) {
    time = "Day Showing"
  }else if (ticket.time == 3){
    time = "Night Showing"
  }
  if (ticket.age < 18){
    age = "Youth Ticket"
  } else if (ticket.age > 60){
    age = "Senior Ticket"
  } else {
    age = "Adult Ticket"
  }
  // Showing everything
  $("ticketDetails").show();
  $(".movie-choice").html(name);
  $(".date-choice").html(date);
  $(".time-choice").html(time);
  $(".age-input").html(age);
  $(".price").html(totalPrice)

}



// Setting variables and running functions on submit
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault()
    var userName = $("#option1").val();
    var userDate = $("#option2").val();
    var userTime = $("#option3").val();
    var userAge = $("#option4").val();

    var userTicket = new Ticket (parseInt(userName), parseInt(userDate), parseInt(userTime), parseInt(userAge));
    userTicket.price(userTicket)
    showTicketDetails(userTicket);
  })
});
