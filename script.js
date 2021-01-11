function clock(){
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  if(m < 10) m = "0"+m;
  if(s < 10) s = "0"+s;
  if(s%2 === 0){
    document.getElementById("clock").innerHTML = `${h}:${m}:${s}`
  } else {
    document.getElementById("clock").innerHTML = `${h} ${m} ${s}`
  }
}

function init(){
  console.log("initialized!")
  setInterval(clock, 500);
}

function hide_beta(){
  document.getElementById("aa_notice").style.display = "none";
}