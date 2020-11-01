var d = document;
var touchMenu = d.querySelector(".touchMenu");

d.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  let x = e.pageX;
  let y = e.pageY;
  touchMenu.style.left = x + "px";
  touchMenu.style.top = y + "px";

  // click largo en una carpeta
  if (e.target.matches(".directory")) {
    touchMenu.style.display = "inline-block";

    let div = `<div>
    <input type="text" id="rute-menu">
    <li><a href="#" class="delete-folder">Delete folder</a></li>
    <li><a href="#">Rename folder</a></li>
    <li><a href="#" class="new-folder">New folder</a></li>
  </div>`;
    touchMenu.innerHTML = "";
    touchMenu.innerHTML = div;
    let input = touchMenu.querySelector("input");
    input.value = e.target.getAttribute("data-ruta");
  }

  // click largo en un archivo
  if (e.target.matches(".file-aside")) {
    touchMenu.style.display = "inline-block";

    e.target.classList.add("touch-active");
    let div = `<div>
    <input type="text" id="rute-menu">
    <li><a href="#">Open file</a></li>
    <li><a href="#" class="delete-file">Delete file</a></li>
    <li><a href="#">Rename file</a></li>
  </div>`;
    touchMenu.innerHTML = "";
    touchMenu.innerHTML = div;
    let input = touchMenu.querySelector("input");
    input.value = e.target.getAttribute("data-ruta");
  }
});

//============
d.addEventListener("click", (e) => {
  if (e.target.matches(".delete-file")) {
    let input = touchMenu.querySelector("input");
    if (confirm("Desea eliminar este archivo?")) {
      fetch("/explorer/deletefile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ruta: input.value }),
      }).then((res) => {
        alert(res.status);
        if (res.status == 200) {
          let file = document.querySelector(`[data-ruta="${input.value}"]`);
          file.parentNode.remove();
          console.log(e.target.parentNode);
        }
      });
    }
  }

  // Delete folder
  if (e.target.matches(".delete-folder")) {
    let input = touchMenu.querySelector("input");
    if (confirm("Desea eliminar esta carpeta?")) {
      fetch("/explorer/deletefolder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ruta: input.value }),
      }).then((res) => {
        alert(res.status);
        if (res.status == 200) {
          let file = d.querySelector(`[data-ruta="${input.value}"]`);
          file.parentNode.remove();
          console.log(e.target.parentNode);
        }
      });
    }
  }
  // Nueva carpeta
  if (e.target.matches(".new-folder")) {
    let input = touchMenu.querySelector("input");
    let name = prompt("Nombre de carpeta:");
    fetch("/explorer/newfolder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ruta: input.value, name }),
    }).then((res) => {
      alert(res.status);
      if (res.status == 200) {
        let file = d.querySelector(`[data-ruta="${input.value}"]`);
        let parent = file.parentNode;
        let ul = parent.querySelector("ul");
        let li = d.createElement("li");
        let newul = d.createElement("ul");
        li.classList.add("sub_menu");
        let a = d.createElement("a");
        a.classList.add("directory");
        a.innerHTML = `<i class="fas fa-chevron-right"></i><span><img src="images/file-directory.svg"></span>${name}`;
        a.setAttribute("data-ruta", `${input.value + name}/`);
        li.appendChild(a);
        li.appendChild(newul);
        ul.appendChild(li);
        console.log(ul);
      }
    });
  }

  // Elimimanr clases y display al hacer click
  touchMenu.style.display = "none";
  let touchActive = d.querySelector(".touch-active");
  if (touchActive) {
    touchActive.classList.remove("touch-active");
  }
});
