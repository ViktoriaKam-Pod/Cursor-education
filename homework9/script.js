
function generateBlocks(){
  let elem = document.getElementById("parent");
  elem.innerHTML="";
  for (let i=0; i<25; i++){
    let div = document.createElement("div");
    div.setAttribute("class","myStyle");
    div.style.backgroundColor = `rgb(${Math.round(Math.random() *255)}, ${Math.round(Math.random() *255)}, ${Math.round(Math.random() *255)})`;
    elem.append(div);
  }
}
generateBlocks()
function getInterval (){
  setInterval(()=> generateBlocks(), 1000);
}
getInterval ()


