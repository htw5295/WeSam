window.onload = function() {
  displayLineChart1();
  displayLineChart2();
  displayLineChart3();
  displayLineChart4();
  displayLineChart5();
  document.getElementById('reviewProfile4').style.display = "none";
  document.getElementById('reviewProfile5').style.display = "none";
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function menuBar(x) {
  x.classList.toggle("change");
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("top").style.display = "block";
  } else {
    document.getElementById("top").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function menuBar(x) {
  x.classList.toggle("change");
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("top").style.display = "block";
  } else {
    document.getElementById("top").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var mobileCheck = 1;
var desktopHeadCheck = 1;
var desktopTailCheck = 3;

function reviewNextSlide() {
  if (window.outerWidth < 1024) {
    var temp1 = "reviewProfile"+mobileCheck;
    if (mobileCheck == 5) {
      mobileCheck = 1;
    } else {
      mobileCheck++;
    }
    var temp2 = "reviewProfile"+mobileCheck;
    document.getElementById(temp1).style.display = "none";
    document.getElementById(temp2).style.display = "table-cell";
  } else {
    var tr = document.getElementById('reviewTableTr');
    tr.insertBefore(document.getElementsByClassName('ReviewTableTd')[0], document.getElementsByClassName('ReviewTableTd')[4].nextSibling);
    document.getElementById('reviewProfile'+desktopHeadCheck).style.display = "none";
    if (desktopHeadCheck == 5) {
      desktopHeadCheck = 1;
    } else {
      desktopHeadCheck++;
    }
    if (desktopTailCheck == 5) {
      desktopTailCheck = 1;
    } else {
      desktopTailCheck++;
    }
    document.getElementById('reviewProfile'+desktopTailCheck).style.display = "table-cell";
  }
}

function reviewPrevSlide() {
  if (window.outerWidth < 1024) {
    var temp1 = "reviewProfile"+mobileCheck;
    if (mobileCheck == 1) {
      mobileCheck = 5;
    } else {
      mobileCheck--;
    }
    var temp2 = "reviewProfile"+mobileCheck;
    document.getElementById(temp1).style.display = "none";
    document.getElementById(temp2).style.display = "table-cell";
  } else {
    var tr = document.getElementById('reviewTableTr');
    tr.insertBefore(document.getElementsByClassName('ReviewTableTd')[4], document.getElementsByClassName('ReviewTableTd')[0]);
    document.getElementById('reviewProfile'+desktopTailCheck).style.display = "none";
    if (desktopHeadCheck == 1) {
      desktopHeadCheck = 5;
    } else {
      desktopHeadCheck--;
    }
    if (desktopTailCheck == 1) {
      desktopTailCheck = 5;
    } else {
      desktopTailCheck--;
    }
    document.getElementById('reviewProfile'+desktopHeadCheck).style.display = "table-cell";
  }
}
