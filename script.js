document.addEventListener("DOMContentLoaded", () => {
    const googleBtn = document.getElementById("googleLogin");
    const microsoftBtn = document.getElementById("microsoftLogin");
  
    if (googleBtn) {
      googleBtn.onclick = () => {
        window.location.href = "https://accounts.google.com/";
      };
    }
  
    if (microsoftBtn) {
      microsoftBtn.onclick = () => {
        window.location.href = "https://login.microsoftonline.com/";
      };
    }
  });