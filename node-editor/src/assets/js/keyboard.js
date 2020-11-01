
let buttons = d.querySelectorAll(".keyboard .row button");
try {
  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      alert('hola')
    })
  });
} catch (error) {
  console.log(error);
}

d.addEventListener('click', e => {
  
})
