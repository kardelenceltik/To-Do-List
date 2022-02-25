let items = []; //items initialize
let list = document.getElementById("myList");

items.forEach(function (item) {
  CreateItem(item);
});

list.addEventListener("click", function (item) {
  if (item.target.tagName == "LI") {
    //if current item have checked class  remove this class else haven't checked class , add this class
    item.target.classList.toggle("checked");
    ToogleDeleteButton();
  }
});
document.querySelector("#selectAll").onclick = function () {
  // all li element selection when click on  the button
  let liElements = document.querySelectorAll("li");
  liElements.forEach((element) => {
    element.click();
  });
};

document.querySelector("#deleteAll").onclick = function () {
  let elements = document.querySelectorAll(".checked");
  //Elements with class 'checked' hide
  elements.forEach(function (item) {
    item.style.display = "none";
  });
};

function ToogleDeleteButton() {
  let checkList = document.querySelectorAll(".checked");

  if (checkList.length > 0) {
    // if checklist length greather zero , remove d-none class
    document.querySelector("#deleteAll").classList.remove("d-none");
  } else {
    // else add d-none class
    document.querySelector("#deleteAll").classList.add("d-none");
  }
}
document.getElementById("btnCreate").onclick = function () {
  let item = document.getElementById("txtItem").value;
  if (item === "") {
    // null or empty check for new value
    alert("Lütfen Bir Değer Giriniz!");
    return;
  }
  CreateItem(item);
};
function CreateItem(item) {
  //create a new li element with current item value
  let li = document.createElement("li");
  let t = document.createTextNode(item);
  li.className = "list-group-item";
  li.appendChild(t);
  list.appendChild(li);
  let span = document.createElement("span");
  let text = document.createTextNode("x");
  span.className = "close";
  span.appendChild(text);
  li.appendChild(span);

  span.onclick = function () {
    //hide element when click on the button (X)
    let li = this.parentElement;
    li.style.display = "none";
    li.classList.remove("checked");
  };
}
