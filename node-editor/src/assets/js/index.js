document.addEventListener("click", (e) => {
  if (e.target.matches("#explorer *")) return false;
  let span = document.createElement("span");
  span.classList.add("click");
  span.style.left = `${e.pageX}px`;
  span.style.top = `${e.pageY}px`;
  document.body.appendChild(span);
  setTimeout(() => {
    span.remove();
  }, 200);

  if (e.target.matches("#explore-back")) {
    console.log('Back');
    
    let boxrute = document.getElementById("explore-rute");
    let rute = boxrute.textContent.trim();
    let ruteBack = rute.split("/");
    ruteBack.splice(ruteBack.length - 2);
    ruteBack = ruteBack.join("/");
    ruteBack = ruteBack + "/";
    let box = document.getElementById("explorer");

    let ruta = ruteBack;

    fetch("/folder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ruta }),
    })
      .then((res) => res.json())
      .then((data) => {
        box.innerHTML = "";
        let boxrute = document.getElementById("explore-rute");
        let fragment = document.createDocumentFragment();
        // let back = document.createElement("div");
        // back.classList.add("folder");
        // back.textContent = "....";
        // back.setAttribute("data-ruta", ruta + "../");
        // fragment.appendChild(back);

        data.forEach((item, index) => {
          let div = document.createElement("div");
          let html;
          if (item.type == "folder") {
            html = `<span><img src="/images/file-directory.svg"/></span>${item.name}`;
            div.classList.add("folder", "explore-folder");
            div.setAttribute("data-ruta", `${ruta}${item.name}/`);
          } else {
            div.classList.add("file", "explore-file");
            div.setAttribute("data-ruta", `${ruta}${item.name}`);
            html = `<span>${icons(item.ext)}</span>${item.name}`;
          }
          div.innerHTML = html;
          fragment.appendChild(div);
        });
        box.appendChild(fragment);
        boxrute.textContent = ruta;
      });
  }
});

function explorer(e) {
  if (e.target.matches(".folder")) {
    let box = document.getElementById("explorer");
    let ruta = e.target.getAttribute("data-ruta");

    fetch("/folder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ruta }),
    })
      .then((res) => res.json())
      .then((data) => {
        box.innerHTML = "";
        let boxrute = document.getElementById("explore-rute");
        let fragment = document.createDocumentFragment();
        // let back = document.createElement("div");
        // back.classList.add("folder");
        // back.textContent = "....";
        // back.setAttribute("data-ruta", ruta + "../");
        // fragment.appendChild(back);

        data.forEach((item, index) => {
          let div = document.createElement("div");
          let html;
          if (item.type == "folder") {
            html = `<span><img src="/images/file-directory.svg"/></span>${item.name}`;
            div.classList.add("folder", "explore-folder");
            div.setAttribute("data-ruta", `${ruta}${item.name}/`);
          } else {
            div.classList.add("file", "explore-file");
            div.setAttribute("data-ruta", `${ruta}${item.name}`);
            html = `<span>${icons(item.ext)}</span>${item.name}`;
          }
          div.innerHTML = html;
          fragment.appendChild(div);
        });
        box.appendChild(fragment);
        boxrute.textContent = ruta;
      });
  }
}

// Funcion eliminar file
function deleteFile(e) {
  let box = document.getElementById("explorer");
  let ruta = e.target.getAttribute("data-ruta");
  ruta = ruta.slice(0, -1);
  fetch("/deletefile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ruta }),
  })
    .then((res) => res)
    .then((data) => {
      alert(data.statusText);
    });
}

// load folder and files
document.addEventListener("click", (e) => {
  explorer(e);
});

// ==========
// Acciones en el explorador de archivos
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();

  let modal_items = document.querySelector(".modal-items");
  let rute = e.target.getAttribute("data-ruta");
  // click largo en una carpeta
  if (e.target.matches(".explore-folder")) {
    let input = modal_items.querySelector("input");
    let title = modal_items.querySelector(".title");
    modal_items.style.display = "flex";
    input.value = rute;
    title.innerHTML =
      '<img src="images/file-directory.svg">' + e.target.textContent;
  }

  // click largo en un archivo
  if (e.target.matches(".explore-file")) {
    let input = modal_items.querySelector("input");
    let title = modal_items.querySelector(".title");
    modal_items.style.display = "flex";
    input.value = rute;
    title.innerHTML = '<img src="images/file.svg">' + e.target.textContent;
  }
  modal_items.addEventListener("click", (e) => {
    e.target.style.display = "none";
  });
});

document.addEventListener("scroll", () => {
  let touchMenu = document.querySelector("touchMenu");
  touchMenu.style.display = "none";
});

const icons = (ext) => {
  let icon = '<img src="/images/file.svg"/>';
  if (ext === ".js") icon = '<i class="icon js-icon"></i>';
  if (ext === ".css") icon = '<i class="icon css3-icon"></i>';
  if (ext === ".json") icon = '<i class="icon json-icon"></i>';
  if (ext === ".html") icon = '<i class="icon html5-icon"></i>';
  if (ext === ".ejs") icon = '<i class="icon ejs-icon"></i>';
  if (ext === ".php") icon = '<i class="icon php-icon"></i>';
  return icon;
};
