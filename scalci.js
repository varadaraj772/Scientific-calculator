let dot = 0;
function sin() {
  var a = document.getElementById("res").value;
  document.getElementById("res").value = Math.sin((eval(a) * Math.PI) / 180);
}

function cos() {
  var a = document.getElementById("res").value;
  document.getElementById("res").value = Math.cos((eval(a) * Math.PI) / 180);
}
function tan() {
  var a = document.getElementById("res").value;
  document.getElementById("res").value = Math.tan((eval(a) * Math.PI) / 180);
}
function SquareRoot() {
  var a = document.getElementById("res").value;
  document.getElementById("res").value = Math.sqrt(eval(a));
}
function CubeRoot() {
  var a = document.getElementById("res").value;
  document.getElementById("res").value = Math.cbrt(eval(a));
}
function exp() {
  document.getElementById("res").value += "**";
}
function factorial() {
  var a = document.getElementById("res").value;
  var st;
  st = cfact(eval(a));
  function cfact(a) {
    if (a < 0) {
      st = "No factorial for negative numbers!";
    } else if (a == 0 || a == 1) {
      return 1;
    } else {
      let r = 1;
      for (let i = 2; i <= a; i++) {
        r *= i;
      }
      return r;
    }
  }
  document.getElementById("res").value = st;
}
function onebyx() {
  var a = document.getElementById("res").value;
  let re = 1 / eval(a);
  document.getElementById("res").value = re;
}
function disp(val) {
  if (dot == 1 && val == ".") {
  } else {
    document.getElementById("res").value += val;

    if (val == ".") {
      dot = 1;
    }

    if (val == "+" || val == "-" || val == "*" || val == "/") {
      dot = 0;
    }
  }
}
function clr() {
  document.getElementById("res").value = " ";
  dot = 0;
}
function calc() {
  var p = document.getElementById("res").value;
  var q = eval(p);
  if (q == "Infinity") {
    document.getElementById("res").value = "cannot divide by zero";
  } else {
    document.getElementById("res").value = q;
  }
}
