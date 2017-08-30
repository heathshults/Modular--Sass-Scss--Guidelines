//Hamburger toggle icon
$(document).ready(function () {
  var trigger = $('.hamburger'),
    //overlay = $('.overlay'),
    isClosed = false;

  trigger.click(function () {
    hamburger_cross();
  });

  function hamburger_cross() {

    if (isClosed == true) {
      //overlay.hide();
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      isClosed = false;
    } else {
      //overlay.show();
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      isClosed = true;
    }
  }
});
$('[data-toggle="offcanvas"]').click(function () {
  $('#wrapper').toggleClass('toggled');
});

// menu hight and scrolling control  
$(document).ready(function () {
  var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  $('div.nav-scroller').css("height", vh - 20);
  //$('#wrapper').toggleClass('toggled');

  $(window).on('resize', function () {
    //console.log(vh);
    var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    $('div.nav-scroller').css("height", vh - 20);
  });

});

// menu highlight current page 
// $('li.nav-item a').click(function() {
  
// });

// $(document).ready(function navHighlighter() {
//   var url = window.location.hash;
//   var filename = url.substr(url.lastIndexOf('/') + 1);
//   //console.log(url, filename);
//   $('li.nav-item a[href$="' + filename + '"]').parent().addClass("active");
// });

$(document).ready(function() {
  var url = window.location.hash;
  var filename = url.substr(url.lastIndexOf('/') + 1);
  console.log(url, filename);
  $('a.nav-link[href$="' + filename + '"]').parent().addClass("active");
  
  
})

$(".nav-link").click(function(){
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  })


//$('body').scrollspy({ target: '#wrapper' })
