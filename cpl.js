let accountModal = $('#modal1').hide();
let usernameInput = $('#user-name').hide();
let emailInput = $('#email').hide();
let password1 = $('#password').hide();
let password2 = $('#password2').hide();
let backBtn = $('.back-btn').hide();
let submitBtn = $('.submit-btn').hide();

// msql
// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'display:none;',
//   database : 'cpl'
// });
 
// connection.connect();
 
// connection.query('SELECT * FROM users', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 
// connection.end();

$('.head').on('click', function() {
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

$(backBtn).on('click', function() {
    $('.sign-up-btn').show();
    $('.sign-in-btn').show();
    $('#user-name').hide();
    $('#email').hide();
    $('#password').hide();
    $('#password2').hide();
    $('.back-btn').hide();
    $('.submit-btn').hide();
})



