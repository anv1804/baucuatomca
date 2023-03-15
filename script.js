var price = 0;
var box1;
var box2;
var box3;
const CheckBox1 = ["huou", "bau", "ga", "ca", "cua", "tom"];
const CheckBox2 = ["huou", "bau", "ga", "ca", "cua", "tom"];
const CheckBox3 = ["huou", "bau", "ga", "ca", "cua", "tom"];
function random() {
  box1 = CheckBox1[Math.floor(Math.random() * CheckBox1.length)];
  box2 = CheckBox2[Math.floor(Math.random() * CheckBox1.length)];
  box3 = CheckBox3[Math.floor(Math.random() * CheckBox1.length)];
}
function reset() {
  box1 = null;
  box2 = null;
  box3 = null;
  select1.checked = false;
  select2.checked = false;
  select3.checked = false;
  select4.checked = false;
  select5.checked = false;
  select6.checked = false;
  //huou
  document.getElementById("huou").style.width = "200px";
  document.getElementById("huou").style.opacity = "1";
  document.getElementById("huou").style.boxShadow = "0px 0px 40px #fff820";
  //bau
  document.getElementById("bau").style.width = "200px";
  document.getElementById("bau").style.opacity = "1";
  document.getElementById("bau").style.boxShadow = "0px 0px 40px #fff820";
  //ga
  document.getElementById("ga").style.width = "200px";
  document.getElementById("ga").style.opacity = "1";
  document.getElementById("ga").style.boxShadow = "0px 0px 40px #fff820";
  //ca
  document.getElementById("ca").style.width = "200px";
  document.getElementById("ca").style.opacity = "1";
  document.getElementById("ca").style.boxShadow = "0px 0px 40px #fff820";
  //cua
  document.getElementById("cua").style.width = "200px";
  document.getElementById("cua").style.opacity = "1";
  document.getElementById("cua").style.boxShadow = "0px 0px 40px #fff820";
  //tom
  document.getElementById("tom").style.width = "200px";
  document.getElementById("tom").style.opacity = "1";
  document.getElementById("tom").style.boxShadow = "0px 0px 40px #fff820";
}

