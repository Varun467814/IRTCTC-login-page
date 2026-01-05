// CAPTCHA GENERATION
function generateCaptcha() {
    let chars = "ABCDEFGHJKLMNPQRSTUVWXYZ123456789";
    let captcha = "";
    for (let i = 0; i < 5; i++) {
        captcha += chars[Math.floor(Math.random() * chars.length)];
    }
    document.getElementById("captchaText").innerText = captcha;
}

generateCaptcha();

document.getElementById("refreshCaptcha").onclick = generateCaptcha;

// FORM SUBMISSION
document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let entered = document.getElementById("captchaInput").value;
    let actual = document.getElementById("captchaText").innerText;

    if (entered !== actual) {
        alert("Incorrect Captcha!");
        generateCaptcha();
        return;
    }

    alert("Login Successful (UI Only)");
});