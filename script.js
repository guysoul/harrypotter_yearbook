const gryffindorContainer = document.querySelector(".gryffindor-container");
const addBtnGryffindor = document.getElementById("add-btn-gryffindor");

let hogwartsStudents;

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
    console.log("inne i fetcandshowstudent", hogwartsStudents);
  } catch {
    console.log("unable to load Hogwarts Student", error);
  }
}

fetchAndShowStudent();
