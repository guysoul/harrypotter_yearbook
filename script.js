const gryffindorContainer = document.querySelector(".gryffindor-container");
const addBtnGryffindor = document.getElementById("add-btn-gryffindor");

let hogwartsStudents;

//Read
async function fetchStudent() {
  const hogwartsStudentRequest = await fetch(
    "https://hp-api.onrender.com/api/characters/students"
  );

  let resultHogwartsStudent = await hogwartsStudentRequest.json();

  return resultHogwartsStudent;
}

console.log(fetchStudent());

async function fetchAndShowStudent() {
  try {
    hogwartsStudents = await fetchStudent();
    showAllGryffindor();
    //console.log("Inside fetchAndShowStudent function", hogwartsStudents);
  } catch {
    console.log("unable to load Hogwarts Student", error);
  }
}

fetchAndShowStudent();

//Read to show gryffindorstudents
function showAllGryffindor() {
  gryffindorContainer.innerHTML = "";

  hogwartsStudents.forEach((gryffindorMember, index) => {
    const gryffindorCard = document.createElement("div");

    //Delete functionality
    const deleteBtn = document.createElement("Button");
    deleteBtn.innerHTML = "Delete student";
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.addEventListener("click", function () {
      deleteStudentGryffindor(index);
    });

    gryffindorCard.innerHTML = `<img src="${gryffindorMember.image}" style="width: 100px"/> <h3>${gryffindorMember.name}</h3>`;
    gryffindorContainer.append(gryffindorCard);
    gryffindorCard.append(deleteBtn);
    console.log(gryffindorMember.name);
  });
}

function deleteStudentGryffindor(index) {
  console.log("Inside delete function");
  hogwartsStudents.splice(index, 1);
  console.log("after deletion", hogwartsStudents);
  showAllGryffindor();
}
