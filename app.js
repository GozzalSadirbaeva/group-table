let addStudent = document.querySelector("#form-info");
let btnAdd = document.querySelector("#add_btn");
let addStudentModal = document.querySelector("#add-student");
let tbody = document.querySelector("tbody");
let tableContent = document.querySelector(".table-content");
const groupsSelected = document.querySelector(".groups-select");


let studentDatas = JSON.parse(localStorage.getItem("studentDatas")) || [];

// let selected = null;
// let group = localStorage.getItem(STUDENT_GROUP) || "all";

let users = JSON.parse(localStorage.getItem("data")) || [];
function createStudentRow(user) {
  let tr = document.createElement("tr");
  let th1 = document.createElement("th");
  let th2 = document.createElement("th");
  let th3 = document.createElement("th");
  let th4 = document.createElement("th");
  let th5 = document.createElement("th");
  // let th6 = document.createElement("button");
  th1.textContent = user.index;
  th2.textContent = user.firstName;
  th3.textContent = user.lastName;
  th4.textContent = user.group;
  th5.textContent = user.select;
  tr.append(th1, th2, th3, th4, th5);
  tbody.append(tr);
}
function addStudents() {
  users.map((user, index) => {
    createStudentRow(user);
  });
  //   studentDatas = [];
}
addStudents();


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
  createStudentRow(user);
  users.push(user);
  localStorage.setItem("data", JSON.stringify(users));
});
