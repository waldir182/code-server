const colored = () => {
  
  let line = document.querySelector('.line.active');
  let lineT = line.textContent;
  
  lineT = lineT.replace(/\t/g, '&nbsp;&nbsp;');
  if (/\s/g.test(lineT)) {
    lineT = lineT.replace(/\s/g, '&nbsp;')
  }
  //lineT = lineT.replace(/\=/g, '<span class="cv">$&</span>')
  lineT = lineT.replace(/(((?<!=)\")(?!>).+?(\"))/g, '<span class="cv">$&</span>');

  let reserveds = ["let", "var", "const"];
  reserveds.forEach((item) => {
    lineT = lineT.replace(/function|let|var|const|while/gi, '<span class="cr">$&</span>');
  });
  let expF = /\w+((&nbsp;)+)?(?=\((.+)?\))/g;
  if (expF.test(lineT)) {
    lineT = lineT.replace(expF, '<span class="cf">$&</span>');
  }
  lineT = lineT.replace(/\(|\)/g, '<span class="cs">$&</span>')
  lineT = lineT.replace(/\{|\}/g, '<span class="cs">$&</span>')
  
  textarea.value=textarea.value.replace(/\t/g, " "+" ")
  line.innerHTML = lineT;
}

export default colored;