//Hamburger menu for mobile navigation

const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.navlinks-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

//availability booking

const formBook = document.getElementById('form-book');
const userName = document.getElementById('name-book');
const userEmail = document.getElementById('email-book');
const dateStart = document.getElementById('date-start');  
const dateEnd = document.getElementById('date-end');  

//add listener for form to check inputs before submitting

formBook.addEventListener("submit", e => {
  //prevents form from submitting
  e.preventDefault();
  //check all inputs for empty string or type
  checkInputs();
});

// tell user the inputs are not filled out correctly

function checkInputs (){
  //get values from inputs and add trim to clear whitespace

  const usernameValue = userName.value.trim();
  const useremailValue = userEmail.value.trim();
  const dateStartValue = dateStart.value;
  const dateEndValue = dateEnd.value;

  if(usernameValue === ''){
    // show error
    // add error class
    setError(userName, 'Name cannot be blank.'); 
  } else{
    // add success class
    setSuccess(userName);
  }

  if(useremailValue === ''){
    // show error
    // add error class
    setError(userEmail, 'Please enter a valid email.'); 
  } else{
    // add success class
    setSuccess(userEmail);
  }

  if(!dateStartValue, !dateEndValue){
    // show error
    // add error class
    console.log('no date value');
    dateEmpty(dateStart, dateEnd); 
  } else{
    // add success class
    dateFilled(dateStart, dateEnd);
    console.log('date start value');
  }

};

function setError(input, message) {
  const formEntry = input.parentElement; //declare variable for parent div of input (.form-entry)
  const small = formEntry.querySelector('small');

  //add error message inside small tag
  small.innerText = message;

  //add error class
  formEntry.className = 'form-entry error';

};

//add functionality so class automatically updates to success when user types in more than 2 characters for name and email is validated

function setSuccess(input) {
  const formEntry = input.parentElement;
  formEntry.className = 'form-entry success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function dateEmpty(dateStart, dateEnd) {
  dateStart.className = 'date-book error';  
  dateEnd.className = 'date-book error';  
  console.log('error');
}

function dateFilled(dateStart, dateEnd) {
  dateStart.className = 'date-book success';  
  dateEnd.className = 'date-book success';  
  console.log('working');
}