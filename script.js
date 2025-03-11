
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || mobile === "" || subject === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert("Message Sent Successfully!");
    document.getElementById("contactForm").reset();
});

function Troovely() {
  window.open("", "_blank");
}
function rcfd() {
  window.open("https://github.com/jianluliangtuang/bottle", "_blank");
}
function portfolio() {
  window.open("https://github.com/jianluliangtuang/troovely.git", "_blank");
}


