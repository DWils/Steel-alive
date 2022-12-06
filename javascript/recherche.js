function myFunction() {
  var checkBox = document.getElementById("hideapple");

  var text = document.getElementById("macbookair-m1");

  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
function lenovo() {
  var checkBox = document.getElementById("hidelenovo");

  var text = document.getElementById("lenovo_thinkpad");

  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
function chrome() {
  var checkBox = document.getElementById("hidechrome");

  var text = document.getElementById("chromebook-C433TA");

  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
function dell() {
  var checkBox = document.getElementById("hidedell");

  var text = document.getElementById("dell_XPS");

  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
function asus() {
  var checkBox = document.getElementById("hideasus");

  var text = document.getElementById("hp");

  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
function acer() {
  var checkBox = document.getElementById("hideacer");

  var text = document.getElementById("acerAspire");

  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function tlp() {
  var checkBox = document.getElementById("tlp");

  var textList = document.querySelectorAll(".laptop");

  for (const text of textList) {
    if (checkBox.checked) {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }
}
