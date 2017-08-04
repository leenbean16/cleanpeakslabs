let accountModal = $('#modal1').hide();
let usernameInput = $('#user-name').hide();
let emailInput = $('#email').hide();
let password1 = $('#password').hide();
let password2 = $('#password2').hide();
let backBtn = $('.back-btn').hide();
let submitBtn = $('.submit-btn').hide();


$('img').on('click', function() {
    Materialize.toast('Clean Peaks Labs Gets It Right!', 4000)
});

$('#modal-btn').on('click', function() {
    $(accountModal).fadeIn("fast", function() {});
});

$('.modal-close').on('click', function() {
    $(accountModal).fadeOut("fast", function() {});
})

$('.sign-in-btn').on('click', function() {
    $(emailInput).show();
    $(password1).show();
    $('.sign-up-btn').hide();
    $(submitBtn).show();
    $('.sign-in-btn').hide();
    $(backBtn).show();
});

$('.sign-up-btn').on('click', function() {
    $(emailInput).show();
    $(password1).show();
    $(password2).show();
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
    $('#email').hide();
    $('#password').hide();
    $('#password2').hide();
    $('.back-btn').hide();
    $('.submit-btn').hide();
});

$('.button-collapse').on('click', function(){
    $(".user-view").show();
});

