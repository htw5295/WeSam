// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

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

var check = 0;
//창 크기 변화 감지
$(window).resize(function() {
  var windowWidth = $(window).width();
  var width = -($(".MainImageTable").width() / 2);
  document.getElementsByClassName('MainImageTable')[0].style.marginLeft = width+"px";

  if (windowWidth < 1250 && check == 0) {
    document.getElementById('mainParagraphTitle').style.fontSize = "43px";
    document.getElementById('mainParagraph').style.fontSize = "38px";
    document.getElementsByClassName('MainImageTable')[0].style.top = "15%";
    document.getElementById('reviewProfile2').style.display = "none";
    check = 1;
  } else {
    document.getElementById('mainParagraphTitle').style.fontSize = "58px";
    document.getElementById('mainParagraph').style.fontSize = "58px";
    document.getElementsByClassName('MainImageTable')[0].style.top = "10%";
    document.getElementById('reviewProfile2').style.display = "table-cell";
    check = 0;
  }
})
