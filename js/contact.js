var button = document.querySelector(".send");

var nameInput = document.querySelector("#name");
var email = document.querySelector("#email");
var message = document.querySelector("#message");

button.addEventListener("click", async function () {

  if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) || nameInput.value.length <= 1 || message.value.length <= 1) {
    success = false;
    alert("Please check the fields");
  } else {
    var submit = $('.submitting'),
      waitText = 'Submitting...';
    submit.css('display', 'block').text(waitText);

    await fetch(`https://script.google.com/macros/s/AKfycbw_8RcZXUsd8vp9Bv7-tMa65zHSc-9H9jMYg--m/exec?name=${nameInput.value}&email=${email.value}&message=${message.value}`, {
      mode: 'no-cors' // 'cors' throws error
    }).then(value => {
      console.log(value.body);

      $('#form-message-warning').hide();
      setTimeout(function () {
        $('#contactForm').fadeOut();
      }, 1000);
      setTimeout(function () {
        $('#form-message-success').fadeIn();
      }, 1400);

      email.value = "";
      nameInput.value = "";
      message.value = "";

    })
  }
});
