let accountModal = $('#modal1').hide();
let usernameInput = $('#user-name').hide();
let emailInput = $('#email').hide();
let password1 = $('#password1').hide();
let password2 = $('#password2').hide();
let backBtn = $('.back-btn').hide();
let submitBtn = $('.submit-btn').hide();
let goBtn = $('.go-btn').hide();
let price = $('.price').hide();

$('img').on('click', function() {
    Materialize.toast('Clean Peaks Labs Gets It Right!', 4000)
});

$('#modal-btn').on('click', function() {
    $('#password1').hide();
    $('#password2').hide();
    $(accountModal).fadeIn("fast", function() {});
});

$('#stag').on('click', function() {
    $('.price').hide();
    $(price).fadeIn("fast", function() {});

});

$('.modal-close').on('click', function() {
    $(accountModal).fadeOut("fast", function() {});
})

$('.sign-in-btn').on('click', function() {
    $(emailInput).show();
    $(password1).show();
    $('#password2').hide();
    $(goBtn).show();
    $('.sign-up-btn').hide();
    $(submitBtn).hide();
    $('.sign-in-btn').hide();
    $(backBtn).show();
});

$('.sign-up-btn').on('click', function() {
    $(emailInput).show();
    $(password1).show();
    $(password2).show();
    $(goBtn).hide();
    $('.sign-up-btn').hide();
    $('.sign-in-btn').hide();
    $(submitBtn).show();
    $(backBtn).show();
    $(usernameInput).show();
    $(backBtn).show();
});

$('.submit-btn-one').on('click', function() {
    $(emailInput).show();
    $(password1).show();
    $(password2).show();
    $(goBtn).hide();
    $('.sign-up-btn').hide();
    $('.sign-in-btn').hide();
    $(submitBtn).show();
    $(backBtn).show();
    $(usernameInput).show();
    $(backBtn).show();
});

$(backBtn).on('click', function() {
    $('.sign-up-btn').show();
    $('.sign-in-btn').show();
    $('#user-name').hide();
    $(goBtn).hide();
    $('#email').hide();
    $('#password1').hide();
    $('#password2').hide();
    $('.back-btn').hide();
    $('.submit-btn').hide();
});

$('.button-collapse').on('click', function() {
    $(".user-view").show();
});

$.fn.extend({
  
  // Define the threeBarToggle function by extending the jQuery object
  threeBarToggle: function(options){
    
    // Set the default options
    var defaults = {
      color: 'black',
      width: 30,
      height: 25,
      speed: 400,
      animate: true
    }
    var options = $.extend(defaults, options); 
    
    return this.each(function(){
      
      $(this).empty().css({'width': options.width, 'height': options.height, 'background': 'transparent'});
      $(this).addClass('tb-menu-toggle');
      $(this).prepend('<i></i><i></i><i></i>').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('tb-active-toggle');
        if (options.animate) { $(this).toggleClass('tb-animate-toggle'); }
        $('.tb-mobile-menu').slideToggle(options.speed);
      });
      $(this).children().css('background', options.color);
    });
  },
  
  // Define the accordionMenu() function that adds the sliding functionality
  accordionMenu: function(options){
    
    // Set the default options
    var defaults = {
      speed: 400
    }
    var options =  $.extend(defaults, options);

    return this.each(function(){
      
      $(this).addClass('tb-mobile-menu');
      var menuItems = $(this).children('li');
      menuItems.find('.sub-menu').parent().addClass('tb-parent');
      $('.tb-parent ul').hide();
      $('.tb-parent > a').on('click', function(event) {
        event.stopPropagation();
        event.preventDefault();
        $(this).siblings().slideToggle(options.speed);
      });
      
    });
  }
});

// Convert any element into a three bar toggle
// Optional arguments are 'speed' (number in ms, 'slow' or 'fast') and 'animation' (true or false) to disable the animation on the toggle
$('#menu-toggle').threeBarToggle({color: 'green', width: 30, height: 25});

// Make any nested ul-based menu mobile
// Optional arguments are 'speed' and 'accordion' (true or false) to disable the behavior of closing other sub
$('#menu').accordionMenu();