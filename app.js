let addStudent = document.querySelector("#form-info");
let btnAdd = document.querySelector("#add_btn");
let addStudentModal = document.querySelector("#add-student");
let tbody = document.querySelector("tbody");
let tableContent = document.querySelector(".table-content");
const groupsSelected = document.querySelector(".groups-select");

// let studentsJSON = localStorage.getItem(students);
// let students = JSON.parse(studentsJSON) || [];
let studentDatas = JSON.parse(localStorage.getItem("studentDatas")) || [];

// let selected = null;
// let group = localStorage.getItem(STUDENT_GROUP) || "all";

let users = [{ id: 0, firstName: "hdh", lastName: "kdj", group: "React h1" }];
function addStudents() {
  users.map((user, index) => {
    let tr = document.createElement("tr");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    let th3 = document.createElement("th");
    let th4 = document.createElement("th");
    let th5 = document.createElement("th");
    // let th6 = document.createElement("button");
    th1.textContent = index;
    th2.textContent = user.firstName;
    th3.textContent = user.lastName;
    th4.textContent = user.group;
    th5.textContent = "HA";
    tr.append(th1, th2, th3, th4, th5);
    tbody.append(tr);
  });
  //   studentDatas = [];
}
addStudents();

// function studentValue({ firstName, lastName, group, doesWork }, i) {
//   return;
// }

// function getStudents() {
//   tbody.innerHTML = "";

//   let result = students.filter(
//     (student) =>
//       student.firstName.toLowerCase().includes(search) ||
//       student.lastName.toLowerCase().includes(search)
//   );

//   if (group !== "all") {
//     result = students.filter((student) => student.group === group);
//   }

//   result.forEach((student, i) => {
//     tbody.innerHTML += studentValue(student, i);
//   });
// }

// getStudents();

// addStudentModal.addEventListener("click", () => {
//   console.log("fxc");
// });
addStudent.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(addStudent);

  const user = {
    index: users.length + 1,
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    group: formData.get("group"),
    select: formData.get("checked") == "on" ? "Ha" : "Yoq",
  };
  users.push(user);
  let tr = document.createElement("tr");
  let th1 = document.createElement("th");
  let th2 = document.createElement("th");
  let th3 = document.createElement("th");
  let th4 = document.createElement("th");
  let th5 = document.createElement("th");
  // let th6 = document.createElement("button");
  th1.textContent = users.length + 1;
  th2.textContent = user.firstName;
  th3.textContent = user.lastName;
  th4.textContent = user.group;
  th5.textContent = user.select;
  tr.append(th1, th2, th3, th4, th5);
  tbody.append(tr);
});
