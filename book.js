const container = document.querySelector('.container');
const seats = document.querySelectorAll('.a2 .seat:not(.occupied)');
const count = document.getElementById('count');
const selseats = document.getElementById('selseats');
const price = document.getElementById('price');
const array = [];
const rating = 6;
const popularity = 500;
var price_per_seat;

const populateUI = () => {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }
};

const updateSelectedSeatsCount = () => {
  const selectedSeats = document.querySelectorAll('.a2 .selected');

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  if(array.length>0){
    document.getElementById("selseatsdiv").style.color = "#00ffff";
    selseats.innerText = "Selected seats: " + array.join();
  }
  else
    selseats.innerText = "";

  price.innerText = selectedSeatsCount * price_per_seat;
};

// Seat select event
container.addEventListener('click', e => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
    document.getElementById("selseats").innerText= "";
    e.target.classList.toggle('selected');
    let a = e.target.getAttribute("name");
    if(array.includes(a)){
      var ind = array.indexOf(a);
      array.splice(ind,1);
    }
    else
      array.push(a);
    updateSelectedSeatsCount();
    populateUI();
  }
});

function book(){
  if(array.length == 0){
    document.getElementById("selseatsdiv").style.color = "#ff1a1a";
    selseats.innerText = "No seats selected!";
  }
  else{
    for(var i=0; i<array.length; i++)
      document.getElementById(array[i]).className = "seat occupied";
    selseats.innerText = "";
    document.getElementById("selseatsdiv").style.color = "#66ff66";
    selseats.innerText = "Booked seats: " + array.join() + " successfully!";
  }
}

function loadseats(){
  var arrayseats = [];
  var num_of_seats = Math.floor((Math.random() * 10) + 8);
  var i;
  for(i=0; i<num_of_seats; i++){
    var alpha = Math.floor((Math.random() * 6) + 1);
    var num = Math.floor((Math.random() * 8) + 1);
    var seatname = String.fromCharCode(64 + alpha) + num.toString();
    if(arrayseats.includes(seatname)){
      i -= 1;
      continue;
    }
    arrayseats.push(seatname);
    document.getElementById(seatname).className = "seat occupied";
    setPrice(rating);
  }
}

function setPrice(n){
  price_per_seat = 150 * n/10; 
}
