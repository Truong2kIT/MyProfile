var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
function opentab(tabName) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}
// menu
var sideMeu = document.getElementById("sideMenu");
function openMenu() {
  sideMeu.style.right = "0";
}
function closeMenu() {
  sideMeu.style.right = "-200px";
}

//  contact form
const scriptURL =
  "https://script.google.com/macros/s/AKfycbx-Km5g9lIlRUuUS-B0RvdQxJRioxaLlIuT3BJCzsJpR8KK5t7RV6ui3QDhCvrvuq_K/exec"
const form = document.forms["submit-to-google-sheet"]
const msg = document.getElementById("msg")
form.addEventListener("submit", (e) => {
  e.preventDefault()
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(response => {
        msg.innerHTML=" Lời nhắn đã gửi thành công"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
    })
    .catch((error) => console.error("Error!", error.message))
});
