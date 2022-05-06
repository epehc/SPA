const counterAdmin = 0;
const buttonAdmin = document.getElementById('button-submit');
var adminUsername =  document.getElementById('admin-username');
var adminPassword = document.getElementById('admin-password');

function validateFormAdmin(){
  console.log(counterAdmin);
  counterAdmin++;
  console.log(counterAdmin);
  if(counterAdmin < 3){
    for(let i =0; i < staff_members.length; i++){
      if(adminUsername.value == 'admin'
        && adminPassword.value == 'pass'){
        return true;
      }
    }
    counterAdmin++;
    return false;
  }
  buttonAdmin.disable = true;
}

const counterStaff = 0;
const buttonStaff = document.getElementById('button-submit');
var staffUsername =  document.getElementById('staff-username');
var staffPassword = document.getElementById('staff-password');

function validateFormStaff(){
  console.log(counterStaff);
  counterStaff++;
  console.log(counterStaff);
  if(counterStaff < 3){
    for(let i =0; i < staff_members.length; i++){
      if(staffUsername.value == 'user'
        && staffPassword.value == 'pass'){
        return true;
      }
    }
    counterStaff++;
    return false;
  }
  buttonStaff.disable = true;

}
