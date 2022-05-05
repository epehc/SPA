const views = [document.getElementById("container-all-courses"),
  document.getElementById("container-mathematics"),
  document.getElementById("container-programming"),
  document.getElementById("container-computer-networks"),
  document.getElementById("container-software-engineering"),
  document.getElementById("container-operating-systems"),
  document.getElementById("container-databanks"),
  document.getElementById("container-web-development"),
  document.getElementById("container-computer-graphics"),
  document.getElementById("container-distributed-systems")
];

function toggleViewsOff(){
  for (let i =0; i<views.length; i++){
    views[i].style.display = "none";
  }
}

function toggleAllCourses(){
  toggleViewsOff();
  views[0].style.display = "block";
}

function toggleMathematics(){
  toggleViewsOff();
  views[1].style.display = "block";
}

function toggleProgramming(){
  toggleViewsOff();
  views[2].style.display = "block";
}

function toggleComputerNetworks(){
  toggleViewsOff();
  views[3].style.display = "block";
}

function toggleSoftwareEngineering(){
  toggleViewsOff();
  views[4].style.display = "block";
}

function toggleOperatingSystems(){
  toggleViewsOff();
  views[5].style.display = "block";
}

function toggleDatabanks(){
  toggleViewsOff();
  views[6].style.display = "block";
}

function toggleWebDevelopment(){
  toggleViewsOff();
  views[7].style.display = "block";
}

function toggleComputerGraphics(){
  toggleViewsOff();
  views[8].style.display = "block";
}

function toggleDistributedSystems(){
  toggleViewsOff();
  views[9].style.display = "block";
}
