// JavaScript source code

function dis(val) {
    document.getElementById("result").value += val;
}

function solve() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}

function clr() {
    document.getElementById("result").value = "";
}


function rand() {
    let a = document.getElementById("min").value;
    let b = document.getElementById("max").value;
    let min = parseInt(a);
    let max = parseInt(b);
    let c = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("rand").value = c;

}

function clrrand() {
    document.getElementById("min").value = "";
    document.getElementById("max").value = "";
    document.getElementById("rand").value = "";
}

function r() {
    
    let a = document.getElementById("d").value;
    let b = document.getElementById("di").value;
    
    let x = parseInt(a);
    let y = parseInt(b);
  
    let r = x % y;
    let q = Math.floor(x/y);
    document.getElementById("q").value = q;
    document.getElementById("r").value = r;
    
}

function inc() {
    let a = document.getElementById("inc/dec").value;
    let b = parseInt(a);
    b++;
    document.getElementById("inc/dec").value = b;
}

function dec() {
    let a = document.getElementById("inc/dec").value;
    let b = parseInt(a);
    b--;
    document.getElementById("inc/dec").value = b;
}