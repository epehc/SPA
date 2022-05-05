const views = [document.getElementById("container-options"), document.getElementById("container-student"),
  document.getElementById("container-staff"), document.getElementById("container-form-student"),
  document.getElementById("container-form-staff")];

class Student{
  constructor(id, firstName, lastName, dob, gender, department, email) {
    this.id = id;
    this.firstName = firstName;
    this.lastName= lastName;
    this.dob= dob;
    this.gender = gender;
    this.department = department;
    this.email= email;
  }
}

class Staff{
  constructor(id, firstName, lastName, dob, gender, email) {
    this.id = id;
    this.firstName = firstName;
    this.lastName= lastName;
    this.dob= dob;
    this.gender = gender;
    this.email= email;
  }
}
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


const students = [new Student("001", "Jose", "Cardona", "08.03.1999",
  "Male", "Comp. Sci", "jose.cardona@htw-berlin.de" )];
const staff = [new Staff("001", "Jose", "Cardona", "08.03.1999",
  "Male", "jose.cardona@htw-berlin.de" )];

const studentButton = document.getElementById('student-add');
/*studentButton.addEventListener('click', (e)=>{
  document.write(document.getElementById('student-id').innerHTML)

   const myTr = document.createElement('tr');
   const myStudentId = document.createElement('td');
  const myFirstName = document.createElement('td');
  const myLastName = document.createElement('td');
  const myDob = document.createElement('td');
  const myGender = document.createElement('td');
  const myDepartment = document.createElement('td');
  const myEmail = document.createElement('td');
  myStudentId.innerHTML = document.getElementById('student-id').innerHTML;
   myTr.appendChild(myStudentId);
  myFirstName.innerHTML = document.getElementById('fname-student').innerHTML;
  myTr.appendChild(myFirstName);
  myLastName.innerHTML = document.getElementById('lname-student').innerHTML;
  myTr.appendChild(myLastName);
  myDob.innerHTML = document.getElementById('dob-student').innerHTML;
  myTr.appendChild(myDob);
  myGender.innerHTML = students[students.length-1].gender;
  myTr.appendChild(myGender);
  myDepartment.innerHTML = students[students.length-1].department;
  myTr.appendChild(myDepartment);
  myEmail.innerHTML = students[students.length-1].emailID;
  myTr.appendChild(myEmail);
   studentList.appendChild(myTr);
});*/

function appendStudent(){
  const myTr = document.createElement('tr');
  const myStudentId = document.createElement('td');
  const myFirstName = document.createElement('td');
  const myLastName = document.createElement('td');
  const myDob = document.createElement('td');
  const myGender = document.createElement('td');
  const myDepartment = document.createElement('td');
  const myEmail = document.createElement('td');
  var inText = '003';
  myStudentId.innerHTML = document.getElementById('student-id').innerHTML;
  myTr.appendChild(inText);
  myFirstName.innerHTML = document.getElementById('fname-student').innerHTML;
  myTr.appendChild(inText);
  myLastName.innerHTML = document.getElementById('lname-student').innerHTML;
  myTr.appendChild(inText);
  myDob.innerHTML = document.getElementById('dob-student').innerHTML;
  myTr.appendChild(inText);
  myGender.innerHTML = students[students.length-1].gender;
  myTr.appendChild(inText);
  myDepartment.innerHTML = students[students.length-1].department;
  myTr.appendChild(inText);
  myEmail.innerHTML = students[students.length-1].emailID;
  myTr.appendChild(inText);
  studentList.appendChild(myTr);
  toggleStudents();
}








