/*
* javascript for web form for login and signup using local storage
* author: suchita mohanty;
*/

// event for login button click
var showLogin = function function_name(e) {
  document.getElementById('login-content').style.display = 'block';
  document.getElementById('landing-content').style.display = 'none';
}

// event for login-back button click
var hideLogin = function(e){
  document.getElementById('login-content').style.display = 'none';
  document.getElementById('landing-content').style.display = 'block';
}

// event for signup button click
var showSignUp = function function_name(e) {
  document.getElementById('signup-content').style.display = 'block';
  document.getElementById('landing-content').style.display = 'none';
}

// event for signup-back button click
var hideSignup = function(e) {
  document.getElementById('signup-content').style.display = 'none';
  document.getElementById('landing-content').style.display = 'block';
}

// submit user login
var loginSubmit = function(e) {
  var username = document.getElementById('login_username').value;
  var password = document.getElementById('login_password').value;
  if (username === sessionStorage.username && password === sessionStorage.password) {
    showMessage('Successfully loggedin');
    document.getElementById('user').innerText = username;
    document.getElementById('welcome-content').style.display = 'block'
    document.getElementById('login-content').style.display = 'none'
  }
  else {
    showMessage('login failed');
  }
  return false;
}

// handle user sign up
var signupSubmit = function(e) {
  sessionStorage.username = document.getElementById('username').value;
  sessionStorage.password = document.getElementById('password').value;
  sessionStorage.email = document.getElementById('email').value;
  showMessage('Successfully signed up');
  hideSignup();
  return false;
}

// show success or error message
var showMessage = function(msg){
  document.getElementById('message').innerText = msg;
  setInterval(function(){
    document.getElementById('message').innerText = '';
  }, 3000);
}

// handle logout
var logout = function() {
  document.getElementById('landing-content').style.display = 'block';
  document.getElementById('welcome-content').style.display = 'none';

  return false;
}