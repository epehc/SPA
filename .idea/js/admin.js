const views = [document.getElementById("container-options"), document.getElementById("container-student"),
  document.getElementById("container-staff"), document.getElementById("container-form-student"),
  document.getElementById("container-form-staff")];

document.getElementById('joining-date-student').max = new Date().toISOString().split("T")[0];
document.getElementById('joining-date-staff').max = new Date().toISOString().split("T")[0];


function toggleViewsOff(){
  for (let i =0; i<views.length; i++){
    views[i].style.display = "none";
  }
}

function toggleStart(){
  toggleViewsOff();
  views[0].style.display="block";
}

function toggleStudents(){
  toggleViewsOff();
  views[1].style.display="block";
}

function toggleStaff(){
  toggleViewsOff();
  views[2].style.display="block";
}

function toggleStudentsAdd(){
  toggleViewsOff();
  views[3].style.display="block";
}

function toggleStaffAdd(){
  toggleViewsOff();
  views[4].style.display="block";
}

const studentList = document.getElementById("all-students");
const staffList = document.getElementById("all-staff");

function appendStudent(){
  var myTr = document.createElement('tr');
  var myStudentId = document.createElement('td');
  var myFirstName = document.createElement('td');
  var myLastName = document.createElement('td');
  var myDob = document.createElement('td');
  var myGender = document.createElement('td');
  var myDepartment = document.createElement('td');
  var myEmail = document.createElement('td');

  myStudentId.innerHTML = document.getElementById('student-id').value;
  myTr.appendChild(myStudentId);
  myFirstName.innerHTML = document.getElementById('fname-student').value;
  myTr.appendChild(myFirstName);
  myLastName.innerHTML = document.getElementById('lname-student').value;
  myTr.appendChild(myLastName);
  myDob.innerHTML = document.getElementById('dob-student').value;
  myTr.appendChild(myDob);
  myGender.innerHTML = document.querySelector('input[name="gender-student"]:checked').value;
  myTr.appendChild(myGender);
  var select = document.getElementById('department-student');
  myDepartment.innerHTML =select.options[select.selectedIndex].text;
  myTr.appendChild(myDepartment);
  myEmail.innerHTML = document.getElementById('email-student').value;
  myTr.appendChild(myEmail);
  studentList.appendChild(myTr);
  toggleStudents();

}

function appendStaff(){
  var myTr = document.createElement('tr');
  var myStaffId = document.createElement('td');
  var myFirstName = document.createElement('td');
  var myLastName = document.createElement('td');
  var myDob = document.createElement('td');
  var myGender = document.createElement('td');
  var myDepartment = document.createElement('td');
  var myEmail = document.createElement('td');

  myStaffId.innerHTML = document.getElementById('staff-id').value;
  myTr.appendChild(myStaffId);
  myFirstName.innerHTML = document.getElementById('fname-staff').value;
  myTr.appendChild(myFirstName);
  myLastName.innerHTML = document.getElementById('lname-staff').value;
  myTr.appendChild(myLastName);
  myDob.innerHTML = document.getElementById('dob-staff').value;
  myTr.appendChild(myDob);
  myGender.innerHTML = document.querySelector('input[name="gender-staff"]:checked').value;
  myTr.appendChild(myGender);
  myEmail.innerHTML = document.getElementById('email-staff').value;
  myTr.appendChild(myEmail);
  staffList.appendChild(myTr);
  toggleStaff();
}



