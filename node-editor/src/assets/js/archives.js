document.addEventListener("click", (e) => {
  if (e.target.matches(".btn-file")) {
    let id = e.target.getAttribute("data-target");
    let file = document.getElementById(id);
    let fileActive = document.querySelector(".archive-open.active");
    let btnActive = document.querySelector(".btn-file.active");
    btnActive.classList.remove("active");
    fileActive.classList.remove("active");
    file.classList.add("active");
    e.target.classList.add("active");
    updateFileActive(e);
  }

  if (e.target.matches(".save-file")) {
    saveFile(e);
  }
  let btnMenus = document.querySelector(".button-menu");
  btnMenus.classList.remove("active");
  if (e.target.matches(".button-menu")) {
    e.target.classList.toggle("active");
  }
});


// Funcion guardar cambios
function saveFile(e) {
  let rute = e.target.getAttribute("data-rute");
  let target = e.target.getAttribute("data-target");
  let parent = document.getElementById(target);
  let textarea = parent.querySelector("textarea");
  let content = textarea.value;

  fetch("explorer/updatefile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ rute, content }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}


// Funcion actualidar file active
const updateFileActive = (e) => {
  let el = e.target;
  let id = el.getAttribute("data-id");
  fetch("/explorer/updatefileactive", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
