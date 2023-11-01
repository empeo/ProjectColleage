console.log(
  "%cthis is website for all cars services",
  "font-size:25px;  color:red; text-transform:capitalize;"
);

//#region card reviews
let slides = document.querySelectorAll(".card-contain");
let index = 0;
function next() {
  slides[index].classList.remove("active-slide");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active-slide");
}
function prev() {
  slides[index].classList.remove("active-slide");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active-slide");
}
// #endregion

// #region message send

function form2(e) {
  const name_message = document.querySelector("#name_message");
  const email_message = document.querySelector("#email_message");
  const subject_message = document.querySelector("#subject_message");
  const message_message = document.querySelector("#message_message");
  const name_error = document.querySelector("#name_error");
  const email_message_error = document.querySelector("#email_error");
  const subject_message_error = document.querySelector("#subject_error");
  const message_message_error = document.querySelector("#message_error");
  const bt = document.querySelector("#btn-form-message");
  let uservalid = false;
  let emailvalid = false;
  let subjectvalid = false;
  let messagevalid = false;
  if (
    name_message.value === "" ||
    name_message.value.length < 5 ||
    name_message.value.length > 20
  ) {
    $(name_error).fadeIn(function () {
      name_error.innerHTML =
        "<span style='color:red;font-size:1.5rem'>hint enter your name and between 5 and 20,please!</span>";
    });
    name_message.style.border = "1px solid red";
    name_message.focus();
    uservalid = false;
    e.preventDefault();
  } else if (
    email_message.value.length < 5 ||
    email_message.value.length > 35
  ) {
    $(name_error).fadeOut();
    name_message.style.border = "1px solid green";
    $(email_message_error).fadeIn(function () {
      email_message_error.innerHTML =
        "<span style='color:red;font-size:1.5rem'>hint enter your email and between 5 and 35,please!</span>";
    });
    email_message.style.border = "1px solid red";
    email_message.focus();
    emailvalid = false;
    e.preventDefault();
  } else if (
    subject_message.value.length < 10 ||
    subject_message.valuelength > 20
  ) {
    $(email_message_error).fadeOut();
    email_message.style.border = "1px solid green";
    $(subject_message_error).fadeIn(function () {
      subject_message_error.innerHTML =
        "<span style='color:red;font-size:1.5rem'>hint enter your subject and between 10 and 20,please!</span>";
    });
    subject_message.style.border = "1px solid red";
    subject_message.focus();
    subjectvalid = false;
    e.preventDefault();
  } else if (message_message.value.length < 10) {
    $(subject_message_error).fadeOut();
    subject_message.style.border = "1px solid green";
    $(message_message_error).fadeIn(function () {
      message_message_error.innerHTML =
        "<span style='color:red;font-size:1.5rem'>hint enter your message and more than 10,please!</span>";
    });
    message_message.style.border = "1px solid red";
    message_message.focus();
    messagevalid = false;
    e.preventDefault();
  } else if (
    name_message.value.length > 5 &&
    name_message.value.length < 20 &&
    email_message.value.length > 5 &&
    email_message.value.length < 35 &&
    subject_message.value.length > 10 &&
    subject_message.value.length < 20 &&
    message_message.value.length > 10
  ) {
    $(message_message_error).fadeOut();
    message_message.style.border = "1px solid green";
    uservalid = true;
    emailvalid = true;
    subjectvalid = true;
    messagevalid = true;
  } else {
    e.preventDefault();
  }
}
// #endregion

// window.onscroll = function () {
//   let divp = document.querySelector(".cards-review_container");
//   let sti = divp.offsetTop;
//   if (scrollY >= sti - 300) {
//     if (divp.classList.contains("close")) {
//       divp.classList.replace("close", "active");
//     } else {
//       divp.classList.add("active");
//     }
//   } else {
//     divp.classList.replace("active", "close");
//   }
// };
