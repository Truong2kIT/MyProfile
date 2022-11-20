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
        "https://script.google.com/macros/s/AKfycbx_4AIEtYohM0YTETFcw_CDdPjAbaC8qZ0-eBSKen5B02VFpeBKjusV8zsH5Mn6tAhL/exec";
      const form = document.forms["submit-to-google-sheet"];

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => console.log("Success!", response))
          .catch((error) => console.error("Error!", error.message));
      });