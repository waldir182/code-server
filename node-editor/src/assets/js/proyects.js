function subMenu(e) {
  let ruta = e.target.getAttribute("data-ruta");
  let ul = e.target.parentNode.querySelector("ul");

  fetch("/folder", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ruta }),
  })
    .then((res) => res.json())
    .then((data) => {
      let fragment = document.createDocumentFragment();
      let close = e.target.parentNode.querySelector("span");
      if (close=="folder_open") {
        var loader = document.createElement("span");
        loader.classList.add("loader");
        e.target.appendChild(loader);
      }

      data.forEach((item) => {
        let li = document.createElement("li");
        let u = document.createElement("ul");
        let a = document.createElement("a");
        if (item.type == "folder") {
          li.classList.add("sub_menu");
          a.classList.add("directory");
          a.setAttribute("data-ruta", `${ruta}${item.name}/`);
          a.innerHTML = `<i class="fas fa-chevron-right"></i><span><img src="/images/file-directory.svg"/></span>${item.name}`;
        } else {
          a.classList.add("file-aside");
          let span = `<span><img src="/images/file.svg"/></span>`;
          a.setAttribute("data-ruta", `${ruta}${item.name}`);
          a.innerHTML = `${span}${item.name}`;
        }
        li.appendChild(a);
        li.appendChild(u);
        fragment.appendChild(li);
      });
      if (close=="folder_open") {
        setTimeout(() => {
          loader.remove();
        }, 300);
      }

      ul.innerHTML = "";
      ul.appendChild(fragment);
    });
}

// desplegar menu de carpetas
document.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.matches(".directory")) {
    subMenu(e);
    var parent = e.target.parentNode;
    parent.classList.toggle("active");
    let chevron = parent.querySelector(".fas");
    chevron.classList.toggle("fa-chevron-down");
    chevron.classList.toggle("fa-chevron-right");
  }
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".edit-code")) {
    let archives = document.querySelector(".archives");
    console.log(archives);
  }
});
