// Getting the elements
var buttonEl = document.getElementById('button');
var secretEl = document.querySelector('.secret');
console.log('secretEl');

// Defining a function for it.
var checkDetails = function(e) {
  var idValueEl = document.getElementById('id').value;
  var passwordValueEl = document.getElementById('password').value;
  var idOne = 'admin';
  var passOne = 'yash';
  e.preventDefault();

  if (idValueEl == idOne && passwordValueEl == passOne) {
    secretEl.className = 'granted';
    secretEl.style.display = 'inline';
  } else {
    alert(
      'The ID and Password you have entered are not correct please try again.'
    );
  }
};

console.log('idEl');
console.log('passwordEl');
console.log('buttonEl');
console.log('checkDetails');

buttonEl.addEventListener('click', checkDetails);
