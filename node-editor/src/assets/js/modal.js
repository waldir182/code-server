var d = document;
d.addEventListener("click", (e) => {	
  if(e.target.matches('.btn-modal')){
    let id = e.target.getAttribute("data-target");
    let modal = d.getElementById(id);
    modal.style.display = "inline-block";
  }
  if(e.target.matches('.modal')){
    e.target.style.display = 'none';
  }
});
