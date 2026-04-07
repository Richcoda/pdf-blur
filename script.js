document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("googleLogin").onclick = () => {
      window.location.href = "https://accounts.google.com/";
    };
  
    document.getElementById("microsoftLogin").onclick = () => {
      window.location.href = "https://login.microsoftonline.com/";
    };
  });