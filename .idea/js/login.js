class User{
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
}

const staff_members = [new User(user1, pass1), new User(user2, pass2), new User(user3, pass3)];
const admin_members = [new User(admin1, pass1), new User(admin2, pass2)];


function validateFormAdmin(){
  if(counter < 3){
    for(let i =0; i < staff_members.length; i++){
      if(staff-username == 'admin'
        && staff-password == 'pass'){
        return true;
      }
    }
    counter++;
    return false;
  }
  button.disable = true;
}

const counter = 0;
const button = document.getElementById('button-submit')
function validateFormStaff(){
  if(counter < 3){
    for(let i =0; i < staff_members.length; i++){
      if(staff-username == 'user'
        && staff-password == 'pass'){
        return true;
      }
    }
    counter++;
    return false;
  }
  button.disable = true;

}
