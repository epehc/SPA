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


//Constant variables
const studentList = document.querySelector("#all-students");
const staffList = document.querySelector("#all-staff");
const students = [];
const staff = [];


function appendStudent(){
  //create a student with the information from the form, and push it to the student list
  var student = {
    "id": document.getElementById('student-id').value,
    "firstName": document.getElementById('fname-student').value,
    "lastName": document.getElementById('lname-student').value,
    "dob" : document.getElementById('dob-student').value,
    "gender": document.querySelector('input[name="gender-student"]:checked').value,
    "department": document.getElementById('department-student').options[document.getElementById('department-student').selectedIndex].text,
    "joiningDate": document.getElementById('joining-date-student').value,
    "email": document.getElementById('email-student').value
  };

  //Add the student to the students array
  students.push(student);

  //update the student table
  updateTableStudents();

  //switch back to the student list view
  toggleStudents();

  //reset the form for whenever a new one wants to be filled out to be blank
  document.getElementById('form-add-student').reset();

}

function appendStaff(){

  //create a staff member object based on the information filled out on the form and add it to staff list
  var member = {
    "id": document.getElementById('staff-id').value,
    "firstName": document.getElementById('fname-staff').value,
    "lastName": document.getElementById('lname-staff').value,
    "dob" : document.getElementById('dob-staff').value,
    "gender": document.querySelector('input[name="gender-staff"]:checked').value,
    "department": document.getElementById('department-staff').options[document.getElementById('department-staff').selectedIndex].text,
    "joiningDate": document.getElementById('joining-date-staff').value,
    "email": document.getElementById('email-staff').value
  };

  //add the member to the staff array
  staff.push(member);

  //update the staff table
  updateTableStaff();

  //toggle the staff view and reset the form to a blank state
  toggleStaff();
  document.getElementById('form-add-staff').reset();
}

function updateTableStudents(){
  //Use a forEach function to reduce the amount of lines of code needed to add a student to the list
  students.forEach(student =>{

      //Create a tr element to add all td elements to
      let myTr = document.createElement('tr');

      //Create a td element for every value in a student Object (not joiningDate, which is irrelevant for the table)
      for(let [key, value] of Object.entries(student)) {
        if(key != 'joiningDate'){
          let myTd = document.createElement('td');
          let textNode = document.createTextNode(value);

          //add the textNode to the td
          myTd.appendChild(textNode);

          //add the td to the tr
          myTr.appendChild(myTd);
        }
    };

      //add the tr to the table
    studentList.appendChild(myTr);
  });
}

function updateTableStaff(){

  //Use a forEach function to reduce the amount of lines of code needed to add a member to the list
  staff.forEach(member =>{
    //Create a tr element to add all td elements to
      let myTr = document.createElement('tr');

    //Create a td element for every value in a member Object (not joiningDate, which is irrelevant for the table)
      for(let [key, value] of Object.entries(member)) {
        if(key != 'joiningDate'){
          let myTd = document.createElement('td');
          console.log(value);
          let textNode = document.createTextNode(value);

          //add the textNode to the td
          myTd.appendChild(textNode);

          //add the td to the tr
          myTr.appendChild(myTd);
        }
    };

    //add the tr to the table
    staffList.appendChild(myTr);
  });
}



function filterStudents(){
  //make an array with all table rows
  var tr = studentList.getElementsByTagName('tr');

  //variable with what the filters should be
  var selectDepartment = document.getElementById('info-bar-student-departments').options[document.getElementById('info-bar-student-departments').selectedIndex].text;
  var selectSemester = document.getElementById('info-bar-student-semesters').options[document.getElementById('info-bar-student-semesters').selectedIndex].text



  //check to see if the rows match the filter
  for(let i = 1; i < tr.length; i++){
    let tdDepartment =  tr[i].getElementsByTagName('td')[5].innerHTML;
    let studentJoinDate = new Date(students[i-1].joiningDate);
    let month = studentJoinDate.getMonth()+1;
    let semester;
    if(month >=10 || month <= 3){
      semester = 'Winter';
    }else if(month >= 4 || month <= 9){
      semester = 'Summer'
    }
    if(tdDepartment != selectDepartment || semester != selectSemester){
      //hide the table rows that don't match the filters
      tr[i].style.display = 'none';
    }
  }
}


function resetFilterStudents(){
  //make an array with all table rows
  var tr = studentList.getElementsByTagName('tr');
  for(let i = 1; i < tr.length; i++){
    //reset the standard display for all tr
    tr[i].style.display = '';
  }
}

function filterStaff(){
  //make an array with all table rows
  var tr = staffList.getElementsByTagName('tr');

  //variable with what the filters should be
  var selectDepartment = document.getElementById('info-bar-staff-departments').options[document.getElementById('info-bar-staff-departments').selectedIndex].text;
  var selectSemester = document.getElementById('info-bar-staff-semesters').options[document.getElementById('info-bar-staff-semesters').selectedIndex].text


  //check to see if the rows match the filter
  for(let i = 1; i < tr.length; i++){
    let tdDepartment =  tr[i].getElementsByTagName('td')[5].innerHTML;
    let staffJoinDate = new Date(staff[i-1].joiningDate);
    let month = staffJoinDate.getMonth()+1;
    let semester;
    if(month >=10 || month <= 3){
      semester = 'Winter';
    }else if(4 <= month || month <= 9){
      semester = 'Summer'
    }
    if(tdDepartment != selectDepartment || semester != selectSemester){
      //hide the table rows that don't match the filters
      tr[i].style.display = 'none';
    }
  }
}

function resetFilterStaff(){
  //make an array with all table rows
  var tr = staffList.getElementsByTagName('tr');
  for(let i = 1; i < tr.length; i++){
    //reset the standard display for all tr
    tr[i].style.display = '';
  }
}



