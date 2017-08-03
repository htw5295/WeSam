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

//창 크기 변화 감지
$(window).resize(function() {
  var windowWidth = $(window).width();
  var check = 0;

  if (windowWidth < 1150 && check == 0) {
    document.getElementsByClassName('MainImageTable')[0].style.top = "6%";
    check = 1;
  } else {
    document.getElementsByClassName('MainImageTable')[0].style.top = "20%";
    check = 0;
  }
})