function show() {
  console.log(box1);
  console.log(box2);
  console.log(box3);
  // box1
  if (box1 == "huou") {
    document.getElementById("box1").src = "Images/huou.png";
  } else if (box1 == "bau") {
    document.getElementById("box1").src = "Images/bau.png";
  } else if (box1 == "ga") {
    document.getElementById("box1").src = "Images/ga.png";
  } else if (box1 == "ca") {
    document.getElementById("box1").src = "Images/ca.png";
  } else if (box1 == "cua") {
    document.getElementById("box1").src = "Images/cua.png";
  } else {
    document.getElementById("box1").src = "Images/tom.png";
  }
  // box2
  if (box2 == "huou") {
    document.getElementById("box2").src = "Images/huou.png";
  } else if (box2 == "bau") {
    document.getElementById("box2").src = "Images/bau.png";
  } else if (box2 == "ga") {
    document.getElementById("box2").src = "Images/ga.png";
  } else if (box2 == "ca") {
    document.getElementById("box2").src = "Images/ca.png";
  } else if (box2 == "cua") {
    document.getElementById("box2").src = "Images/cua.png";
  } else {
    document.getElementById("box2").src = "Images/tom.png";
  }
  // box 3
  if (box3 == "huou") {
    document.getElementById("box3").src = "Images/huou.png";
  } else if (box3 == "bau") {
    document.getElementById("box3").src = "Images/bau.png";
  } else if (box3 == "ga") {
    document.getElementById("box3").src = "Images/ga.png";
  } else if (box3 == "ca") {
    document.getElementById("box3").src = "Images/ca.png";
  } else if (box3 == "cua") {
    document.getElementById("box3").src = "Images/cua.png";
  } else {
    document.getElementById("box3").src = "Images/tom.png";
  }
  // LUCKY
  if (
    (box1 == "huou" && box2 == "huou" && box3 == "huou") ||
    (box1 == "bau" && box2 == "bau" && box3 == "bau") ||
    (box1 == "ga" && box2 == "ga" && box3 == "ga") ||
    (box1 == "ca" && box2 == "ca" && box3 == "ca") ||
    (box1 == "cua" && box2 == "cua" && box3 == "cua") ||
    (box1 == "tom" && box2 == "tom" && box3 == "tom")
  ) {
    alert("LUCKY");
  }
  //select1
  document.getElementById("select1");
  if (
    select1.checked &&
    (select1.value === box1 || select1.value === box3 || select1.value === box2)
  ) {
    document.getElementById("huou").style.width = "200px";
    document.getElementById("huou").style.opacity = "1";
    document.getElementById("huou").style.boxShadow = "0px 0px 40px #fff820";
  } else {
    document.getElementById("huou").style.width = "100px";
    document.getElementById("huou").style.opacity = "0.5";
    document.getElementById("huou").style.boxShadow = "none";
  }
  //select2
  document.getElementById("select2");
  if (
    select2.checked &&
    (select2.value === box1 || select2.value === box3 || select2.value === box2)
  ) {
    document.getElementById("bau").style.width = "200px";
    document.getElementById("bau").style.opacity = "1";
    document.getElementById("bau").style.boxShadow = "0px 0px 40px #fff820";
  } else {
    document.getElementById("bau").style.width = "100px";
    document.getElementById("bau").style.opacity = "0.5";
    document.getElementById("bau").style.boxShadow = "none";
  }
  //select3
  document.getElementById("select3");
  if (
    select3.checked &&
    (select3.value === box1 || select3.value === box3 || select3.value === box2)
  ) {
    document.getElementById("ga").style.width = "200px";
    document.getElementById("ga").style.opacity = "1";
    document.getElementById("ga").style.boxShadow = "0px 0px 40px #fff820";
  } else {
    document.getElementById("ga").style.width = "100px";
    document.getElementById("ga").style.opacity = "0.5";
    document.getElementById("ga").style.boxShadow = "none";
  }
  //select4
  document.getElementById("select4");
  if (
    select4.checked &&
    (select4.value === box1 || select4.value === box3 || select4.value === box2)
  ) {
    document.getElementById("ca").style.width = "200px";
    document.getElementById("ca").style.opacity = "1";
    document.getElementById("ca").style.boxShadow = "0px 0px 40px #fff820";
  } else {
    document.getElementById("ca").style.width = "100px";
    document.getElementById("ca").style.opacity = "0.5";
    document.getElementById("ca").style.boxShadow = "none";
  }
  //select5
  document.getElementById("select5");
  if (
    select5.checked &&
    (select5.value === box1 || select5.value === box3 || select5.value === box2)
  ) {
    document.getElementById("cua").style.width = "200px";
    document.getElementById("cua").style.opacity = "1";
    document.getElementById("cua").style.boxShadow = "0px 0px 40px #fff820";
  } else {
    document.getElementById("cua").style.width = "100px";
    document.getElementById("cua").style.opacity = "0.5";
    document.getElementById("cua").style.boxShadow = "none";
  }
  //select6
  document.getElementById("select6");
  if (
    select6.checked &&
    (select6.value === box1 || select6.value === box3 || select6.value === box2)
  ) {
    document.getElementById("tom").style.width = "200px";
    document.getElementById("tom").style.opacity = "1";
    document.getElementById("tom").style.boxShadow = "0px 0px 40px #fff820";
  } else {
    document.getElementById("tom").style.width = "100px";
    document.getElementById("tom").style.opacity = "0.5";
    document.getElementById("tom").style.boxShadow = "none";
  }
}
function bigwin() {
  document.getElementById("bigwin").style.display = "block";
}
function close() {
  document.close;
}
