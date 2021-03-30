// Switch between brand Plex and OpenDyslexic
window.onload = function() {
  if (document.cookie.includes("font=DYSLEXIC")) {
    document.getElementById("css").href = "/scss/dyslexia.css";
  }
}
function toggleDyslexia(){
  if (document.cookie.includes("font=DYSLEXIC")) {
    document.cookie = "font=PLEX; expires=Mon, 31 Dec 2038 12:00:00 UTC; path=/";
  } else {
    document.cookie = "font=DYSLEXIC; expires=Thu, 31 Dec 2038 12:00:00 UTC; path=/"
  }
  window.location.reload();
}
