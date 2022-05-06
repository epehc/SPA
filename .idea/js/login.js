
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
  console.log(counter)
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
