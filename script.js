//referar till viktiga element
const loginBtn = document.getElementById("loginBtn");
const loginTitle = document.getElementById("loginTitle");
const loginStatus = localStorage.getItem("loginStatus");

//skapar en funktion för att kontrollera om användaren är inloggad
function checkLoginStatus() {
    //om inloggningen är sant så utförs detta
    if (loginStatus == "true") {
        //anropar funktionen hideHTMLTag som döljer input-fönstrerna
        hideHTMLTag("username");
        hideHTMLTag("password");

        //ersätter 'Logga in'-knapp med 'Logga ut'-knapp
        loginBtn.innerHTML = "Logga ut";
        loginTitle.innerHTML = "Välkommen";
    }
}

//skapar en funktion som döljer HTML-taggarna med id som referens
function hideHTMLTag(id) {
    document.getElementById(id).style.display = "none";
}

//anropar funktionen checkLoginStatus när användaren uppdaterar sidan för att veta om användaren är inloggad eller inte
checkLoginStatus();

//när användaren trycker på knappen så utförs funktionen
loginBtn.onclick = function () {
    //hämtar värdet som användaren har fyllt i och sparar i två olika variabler 'username' och 'password'
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (loginStatus == "true") {
        //om användaren är inloggad och klickar på logga ut så ska användaren loggas ut genom att sätta loginStatus variabeln till falskt
        localStorage.setItem("loginStatus", false);
        //tar bort inloggningsuppgifterna efter att användaren har loggat ut
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        //laddar om sidan när användaren har loggat ut
        location.reload();
    } else if (username == "Sara" && password == "qwe123") {
        //kontrollerar att användarnamnet stämmer med hjälp av Bool
        //om användaren har loggat in så sätts inloggningsstatusen till sant, och detta kollas nästa gång användaren uppdaterar sidan
        localStorage.setItem("loginStatus", true);
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        //laddar om sidan när användaren har loggat in
        location.reload();
    } else {
        //om användaren har skrivit fel användarnamn eller lösenord kommer ett felmeddelande upp
        alert("Inloggningen misslyckades");
    }
};
