var  box=document.getElementById('display');
var t=false; //checks to clear the display for taking the next input

function addtoscreen(x){
  if(t==true) box.value='';
  box.value +=x;
  if(box.value.length==1 && (x=='/' || x == '*' || x == '-' || x =='+')) box.value='';
  if(x=='c'){
    box.value='';
  }
  t=false;
}

function answer(){
  t=true;
  x=box.value;
  x=eval(x);
  if(x==undefined) box.value='';
  else box.value=x;

}
function backspace(){
  var num=box.value;
  var len=num.length-1;
  var newnum=num.substring(0,len);
  box.value=newnum;
}
function power(y){
  x=box.value;
  x=eval(x);
  if(x.length!=0) x=Math.pow(x,y);
  box.value=x;
}

document.addEventListener("keydown", function(event) {
    //console.log(event.which);
    var temp;
    if(event.which >= 48 && event.which<=57){
      temp =  event.which - 48;
      if(t==true) { box.value=''; t=false; }
      else box.value +=temp;
    }
    else if(event.which== 8){
      backspace();
    }
    else if(event.which>= 96 && event.which <= 105 ){
      temp = event.which - 96;
      if(t==true) { box.value=''; t=false; }
      box.value += temp;
    }
    else if(event.which==187 ){
      answer();
    }
    else if (event.which == 67)
      addtoscreen('c');
    else if (event.which == 107)
        addtoscreen('+');
    else if (event.which == 109)
        addtoscreen('-');
    else if (event.which == 111)
        addtoscreen('/');
    else if (event.which == 106)
        addtoscreen('*');
    else if(event.which == 110||event.which == 190)
        addtoscreen('.');
});
