var i = 0; 
var Interval;
function start() { 
 
  if(i >0){ //only once can use button "try it"
    
  }
  else if(i ==0){
    i++;
    
    var a = document.getElementById("a").value; // input from html
  var b = document.getElementById("b").value;

var c = document.getElementById("c").value;
var d = document.getElementById("d").value;

if(a ==""){ //check if input isn't empty
  a=0;
}
if(b ==""){
  b=0;
}
if(c ==""){
  c=0;
}
if(d ==""){
  d=0;
}

if(d ==""){
  d=0;
}
document.getElementById("a").disabled = true; //disable input from user
document.getElementById("b").disabled = true;
document.getElementById("c").disabled = true;
document.getElementById("d").disabled = true;

      
Interval = setInterval(function name() {
    if (a < 1 && b < 1 && c < 1 && d < 1) { //if time is zero
    
        d =1;
        clearInterval(Interval);
    }
    
    else if (d < 1) { 
      if (c < 1) {
                if (b < 1) {
                    console.log(a);
                    if (a < 1) {
                        
                    }
                    a--;
                    b = 24;
                    c = 60;
                    d = 60;
                }
                b--;
                c = 60;
                d = 60;
            }
            c--;
            d = 60;
        }
        d--;
    document.getElementById("demo").innerHTML = "Day: ".concat(a, ", Hour:  ").concat(b, ", Minute: ").concat(c, ", Seconds: ").concat(d); //output to html

}, 1000);
}
}
function EditFunction(){ //edit function for user
  clearInterval(Interval);
  i = 0;
 
  document.getElementById("a").disabled = false;
  document.getElementById("b").disabled = false;
  document.getElementById("c").disabled = false;
  document.getElementById("d").disabled = false; 
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
  document.getElementById("c").value = "";
  document.getElementById("d").value = "";

  
}