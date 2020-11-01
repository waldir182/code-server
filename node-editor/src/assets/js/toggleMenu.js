var d = document;

let toggleBtn = d.getElementById("toggleBtn");
let sidebar = d.getElementById("sidebar");
let main_editor = d.querySelector(".main-editor");

toggleBtn.addEventListener("click", (e) => {
  sidebar.classList.toggle("active");
  main_editor.classList.toggle("off");
  toggleBtn.classList.add("on");

  setTimeout(() => {
    toggleBtn.classList.remove("on");
  }, 200);
});

