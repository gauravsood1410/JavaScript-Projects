//this file contains the stopwatch functions
//this function constructs a stopwatch obj
function stopwatch(x){
  var time = 0;
  var interval;
  var offset;
  var y = x.elem;
  var delay = x.delay;

  // to keep interval running
  function update(){
    if(this.isOn){
      time += delta();
    }
    timeFormat =  timeFormatter(time);
    y.value=timeFormat;
  }
  //to calculate how much time has passed
  function delta(){
    var now = Date.now();
    var timePassed = now - offset;
    offset = now;
    return timePassed;
  }

  //formatts the calculated diff between timmings into a required format display
  function timeFormatter(time){
    var t = new Date(time);
    var hour = Math.floor((time % 86400000) / 3600000).toString();
    var min = Math.floor(((time % 86400000) % 3600000) / 60000).toString();
    var sec = t.getSeconds().toString();
    var millisec = t.getMilliseconds().toString();
    if(hour.length<2){
      hour = '0' + hour;
    }
    if(min.length < 2){
      min = '0' + min;
    }
    if(sec.length < 2){
      sec = '0' + sec;
    }
    while(millisec.length < 3 ){
      millisec = '0' + millisec;
    }
    return hour + ' : ' + min + ' : ' + sec + ' . ' + millisec;
  }

  this.isOn = false;
  this.starts = function(){
    if(!this.isOn){
      offset = Date.now();
      interval = setInterval(update.bind(this),delay);
      this.isOn=true;
    }
  };
  this.stop= function(){
    if(this.isOn){
      clearInterval(interval);
      interval = null;
      this.isOn = false;
    }
  };
  this. reset= function(){
      watch.stop();
      time = 0;
      update();
    };
}
