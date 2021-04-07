function paid(){
  event.preventDefault();
  var number=document.form.number.value;
  var expiry=document.form.expiry.value;
  var cvc=document.form.cvc.value;
  var name=document.form.name.value;
  var datecheck=/^\d{2}\s\/\s\d{4}$/;
  if(number.length<16){
    document.getElementById("error1").innerHTML="*Please enter full card number";
  }
  else{
    document.getElementById("error1").innerHTML="";
  }
  if(!expiry.match(datecheck)){
    document.getElementById("error2").innerHTML="*Please enter a proper date";
  }
  else{
    document.getElementById("error2").innerHTML="";
  }
  if(cvc.length<4){
    document.getElementById("error3").innerHTML="*Please enter a proper CVC";
  }
  else{
    document.getElementById("error3").innerHTML="";
    document.getElementById("pay-btn").innerHTML="Booking Confirmed!";
  }
}

var activeDropdown;

function select(){
  
  var cardDrop = document.getElementById('card-dropdown');
  
  cardDrop.addEventListener('click',function(){
      var node;
      for (var i = 0; i < this.childNodes.length-1; i++)
      node = this.childNodes[i];
      if (node.className === 'dropdown-select') {
          node.classList.add('visible');
          activeDropdown = node; 
          console.log(activeDropdown);
      };
  })

    window.onclick = function(e){
      console.log(e.target.tagName)
      //console.log('dropdown');
      console.log(activeDropdown)
      if (e.target.tagName === 'LI' && activeDropdown){
      if (e.target.innerHTML === 'Master Card') {
        document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/2vbqk5lcpi7hjoc/MasterCard_Logo.svg.png';
        activeDropdown.classList.remove('visible');
        activeDropdown = null;
        e.target.innerHTML = document.getElementById('current-card').innerHTML;
        document.getElementById('current-card').innerHTML = 'Master Card';
      }
      else if (e.target.innerHTML === 'American Express') {
        document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/f5hyn6u05ktql8d/amex-icon-6902.png';
        activeDropdown.classList.remove('visible');
        activeDropdown = null;
        e.target.innerHTML = document.getElementById('current-card').innerHTML;
        document.getElementById('current-card').innerHTML = 'American Express';      
      }
      else if (e.target.innerHTML === 'Visa') {
        document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png';
        activeDropdown.classList.remove('visible');
        activeDropdown = null;
        e.target.innerHTML = document.getElementById('current-card').innerHTML;
        document.getElementById('current-card').innerHTML = 'Visa';
      }
      }
      else if (e.target.className !== 'dropdown-btn' && activeDropdown) {
      activeDropdown.classList.remove('visible');
      activeDropdown = null;
      }
  }
}






