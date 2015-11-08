var main = function() {
    $(".nottravel").hide();
  $(".hidebtn").click(function() {
      $(".nottravel").toggle();
      $(this).toggleClass('dark');
  });
};

$(document).ready(main);
