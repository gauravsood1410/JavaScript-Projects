var timer = document.getElementById('timer');
var togglebtn = document.getElementById('toggle');
var resetbtn = document.getElementById('reset');
var lap= document.getElementById('lap');

var watch = new stopwatch({
  elem: timer,
  delay: 10
});

function start(){
  watch.starts();
  togglebtn.textContent = 'STOP';
}
function stop(){
  watch.stop();
  togglebtn.textContent= 'START';
}
togglebtn.addEventListener('click',function(){
  watch.isOn ?  stop() : start();
});

resetbtn.addEventListener('click', function(){
  watch.reset();
  togglebtn.textContent= 'START';
  document.getElementById('lapdisplay').style.display="none";
});

lap.addEventListener('click',function(){
  document.getElementById('lapdisplay').innerHTML = timeFormat;
  document.getElementById('lapdisplay').style.display='block';
});
