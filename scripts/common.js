(function($){
  'use strict';
  $(function(){
    $('.hamburger').on('click tap', function(){
      $('.side').toggleClass('expanded');
    });
  });
})(jQuery);
