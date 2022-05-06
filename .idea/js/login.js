var counterAdmin = 3;
function validateFormAdmin(){
  var authorized = false;
  var adminUsername =  document.getElementById('admin-username').value;
  var adminPassword = document.getElementById('admin-password').value;
  if(counterAdmin > 1){
    if(adminUsername == "admin" && adminPassword == "pass"){
      authorized = true;

    }
    else{
      authorized = false;
      counterAdmin--;
      alert("wrong username/password. Attempts remaining: " + counterAdmin);
    }
    return authorized;
  }
   else{
     alert("No attempts left.");
     disableAdminButton();
     return false;
  }
}

function disableAdminButton(){
  var button = document.getElementById('button-submit-admin');
  button.disabled = true;
}

function disableStaffButton(){
  var button = document.getElementById('button-submit-staff');
  button.disabled = true;
}

var staffCounter = 3;
function validateFormStaff(){
  var authorized = false;
  var adminUsername =  document.getElementById('staff-username').value;
  var adminPassword = document.getElementById('staff-password').value;
  if(staffCounter > 1){
    if(adminUsername == "user" && adminPassword == "pass"){
      authorized = true;

    }
    else{
      authorized = false;
      staffCounter--;
      alert("wrong username/password. Attempts remaining: " + staffCounter);
    }
    return authorized;
  }
  else{
    alert("No attempts left.");
    disableStaffButton();
    return false;
  }
}
