const loginBtn = document.getElementById("loginBtn");
const loginTitle = document.getElementById("loginTitle");
const loginStatus = localStorage.getItem("loginStatus");
const forgotPassword = document.getElementById("forgotPassword");

function checkLoginStatus() {
    if (loginStatus == "true") {
        hideHTMLTag("username");
        hideHTMLTag("password");
        hideHTMLTag("forgotPassword");

        loginBtn.innerHTML = "Logga ut";
        loginTitle.innerHTML = "Välkommen";
    }
}

function hideHTMLTag(id) {
    document.getElementById(id).style.display = "none";
}

checkLoginStatus();

loginBtn.onclick = function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (loginStatus == "true") {
        localStorage.setItem("loginStatus", false);

        localStorage.removeItem("username");

        location.reload();
    } else if (username == "Sara" && password == "qwe123") {
        localStorage.setItem("loginStatus", true);

        localStorage.setItem("username", username);

        location.reload();
    } else {
        alert("Inloggningen misslyckades");
    }
};
